<?php

namespace App\Http\Controllers;

use App\Http\Requests\CheckoutBillingDetailsRequest;
use App\Http\Requests\CheckoutFinishRequest;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\URL;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Inertia\Response;
use Laravel\Cashier\Exceptions\PaymentActionRequired;
use Laravel\Cashier\Exceptions\PaymentFailure;
use Laravel\Cashier\Subscription;
use Symfony\Component\HttpFoundation;
use Throwable;

class CheckoutController extends Controller
{
    /**
     * @return Response
     * @throws AuthorizationException
     */
    public function myPlan(): RedirectResponse|Response
    {
        //check if not authorized...
        if(!request()->user()){
            //set session..
            request()->session()->put('redirect_plans', '1');
            //redirect to sign in..
            return redirect()->route('auth.sign-in');
        }

        $this->authorize('subscribe-to-plan');

        return Inertia::render('MyPlan', [
            'plans' => config('plans'),
        ]);
    }

    /**
     * @param CheckoutBillingDetailsRequest $request
     * @return RedirectResponse|Response
     */
    public function billingDetails(CheckoutBillingDetailsRequest $request): RedirectResponse|Response
    {
        /**
         * Only allow requests via POST.
         */
        if (!$request->isMethod('POST')) {
            return redirect()->back();
        }

        return Inertia::render('BillingDetails', [
            'stripePublicKey' => config('cashier.key'),
            'countries' => config('countries'),
            'variables' => $request->validated(),
        ]);
    }

    /**
     * @param CheckoutFinishRequest $request
     * @return RedirectResponse
     */
    public function finish(CheckoutFinishRequest $request): RedirectResponse
    {
        $data = $request->validated();
        $plan = $request->user()->getPlan();

        $paymentMethod = $data['payment_method'];
        $promoCode = config('promo_codes')[$data['promo_code']]['id'] ?? null;

        $request->user()->createOrGetStripeCustomer($paymentMethod['billing_details']);

        try {
            /**
             * If user doesn't have a subscription.
             */
            if (!$plan) {
                $newPlan = $this->createSubscription($data['plan_name'], $data['plan_price']['id'],
                    $paymentMethod['id'],
                    null, $promoCode);

                return $this->redirectToSuccess($newPlan);
            }

            /**
             * If user has a subscription.
             */
            $plan = $request->user()->getPlan();

            /**
             * Basic plan selected.
             */
            if ($data['plan_name'] === 'Basic') {
                $plan->cancel();

                return redirect()->route('checkout.my_plan');
            }

            /**
             * Changed only billing cycle (monthly/yearly).
             */
            if ($data['plan_name'] === $plan->name) {
                $plan->swapAndInvoice($data['plan_price']['id']);

                return $this->redirectToSuccess($plan);
            }

            /**
             * Changed plan
             */
            $plan->cancelNow();

            $trialDays = 7;
            /**
             * Don't give trial days if the user has been previously subscribed.
             */
            if (!empty($request->user()->subscriptions)) {
                $trialDays = null;
            }

            $newPlan = $this->createSubscription($data['plan_name'], $data['plan_price']['id'], $paymentMethod['id'],
                $trialDays);

            return $this->redirectToSuccess($newPlan);

        } catch (Throwable $exception) {
            Log::critical($exception);
        }
    }

    /**
     * @param string $planName
     * @param string $priceId
     * @param string $paymentMethodId
     * @param int|null $trialDays
     * @param string|null $promoCode
     * @return Subscription
     * @throws PaymentActionRequired
     * @throws PaymentFailure
     */
    public function createSubscription(
        string $planName,
        string $priceId,
        string $paymentMethodId,
        int $trialDays = null,
        string $promoCode = null
    ): Subscription {
        $subscription = Auth::user()->newSubscription($planName, $priceId);

        if ($trialDays) {
            $subscription = $subscription->trialDays($trialDays);
        }

        if (!empty($promoCode)) {
            $subscription = $subscription->withPromotionCode($promoCode);
        }

        $subscription = $subscription->create($paymentMethodId);

        Auth::user()->getPlan()->syncTaxRates();

        return $subscription;
    }

    /**
     * @param $subscription
     * @return RedirectResponse
     */
    public function redirectToSuccess($subscription): RedirectResponse
    {
        return redirect()->temporarySignedRoute('checkout.success', now()->addHour(), [
            'id' => $subscription->stripe_id,
        ]);
    }

    /**
     * @param string $id
     * @return Response
     */
    public function success(string $id): Response
    {
        return Inertia::render('Success', [
            'downloadInvoiceUrl' => URL::signedRoute('checkout.download_invoice', [
                'id' => $id,
            ])
        ]);
    }

    /**
     * @param string $id
     * @param Request $request
     * @param string|null $invoiceId
     * @return HttpFoundation\Response
     */
    public function downloadInvoice(
        string $id,
        Request $request,
        string $invoiceId = null
    ): HttpFoundation\Response {
        $invoice = $request->user()->invoicesIncludingPending()->first();

        if ($invoiceId) {
            /**
             * Get latest invoice (filter out invoices that dont belong to current subscription)
             */
            $invoice = $request->user()->invoicesIncludingPending()
                ->filter(function ($invoice) use ($id) {
                    return $invoice->subscription === $id;
                })
                ->last();
        }

        $company = config('company');

        return $request->user()->downloadInvoice($invoice->id, [
            'vendor' => $company['name'],
            'product' => Str::title($request->user()->getPlan()->name),
            'street' => $company['street'],
            'location' => $company['zip'] . ' ' . $company['city'] . ', ' . $company['country'],
            'phone' => $company['phone'],
            'email' => $company['email'],
            'url' => URL::to('/'),
        ], 'Invoice_' . $invoice->number);
    }
}

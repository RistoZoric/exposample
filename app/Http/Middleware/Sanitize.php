<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class Sanitize
{
    /**
     * Handle an incoming request.
     *
     * @param Request $request
     * @param Closure $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next): mixed
    {
        $input = $request->all();
        array_walk_recursive($input, function (&$input) use ($request) {
            if (!$request->is('nova-api/*')) {
                $input = strip_tags($input);
            }
        });
        $request->merge($input);

        return $next($request);
    }
}

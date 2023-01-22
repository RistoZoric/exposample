<?php

return [
    'Basic' => [
        'id' => null,
        'name' => 'Basic',
        'description_length' => 65,
        'searchable_tags' => 5,
        'invitable_customers' => 20,
        'monthly' => [
            'id' => null,
            'value' => 0,
            'tax_rate' => [
                'id' => null,
                'percentage' => 0,
            ],
        ],
        'yearly' => [
            'id' => null,
            'value' => 0,
            'tax_rate' => [
                'id' => null,
                'percentage' => 0,
            ],
        ],
    ],
    'Standard' => [
        'id' => 'prod_JdZrQg20D2wQuO',
        'name' => 'Standard',
        'description_length' => 120,
        'searchable_tags' => 8,
        'invitable_customers' => 50,
        'monthly' => [
            'id' => env('STRIPE_STANDARD_PLAN_MONTHLY_ID'),
            'value' => 9.99,
            'tax_rate' => [
                'id' => env('STRIPE_TAX_RATE_ID'),
                'percentage' => 5,
            ],
        ],
        'yearly' => [
            'id' => env('STRIPE_STANDARD_PLAN_YEARLY_ID'),
            'value' => 99,
            'tax_rate' => [
                'id' => env('STRIPE_TAX_RATE_ID'),
                'percentage' => 5,
            ],
        ],
    ],
    'Premium' => [
        'id' => 'prod_JdZreimxPEu56o',
        'name' => 'Premium',
        'description_length' => 200,
        'searchable_tags' => 12,
        'invitable_customers' => 'unlimited',
        'monthly' => [
            'id' => env('STRIPE_PREMIUM_PLAN_MONTHLY_ID'),
            'value' => 29.99,
            'tax_rate' => [
                'id' => env('STRIPE_TAX_RATE_ID'),
                'percentage' => 5,
            ],
        ],
        'yearly' => [
            'id' => env('STRIPE_PREMIUM_PLAN_YEARLY_ID'),
            'value' => 299,
            'tax_rate' => [
                'id' => env('STRIPE_TAX_RATE_ID'),
                'percentage' => 5,
            ],
        ],
    ],
];

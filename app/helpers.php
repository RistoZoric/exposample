<?php

if (!function_exists('is_base64_image')) {
    /**
     * @param $string
     * @return bool
     */
    function is_base64_image($string): bool
    {
        if (preg_match('/^data:image/', $string)) {
            return true;
        }
        return false;
    }
}

if (!function_exists('get_plan_by_name')) {
    /**
     * @param $name
     * @return array|null
     */
    function get_plan_by_name($name): array|null
    {
        $plans = config('plans');

        if (array_key_exists($name, $plans)) {
            return $plans[$name];
        }

        return null;
    }
}
 
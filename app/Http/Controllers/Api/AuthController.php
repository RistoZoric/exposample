<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    /**
     * @param int $id
     * @param Request $request
     */
    public function addFavorite(int $id, Request $request)
    {
        $request->user()->favorites()
            ->updateOrCreate(['favorite_id' => $id]);
    }

    /**
     * @param int $id
     * @param Request $request
     */
    public function removeFavorite(int $id, Request $request)
    {
        $request->user()->favorites()
            ->favoriteId($id)
            ->delete();
    }
}

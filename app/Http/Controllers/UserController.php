<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Inertia\Controller;
use Illuminate\Http\Request;

class UserController extends Controller
{
    //
    public function index()
    {
        $data = [
            'title' => 'Welcome'
        ];
        return Inertia::render('User/Welcome', $data);
    }
}

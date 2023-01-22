<?php

namespace App\Http\Livewire\Index;

use App\Models\User;
use Livewire\Component;

class HeroSearch extends Component
{
    public $query = '';

    public function render()
    {
        $users = User::search($this->query)->take(4)->get();

        return view('components.index.hero-search', compact('users'));
    }
}

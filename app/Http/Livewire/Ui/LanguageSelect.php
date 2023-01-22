<?php

namespace App\Http\Livewire\Ui;

use Illuminate\Support\Facades\Session;
use Livewire\Component;

class LanguageSelect extends Component
{
    protected $listeners = ['change' => 'setLanguage'];

    public function setLanguage($locale)
    {
        Session::put('locale', $locale);

        return redirect()->route('pages.home');
    }

    public function render()
    {
        return view('components.ui.language-select');
    }
}

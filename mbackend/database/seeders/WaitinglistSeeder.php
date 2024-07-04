<?php

namespace Database\Seeders;

use App\Models\WaitingList;
use Illuminate\Database\Seeder;

class WaitinglistSeeder extends Seeder
{
    public function run(): void
    {
        WaitingList::factory()->count(10)->create();
    }
}

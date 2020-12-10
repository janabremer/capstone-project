<?php

namespace App\Factory;

use Pagerfanta\Adapter\ArrayAdapter;
use Pagerfanta\Pagerfanta;

class PaginationFactory
{
    public function create($products) {
        $adapter = new ArrayAdapter($products);
        $pagerfanta = new Pagerfanta($adapter);

        return $pagerfanta;
    } 
}
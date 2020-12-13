<?php

namespace App\Factory;

use Pagerfanta\Adapter\ArrayAdapter;
use Pagerfanta\Pagerfanta;

class PaginationFactory
{
    /**
     * @param array<string> $products
     */
    public function create(array $products): object
    {
        $adapter = new ArrayAdapter($products);
        $pagerfanta = new Pagerfanta($adapter);

        return $pagerfanta;
    } 
}
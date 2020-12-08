<?php

namespace App\Pagination;

class PaginatedCollection
{
    private $products;
    private $total;
    private $count;

    public function __construct($products, int $total)
    {
        $this->products = $products;
        $this->total = $total;
        $this->count = count($products);
    } 

}
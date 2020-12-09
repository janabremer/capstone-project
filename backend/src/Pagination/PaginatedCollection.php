<?php

namespace App\Pagination;

class PaginatedCollection
{
    private $products;
    private $total;
    private $count;
    private $_links = array();

    public function __construct(array $products, int $total)
    {
        $this->products = $products;
        $this->total = $total;
        $this->count = count($products);
    } 

    public function addLink($ref, $url)
    {
        $this->_links[$ref] = $url;
    }
}
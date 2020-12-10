<?php

namespace App\Service;

use App\Factory\PaginationFactory;
use App\Service\PaginationLinkService;

class PaginationService 
{
    private PaginationLinkService $paginationLinkService;
    private PaginationFactory $paginationFactory;

    public function __construct(PaginationLinkService $paginationLinkService, PaginationFactory $paginationFactory)
    {
        $this->paginationLinkService = $paginationLinkService;
        $this->paginationFactory = $paginationFactory;
    }

    /**
     * @param array<string> $products
     * @return array<string, mixed> $paginatedCollection
     */
    public function createCollection(array $products, object $request, string $route): array
    {
        $page = $request->query->get('page',1);
        
        $pager = $this->paginationFactory->create($products);
        $pager->setMaxPerPage(25);
        $pager->setCurrentPage($page);
        
        $paginatedProducts = array();
        foreach ($pager->getCurrentPageResults() as $product) {
            $paginatedProducts[] = $product;
        }

        $links = $this->paginationLinkService->createLinks($route, $page, $pager);  

        $paginatedCollection = [
            'total' => $pager->getNbResults(),
            'count' => count($paginatedProducts),
            'links' => $links,
            'products' => $paginatedProducts
        ];

        return $paginatedCollection;
    }
}
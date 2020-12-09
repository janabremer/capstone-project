<?php

namespace App\Pagination;

use Symfony\Component\HttpFoundation\Request;
use Pagerfanta\Pagerfanta;
use Symfony\Component\Routing\RouterInterface;
use Pagerfanta\Adapter\ArrayAdapter;
use App\Service\PaginationLinkService;


class PaginationFactory
{
    private $router;

    public function __construct(RouterInterface $router, PaginationLinkService $paginationLinkService)
    {
        $this->router = $router;
        $this->paginationLinkService = $paginationLinkService;
    }

    public function createCollection(array $products, Request $request, string $route, array $routeParams = array())
    {
        $page = $request->query->get('page',1);
        $adapter = new ArrayAdapter($products);
        $pagerfanta = new Pagerfanta($adapter);
        $pagerfanta->setMaxPerPage(25);
        $pagerfanta->setCurrentPage($page);

        foreach ($pagerfanta->getCurrentPageResults() as $product) {
            $paginatedProducts[] = $product;
        }
        $total = $pagerfanta->getNbResults();
        $links = $this->paginationLinkService->setLinks($page, $pagerfanta->getNbPages(), $route, $routeParams);  
    
        $createLinkUrl = function($targetPage) use ($route, $routeParams) {
            return $this->router->generate($route, array_merge(
                $routeParams,
                array('page' => $targetPage)
            ));
        };

        // $links['self'] = $createLinkUrl($page);
        // $links['first'] = $createLinkUrl(1);
        // $links['last'] = $createLinkUrl($pagerfanta->getNbPages());
        
        if ($pagerfanta->hasNextPage()) {
            $links['next'] = $createLinkUrl($pagerfanta->getNextPage());
        }
        if ($pagerfanta->hasPreviousPage()) {
            $links['prev'] = $createLinkUrl($pagerfanta->getPreviousPage());
        }
    
        $paginatedCollection = [
            'total' => $pagerfanta->getNbResults(),
            'count' => count($paginatedProducts),
            'links' => $links,
            'products' => $paginatedProducts
        ];
        
        return $paginatedCollection;
    }
}
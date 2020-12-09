<?php

namespace App\Service;

use Symfony\Component\Routing\RouterInterface;

class PaginationLinkService {
    private $router;

    public function __construct(RouterInterface $router)
    {
        $this->router = $router;
    }


    public function setLinks($currentPage, $lastPage, $route, $routeParams) {

        $createLinkUrl = function($targetPage) use ($route, $routeParams) {
            return $this->router->generate($route, array_merge(
                $routeParams,
                array('page' => $targetPage)
            ));
        };

        $links['self'] = $createLinkUrl($currentPage);
        $links['first'] = $createLinkUrl(1);
        $links['last'] = $createLinkUrl($lastPage);
        
        // if ($pagerfanta->hasNextPage()) {
        //     $links['next'] = $createLinkUrl($nextPage);
        // }
        // if ($pagerfanta->hasPreviousPage()) {
        //     $links['prev'] = $createLinkUrl($previousPage);
        // }

        return $links;
    }
}
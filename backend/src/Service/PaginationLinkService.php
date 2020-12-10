<?php

namespace App\Service;

use Symfony\Component\Routing\RouterInterface;

class PaginationLinkService 
{
    private RouterInterface $router;

    public function __construct(RouterInterface $router)
    {
        $this->router = $router;
    }

    /**
     * @return array<string, mixed> $links
     */
    public function createLinks(string $route, int $currentPage, object $pager): array
    {
        $createLinkUrl = function($targetPage) use ($route) {
            return $this->router->generate($route, array('page' => $targetPage));
        };

        $links['self'] = $createLinkUrl($currentPage);
        $links['first'] = $createLinkUrl(1);
        $links['last'] = $createLinkUrl($pager->getNbPages());
        
        if ($pager->hasNextPage()) {
            $links['next'] = $createLinkUrl($pager->getNextPage());
        }
        if ($pager->hasPreviousPage()) {
            $links['prev'] = $createLinkUrl($pager->getPreviousPage());
        }

        return $links;
    }
}
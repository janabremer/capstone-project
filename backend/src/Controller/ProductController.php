<?php

namespace App\Controller;

use App\Controller\BaseController;
// use App\Pagination\PaginatedCollection;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;
use App\Repository\ProductRepository;
use Symfony\Component\HttpFoundation\Request;
use Pagerfanta\Adapter\DoctrineORMAdapter;
use Pagerfanta\Pagerfanta;

class ProductController extends BaseController
{
    /**
     * @Route("/products", methods={"GET"})
     */
    public function getAllProducts(ProductRepository $repository, Request $request): JsonResponse {
        $page = $request->query->get('page',1);

        $qb = $repository->findAllQueryBuilder();

        $adapter = new DoctrineORMAdapter($qb);
        $pagerfanta = new Pagerfanta($adapter);
        $pagerfanta->setMaxPerPage(25);
        $pagerfanta->setCurrentPage($page);

        $products = array();
        foreach ($pagerfanta->getCurrentPageResults() as $product) {
            $products[] = $product;
        }

        $response = $this->jsonResponse([
            'total' => $pagerfanta->getNbResults(),
            'count' => count($products),
            'products' => $products
        ]);

        // $paginatedCollection
        //     ->products = $products
        //     ->total = $pagerfanta->getNbResults()
        // ;

        return $this->jsonResponse($response);
    }






    // public function getAllProducts(ProductRepository $repository): JsonResponse
    // {
    //     $products = $repository->findAll();
    //     return $this->jsonResponse($products);
    // }



    /**
     * @Route(
     *      "/products/{id}", 
     *      methods={"GET"},
     *      requirements={"id"="\d+"}
     * )
     */
    public function getProductById(
        int $id, 
        ProductRepository $repository): JsonResponse 
    {
        $product = $repository->find($id);

        if (is_null($product)) {
            return $this->notFoundResponse('product not found');    
        }
        
        return $this->jsonResponse($product);
    }

    /**
     * @Route("/categories", methods={"GET"})
     */
    public function getAllCategories(
        ProductRepository $repository): JsonResponse
    {
        $categories = $repository->findAllCategories();
        return $this->jsonResponse($categories);
    }

    /**
     * @Route(
     *      "/search/name/{query}", 
     *      methods={"GET"},
     *      requirements={"query"=".+"}
     * )
     */
    public function getByNameSearch(
        string $query,
        ProductRepository $repository): JsonResponse 
    {
        $products = $repository->searchByName($query);

        if (sizeof($products) === 0) {
            return $this->notFoundResponse('no products found');    
        }

        return $this->jsonResponse($products);
    }

    /**
     * @Route(
     *      "/search/category/{query}",
     *      methods={"GET"},
     *      requirements={"query"=".+"}
     * )
     */
    public function getByCategorySearch(
        string $query,
        ProductRepository $repository): JsonResponse
    {
        $categories = $repository->searchByCategory($query);

        if (sizeof($categories) === 0) {
            return $this->notFoundResponse('no categories found');    
        }
        
        return $this->jsonResponse($categories);
    }
}

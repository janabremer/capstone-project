<?php

namespace App\Controller;

use App\Controller\BaseController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;
use App\Repository\ProductRepository;
use Symfony\Component\HttpFoundation\Request;
use App\Service\PaginationService;


class ProductController extends BaseController
{

    /**
     * @Route("/products", methods={"GET"}, name="product_collection")
     */
    public function getAllProducts(
        ProductRepository $repository, 
        Request $request,
        PaginationService $paginationService): JsonResponse 
    {
        $products = $repository->findAll();
        $route = 'product_collection';
        $paginatedCollection = $paginationService->createCollection($products, $request, $route);

        return $this->jsonResponse($paginatedCollection);
    }

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
     * @Route("/categories", methods={"GET"}, name="category_collection")
     */
    public function getAllCategories(
        ProductRepository $repository,
        Request $request, 
        PaginationService $paginationService): JsonResponse
    {
        $categories = $repository->findAllCategories();
        $route = 'category_collection';
        $paginatedCollection = $paginationService->createCollection($categories, $request, $route);

        return $this->jsonResponse($paginatedCollection);
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

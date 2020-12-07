<?php

namespace App\Controller;

use App\Controller\BaseController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;
use App\Repository\ProductRepository;

class ProductController extends BaseController
{
    /**
     * @Route("/products", methods={"GET"})
     */
    public function getAllProducts(ProductRepository $repository): JsonResponse
    {
        $products = $repository->findAll();
        return $this->jsonResponse($products);
    }

    /**
     * @Route("/products/{id}", methods={"GET"})
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
     * @Route("/search/name/{query}", methods={"GET"})
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
     * @Route("/search/category/{query}", methods={"GET"})
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

<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\Routing\Annotation\Route;
use App\Repository\ProductRepository;
use App\Entity\Product;

class ProductController extends AbstractController
{
    /**
     * @Route("/products", methods={"GET"})
     */
    public function index(
        ProductRepository $repository, 
        SerializerInterface $serializer): JsonResponse
    {
        $products = $repository->findAll();

        return new JsonResponse(
            $serializer->serialize($products, 'json'),
            JsonResponse::HTTP_OK,
            [],
            true
        );

    }

    /**
     * @Route("/products/{id}", methods={"GET"})
     */
    public function getById(
        int $id, 
        ProductRepository $repository, 
        SerializerInterface $serializer): JsonResponse 
    {
        $product = $repository->find($id);
        if (is_null($product)) {
            return new JsonResponse(['success' => false], JsonResponse::HTTP_NOT_FOUND);    
        }
        return new JsonResponse(
            $serializer->serialize($product, 'json'), 
            JsonResponse::HTTP_OK, 
            [], 
            true
        );
    }

    /**
     * @Route("/search/{query}", methods={"GET"})
     */
    public function getBySearch(
        string $query,
        ProductRepository $repository, 
        SerializerInterface $serializer): JsonResponse 
    {
        $products = $repository->findBy(array('name' => ($query)));
        if (sizeof($products) === 0) {
            return new JsonResponse(['success' => false], JsonResponse::HTTP_NOT_FOUND);    
        }
        return new JsonResponse(
            $serializer->serialize($products, 'json'), 
            JsonResponse::HTTP_OK, 
            [], 
            true
        );
    }
}

<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class HomeController extends AbstractController
{
    /**
     * @Route("/", methods={"GET"})
     */
    public function index(): Response
    {
        return $this->json([
            'message' => 'Welcome to the virtual water API',
            'all products' => '/products',
            'all categories' => '/categories',
            'product by id' => '/products/id',
            'product search by name' => '/search/name/query_term',
            'product search by category' => '/search/category/query_term'
        ]);
    }
}

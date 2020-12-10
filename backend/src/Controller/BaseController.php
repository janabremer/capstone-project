<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Serializer\SerializerInterface;

abstract class BaseController extends AbstractController 
{
    private $serializer;
    
    public function __construct(SerializerInterface $serializer)
    {
        $this->serializer = $serializer;
    }

    /**
     * @param array|object $data
     * 
     * @return JsonResponse
     */
    protected function jsonResponse($data): JsonResponse 
    {
        return new JsonResponse($this->serializer->serialize($data, 'json'),
            JsonResponse::HTTP_OK,
            [],
            true
        );
    }

    protected function notFoundResponse(string $message): JsonResponse 
    {
        return new JsonResponse(
            ["error" => $message],
            JsonResponse::HTTP_NOT_FOUND
        );
    }

    protected function badRequestResponse(string $message): JsonResponse 
    {
        return new JsonResponse(
            ["error" => $message],
            JsonResponse::HTTP_BAD_REQUEST
        );
    }
}
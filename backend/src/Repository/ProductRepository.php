<?php

namespace App\Repository;

use App\Entity\Product;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Product|null find($id, $lockMode = null, $lockVersion = null)
 * @method Product|null findOneBy(array $criteria, array $orderBy = null)
 * @method Product[]    findAll()
 * @method Product[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 * @method Product[]    findAllCategories()
 * @method Product[]    searchByName(string $searchTerm)
 * @method Product[]    searchByCategory(string $searchTerm)
 */
class ProductRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Product::class);
    }

    public function findAllCategories(): array
    {
        return $this->createQueryBuilder('product')
            ->andWhere("product.category != ''")
            ->getQuery()
            ->execute();
    }

    public function searchByName(string $term)
    {
        return $this->createQueryBuilder('product')
            ->andWhere('product.name LIKE :searchTerm')
            ->setParameter('searchTerm', '%'.$term.'%')
            ->getQuery()
            ->execute();
    }

    public function searchByCategory(string $term): array
    {
        return $this->createQueryBuilder('product')
            ->andWhere('product.category LIKE :searchTerm')
            ->setParameter('searchTerm', '%'.$term.'%')
            ->getQuery()
            ->execute();
    }
}
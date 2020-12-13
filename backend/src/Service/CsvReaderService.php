<?php

namespace App\Service;

use League\Csv\Reader;
use Doctrine\ORM\EntityManagerInterface;
use App\Entity\Product;

class CsvReaderService {
    private EntityManagerInterface $entityManager;
    
    public function __construct(EntityManagerInterface $entityManager)
    {
        $this->entityManager = $entityManager;
    }

    public function useData(): void 
    {
        $csv = Reader::createFromPath('%kernel.root_dir%/../data/crop-products.csv', 'r');
        $csv->setDelimiter(';');
        $records = $csv->getRecords();

        foreach ($records as $index => $row) {
            if($row[0] != 0) {
                $product = (new Product())
                    ->setId($row[0])
                    ->setName($row[1])
                    ->setCategory($row[2])
                    ->setGreenWater(intval($row[3]))
                    ->setBlueWater(intval($row[4]))
                    ->setGreyWater(intval($row[5]))
                    ->setTotalWater(intval($row[3]) + intval($row[4]) + intval($row[5]));
            
                $this->entityManager->persist($product);
            }
        }
        $this->entityManager->flush();
    }
}
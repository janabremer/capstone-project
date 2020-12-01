<?php

namespace App\Command;

use Doctrine\ORM\EntityManagerInterface;
use League\Csv\Reader;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;
use App\Entity\Product;

/**
 * Class CsvImportCommand
 * @package App\ConsoleCommand
 */
class CsvImportCommand extends Command
{
    /**
     * @var EntityManagerInterface
     */
    private $em;

    /**
     * CsvImportCommand constructor.
     *
     * @param EntityManagerInterface $em
     *
     * @throws \Symfony\Component\Console\Exception\LogicException
     */
    public function __construct(EntityManagerInterface $em)
    {
        parent::__construct();
        $this->em = $em;
    }

    /**
     * Configure
     * @throws \Symfony\Component\Console\Exception\InvalidArgumentException
     */
    protected function configure()
    {
        $this
            ->setName('app:csv:import')
            ->setDescription('Imports the CSV data file');
    }

    /**
     * @param InputInterface  $input
     * @param OutputInterface $output
     *
     * @return void
     */
    protected function execute(InputInterface $input, OutputInterface $output)
    {
        $io = new SymfonyStyle($input, $output);
        $io->title('Attempting to import the feed...');

        $csv = Reader::createFromPath('%kernel.root_dir%/../data/crop-products.csv', 'r');
        $csv->setDelimiter(';');
        $records = $csv->getRecords();

        foreach ($csv as $index => $row) {
            $product = (new Product())
            ->setName($row[1])
            ->setCategory($row[2])
            ->setGreenWater(intval($row[3]))
            ->setBlueWater(intval($row[4]))
            ->setGreyWater(intval($row[5]));
            $this->em->persist($product);
        }

            $this->em->flush();


        $io->success('Command exited cleanly');

        return 0;
    }
}
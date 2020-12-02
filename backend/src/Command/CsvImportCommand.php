<?php

namespace App\Command;

use Doctrine\ORM\EntityManagerInterface;
use League\Csv\Reader;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;
use App\Entity\Product;
use App\Service\CsvReader;

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
    private $csvReader;

    /**
     * CsvImportCommand constructor.
     *
     * @param EntityManagerInterface $em
     * @param CsvReader $csvReader
     *
     * @throws \Symfony\Component\Console\Exception\LogicException
     */
    public function __construct(
        EntityManagerInterface $em, 
        CsvReader $csvReader)
    {
        parent::__construct();
        $this->em = $em;
        $this->CsvReader = $csvReader;
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
    protected function execute(
        InputInterface $input, 
        OutputInterface $output)
    {
        $io = new SymfonyStyle($input, $output);
        $io->title('Attempting to import the feed...');

        $csvRecords = $this->CsvReader->useData();

        $io->success('Command exited cleanly');

        return 0;
    }
}
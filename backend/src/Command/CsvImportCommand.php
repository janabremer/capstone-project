<?php

namespace App\Command;

use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;
use App\Service\CsvReaderService;

/**
 * Class CsvImportCommand
 * @package App\ConsoleCommand
 */
class CsvImportCommand extends Command
{
    /**
     * @var EntityManagerInterface
     */
    private $entityManager = null;
    private $csvReader = null;

    /**
     * CsvImportCommand constructor.
     *
     * @param EntityManagerInterface $entityManager
     * @param CsvReaderService $csvReaderService
     *
     * @throws \Symfony\Component\Console\Exception\LogicException
     */
    public function __construct(
        EntityManagerInterface $entityManager, 
        CsvReaderService $csvReaderService)
    {
        parent::__construct();
        $this->entityManager = $entityManager;
        $this->csvReader = $csvReaderService;
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
     * @param InputInterface $input
     * @param OutputInterface $output
     *
     * @return int
     */
    protected function execute(
        InputInterface $input, 
        OutputInterface $output): int
    {
        $io = new SymfonyStyle($input, $output);
        $io->title('Attempting to import the feed...');

        $csvRecords = $this->csvReader->useData();

        $io->success('Command exited cleanly');
        
        return Command::SUCCESS;
    }
}
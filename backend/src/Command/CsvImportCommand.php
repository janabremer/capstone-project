<?php

namespace App\Command;


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
    private CsvReaderService $csvReader;

    /**
     * CsvImportCommand constructor.
  
     * @param CsvReaderService $csvReaderService
     *
     * @throws \Symfony\Component\Console\Exception\LogicException
     */
    public function __construct(
        CsvReaderService $csvReaderService)
    {
        parent::__construct();
        $this->csvReader = $csvReaderService;
    }

    /**
     * Configure
     * @throws \Symfony\Component\Console\Exception\InvalidArgumentException
     */
    protected function configure(): void
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

        $this->csvReader->useData();

        $io->success('Command exited cleanly');
        
        return Command::SUCCESS;
    }
}
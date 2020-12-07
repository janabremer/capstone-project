# Getting Started

This project was bootstrapped with [Composer](https://getcomposer.org/).

## Installation

Run `$ composer install` to install all packages the project depends on.

## Data Import

The project works with data from the [water footprint network](https://waterfootprint.org/en/resources/waterstat/product-water-footprint-statistics/).

To import the data from the [CSV file](data/crop-products.csv) to your database run the following command: `$ php bin/console app:csv:import`
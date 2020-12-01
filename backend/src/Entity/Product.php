<?php

namespace App\Entity;

use App\Repository\ProductRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=ProductRepository::class)
 */
class Product
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $name;

     /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $category;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $total_water;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $green_water;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $blue_water;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $grey_water;


    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getCategory(): ?string
    {
        return $this->category;
    }

    public function setCategory(?string $category): self
    {
        $this->category = $category;

        return $this;
    }

    public function getTotalWater(): ?int
    {
        return $this->totalWater;
    }

    public function setTotalWater(int $water): self
    {
        $this->totalWater = $totalWater;

        return $this;
    }

    public function getGreenWater(): ?int
    {
        return $this->green_water;
    }

    public function setGreenWater(?int $green_water): self
    {
        $this->green_water = $green_water;

        return $this;
    }

    public function getBlueWater(): ?int
    {
        return $this->blue_water;
    }

    public function setBlueWater(?int $blue_water): self
    {
        $this->blue_water = $blue_water;

        return $this;
    }

    public function getGreyWater(): ?int
    {
        return $this->grey_water;
    }

    public function setGreyWater(?int $grey_water): self
    {
        $this->grey_water = $grey_water;

        return $this;
    }
}

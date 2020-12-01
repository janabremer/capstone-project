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
    private $totalWater;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $greenWater;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $blueWater;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $greyWater;


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

    public function setTotalWater(int $totalWater): self
    {
        $this->totalWater = $total_water;

        return $this;
    }

    public function getGreenWater(): ?int
    {
        return $this->greenWater;
    }

    public function setGreenWater(?int $greenWater): self
    {
        $this->greenWater = $green_water;

        return $this;
    }

    public function getBlueWater(): ?int
    {
        return $this->blueWater;
    }

    public function setBlueWater(?int $blueWater): self
    {
        $this->blueWater = $blue_water;

        return $this;
    }

    public function getGreyWater(): ?int
    {
        return $this->greyWater;
    }

    public function setGreyWater(?int $greyWater): self
    {
        $this->greyWater = $grey_water;

        return $this;
    }
}

<?php

namespace App\Entity;

use App\Repository\ProductRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * @ORM\Entity(repositoryClass=ProductRepository::class)
 */
class Product
{
    /**
     * @ORM\Id
     * @ORM\Column(type="integer")
     * @Assert\Regex("\d+")
     */
    private int $id;

    /**
     * @ORM\Column(type="string", length=180)
     * @Assert\Length(max=180)
     */
    private string $name;

     /**
     * @ORM\Column(type="string", length=180, nullable=true)
     * @Assert\Length(max=180)
     */
    private string $category;

    /**
     * @ORM\Column(type="integer", nullable=true)
     * @Assert\Regex("\d+")
     */
    private int $totalWater;

    /**
     * @ORM\Column(type="integer", nullable=true)
     * @Assert\Regex("\d+")
     */
    private int $greenWater;

    /**
     * @ORM\Column(type="integer", nullable=true)
     * @Assert\Regex("\d+")
     */
    private int $blueWater;

    /**
     * @ORM\Column(type="integer", nullable=true)
     * @Assert\Regex("\d+")
     */
    private int $greyWater;


    public function getId(): ?int
    {
        return $this->id;
    }

    public function setId(int $id): self
    {
        $this->id = $id;

        return $this;
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

    public function setTotalWater(int $total_water): self
    {
        $this->totalWater = $total_water;

        return $this;
    }

    public function getGreenWater(): ?int
    {
        return $this->greenWater;
    }

    public function setGreenWater(?int $green_water): self
    {
        $this->greenWater = $green_water;

        return $this;
    }

    public function getBlueWater(): ?int
    {
        return $this->blueWater;
    }

    public function setBlueWater(?int $blue_water): self
    {
        $this->blueWater = $blue_water;

        return $this;
    }

    public function getGreyWater(): ?int
    {
        return $this->greyWater;
    }

    public function setGreyWater(?int $grey_water): self
    {
        $this->greyWater = $grey_water;

        return $this;
    }
}

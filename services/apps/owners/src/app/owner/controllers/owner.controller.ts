import { Body, Controller, Get, Param, Patch, Post, Delete } from "@nestjs/common";
import { OwnerRepository } from "../repositories/owner.repository";
import { OwnerEntity } from "../entities/owner.entity";

@Controller("owners")
export class OwnerController {
  constructor(private readonly ownerRepository: OwnerRepository) {}

  @Get()
  getOwners() {
    return this.ownerRepository.findOwners();
  }

  @Get(":id")
  getOwner(@Param("id") id: string) {
    return this.ownerRepository.findOwner(id);
  }

  @Post()
  createOwner(@Body() newOwner: OwnerEntity) {
    return this.ownerRepository.createOwner(newOwner);
  }

  @Patch()
  updateOwner(@Body() updatedOwner: OwnerEntity) {
    return this.ownerRepository.updateOwner(updatedOwner);
  }

  @Delete(":id")
  deleteOwner(@Param("id") id: string) {
    return this.ownerRepository.deleteOwner(id);
  }
}

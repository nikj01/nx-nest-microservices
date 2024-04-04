import { Body, Controller } from "@nestjs/common";
import { OwnerRepository } from "../repositories/owner.repository";
import { MessagePattern } from "@nestjs/microservices";
import { OwnerEntity } from "../entities/owner.entity";
import { plainToInstance } from "class-transformer";
import { OwnerCreate, OwnerRead, OwnersRead } from "@services/libs";

@Controller()
export class OwnersController {
  constructor(private readonly ownerRepository: OwnerRepository) {}

  // @MessagePattern({ cmd: "ping" })
  // pong() {
  //   return "pong";
  // }

  @MessagePattern(OwnerCreate.pattern)
  createOwner(dto: OwnerCreate.Request) {
    const newOwner = plainToInstance(OwnerEntity, dto as OwnerEntity);
    return this.ownerRepository.createOwner(newOwner);
  }

  @MessagePattern(OwnersRead.pattern)
  getOwners() {
    return this.ownerRepository.findOwners();
  }

  @MessagePattern(OwnerRead.pattern)
  getOwner(id: string) {
    return this.ownerRepository.findOwner(id);
  }

  //
  // @Patch()
  // updateOwner(@Body() updatedOwner: OwnerEntity) {
  //   return this.ownerRepository.updateOwner(updatedOwner);
  // }
  //
  // @Delete(":id")
  // deleteOwner(@Param("id") id: string) {
  //   return this.ownerRepository.deleteOwner(id);
  // }
}

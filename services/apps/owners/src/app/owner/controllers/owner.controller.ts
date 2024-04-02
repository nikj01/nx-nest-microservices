import { Body, Controller, Post } from "@nestjs/common";
import { OwnerRepository } from "../repositories/owner.repository";
import { EventPattern, MessagePattern } from "@nestjs/microservices";
import { OwnerEntity } from "../entities/owner.entity";
import { IOwner } from "@services/interfaces";
import { classToPlain, plainToInstance } from "class-transformer";

@Controller()
export class OwnerController {
  constructor(private readonly ownerRepository: OwnerRepository) {}

  @MessagePattern({ cmd: "ping" })
  pong() {
    return "pong";
  }

  @MessagePattern({ cmd: "addNewOwner" })
  createOwner(@Body() dto: IOwner) {
    const newOwner = plainToInstance(OwnerEntity, dto as OwnerEntity);
    return this.ownerRepository.createOwner(newOwner);
  }

  @MessagePattern({ cmd: "getOwners" })
  getOwners() {
    return this.ownerRepository.findOwners();
  }
  // }
  //
  // @Get(":id")
  // getOwner(@Param("id") id: string) {
  //   return this.ownerRepository.findOwner(id);
  // }
  //

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

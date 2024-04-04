import { Body, Controller, Delete, Get, Inject, Param, Patch, Post } from "@nestjs/common";
import { OwnerCreate, OwnerDelete, OwnerRead, OwnerReadAll, OwnerUpdate } from "@services/libs";
import { OWNERS_SERVICE } from "@services/libs";
import { ClientProxy } from "@nestjs/microservices";
import { OwnerCreateDto } from "./dtos/owner.create-dto";
import { OwnerUpdateDto } from "./dtos/owner.update-dto";
import { plainToInstance } from "class-transformer";
import { OwnerGetDto } from "./dtos/owner.get-dto";

@Controller("owners")
export class OwnersController {
  constructor(@Inject(OWNERS_SERVICE) private readonly ownersClient: ClientProxy) {}

  @Post()
  async createOwner(@Body() dto: OwnerCreateDto) {
    const { surname, name, cars } = dto;
    return this.ownersClient.send<OwnerCreate.Response, OwnerCreate.Request>(OwnerCreate.pattern, {
      surname,
      name,
      cars,
    });
  }

  @Get()
  async getOwners() {
    return this.ownersClient.send<OwnerReadAll.Response, OwnerReadAll.Request>(
      OwnerReadAll.pattern,
      {},
    );
  }

  @Get(":id")
  async getOwner(@Param("id") _id: string) {
    return this.ownersClient.send<OwnerRead.Response, OwnerRead.Request>(OwnerRead.pattern, {
      _id,
    });
  }

  @Patch(":id")
  async updateOwner(@Param("id") _id: string, @Body() dto: OwnerUpdateDto) {
    const { surname, name, cars } = dto;
    return this.ownersClient.send<OwnerUpdate.Response, OwnerUpdate.Request>(OwnerUpdate.pattern, {
      _id,
      surname,
      name,
      cars,
    });
  }

  @Delete(":id")
  async deleteOwner(@Param("id") _id: string) {
    return this.ownersClient.send<OwnerDelete.Response, OwnerDelete.Request>(OwnerDelete.pattern, {
      _id,
    });
  }
}

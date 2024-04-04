import { Body, Controller, Get, Inject, Param, Post } from "@nestjs/common";
import { OwnerCreate, OwnerRead, OwnersRead } from "@services/libs";
import { OWNERS_SERVICE } from "@services/libs";
import { ClientProxy } from "@nestjs/microservices";
import { IOwner } from "@services/interfaces";
import { CreateOwnerDto } from "./dtos/createOwnerDto";

@Controller("owners")
export class OwnersController {
  constructor(@Inject(OWNERS_SERVICE) private readonly ownersClient: ClientProxy) {}

  // @Get()
  // pingService() {
  //   const startTs = Date.now();
  //   const pattern = { cmd: "ping" };
  //   const payload = {};
  //   return this.ownersClient
  //     .send<string>(pattern, payload)
  //     .pipe(map((message: string) => ({ message, duration: Date.now() - startTs })));
  // }

  @Get()
  getOwners() {
    return this.ownersClient.send<OwnersRead.Response, OwnersRead.Request>(OwnersRead.pattern, {});
  }

  @Get(":id")
  getOwner(@Param("id") _id: string) {
    return this.ownersClient.send<OwnerRead.Response, OwnerRead.Request>(OwnerRead.pattern, {
      _id,
    });
  }

  @Post()
  createOwner(@Body() dto: CreateOwnerDto) {
    return this.ownersClient.send<OwnerCreate.Response, OwnerCreate.Request>(OwnerCreate.pattern, {
      surname: dto.surname,
      name: dto.name,
      cars: dto.cars,
    });
  }

  // @Get(":id")
  // getOwner(@Param("id") id: string) {
  // }
  //

  //
  // @Patch()
  // updateOwner(@Body() ) {
  // }
  //
  // @Delete(":id")
  // deleteOwner(@Param("id") id: string) {
  // }
}

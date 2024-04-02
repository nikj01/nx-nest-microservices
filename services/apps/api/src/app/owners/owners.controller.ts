import { Body, Controller, Get, Inject, Post } from "@nestjs/common";
import { OWNERS_SERVICE } from "@services/libs";
import { ClientProxy } from "@nestjs/microservices";
import { map } from "rxjs";
import { IOwner } from "@services/interfaces";

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
    return this.ownersClient.send<string>({ cmd: "getOwners" }, {});
  }

  @Post()
  createOwner(@Body() dto: IOwner) {
    return this.ownersClient.send({ cmd: "addNewOwner" }, { dto });
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

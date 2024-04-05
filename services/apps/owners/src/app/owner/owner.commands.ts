import { Controller } from "@nestjs/common";
import { MessagePattern } from "@nestjs/microservices";
import { OwnerCreate, OwnerReadAll, OwnerRead, OwnerUpdate, OwnerDelete } from "@services/libs";
import { OwnerService } from "./owner.service";
import { plainToInstance } from "class-transformer";
import { OwnerEntity } from "./owner.entity";

@Controller()
export class OwnerCommands {
  constructor(private readonly ownersService: OwnerService) {}

  @MessagePattern(OwnerCreate.pattern)
  async createOwner(data: OwnerCreate.Request) {
    const newData = plainToInstance(OwnerEntity, data as OwnerEntity);
    return await this.ownersService.createOwner(newData);
  }

  @MessagePattern(OwnerReadAll.pattern)
  async getOwners() {
    return await this.ownersService.getOwners();
  }

  @MessagePattern(OwnerRead.pattern)
  async getOwner(_id: string) {
    return await this.ownersService.getOwner(_id);
  }

  @MessagePattern(OwnerUpdate.pattern)
  async updateOwner(data: OwnerUpdate.Request) {
    const updatedData = plainToInstance(OwnerEntity, data as OwnerEntity);
    return await this.ownersService.updateOwner(updatedData);
  }

  @MessagePattern(OwnerDelete.pattern)
  async deleteOwner(_id: string) {
    console.log(_id);
    return await this.ownersService.deleteOwner(_id);
  }
}

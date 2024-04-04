import { Controller } from "@nestjs/common";
import { OwnerRepository } from "../repositories/owner.repository";
import { MessagePattern } from "@nestjs/microservices";
import { OwnerCreate, OwnerReadAll, OwnerRead, OwnerUpdate, OwnerDelete } from "@services/libs";

@Controller()
export class OwnersController {
  constructor(private readonly ownerRepository: OwnerRepository) {}

  @MessagePattern(OwnerCreate.pattern)
  async createOwner(dataFromRequest: OwnerCreate.Request) {
    return this.ownerRepository.createOwner(dataFromRequest);
  }

  @MessagePattern(OwnerReadAll.pattern)
  async getOwners() {
    return this.ownerRepository.findOwners();
  }

  @MessagePattern(OwnerRead.pattern)
  async getOwner(_id: string) {
    return this.ownerRepository.findOwner(_id);
  }

  @MessagePattern(OwnerUpdate.pattern)
  async updateOwner(dataFromRequest: OwnerUpdate.Request) {
    return this.ownerRepository.updateOwner(dataFromRequest);
  }

  @MessagePattern(OwnerDelete.pattern)
  async deleteOwner(_id: string) {
    return this.ownerRepository.deleteOwner(_id);
  }
}

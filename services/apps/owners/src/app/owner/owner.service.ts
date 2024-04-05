import { Injectable } from "@nestjs/common";
import { OwnerRepository } from "./owner.repository";
import { OwnerEntity } from "./owner.entity";

@Injectable()
export class OwnerService {
  constructor(private readonly ownerRepository: OwnerRepository) {}

  async createOwner(newData: OwnerEntity) {
    return await this.ownerRepository.createOwner(newData);
  }

  async getOwner(_id: string) {
    return await this.ownerRepository.findOwner(_id);
  }

  async getOwners() {
    return await this.ownerRepository.findOwners();
  }

  async updateOwner(updatedData: OwnerEntity) {
    return await this.ownerRepository.updateOwner(updatedData);
  }

  async deleteOwner(_id: string) {
    return await this.ownerRepository.deleteOwner(_id);
  }
}

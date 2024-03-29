import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Owner } from "../models/owner.model";
import { Model } from "mongoose";
import { OwnerEntity } from "../entities/owner.entity";

@Injectable()
export class OwnerRepository {
  constructor(@InjectModel(Owner.name) private readonly ownerModel: Model<Owner>) {}

  async createOwner(owner: OwnerEntity) {
    const newOwner = new this.ownerModel(owner);
    return newOwner.save();
  }

  async updateOwner(owner: OwnerEntity) {
    const { id, ...data } = owner;
    return this.ownerModel.updateOne({ id }, { $set: { ...data } }).exec();
  }

  async findOwner(id: string) {
    return this.ownerModel.findById(id).exec();
  }

  async deleteOwner(id: string) {
    this.ownerModel.deleteOne({ id }).exec();
  }
}

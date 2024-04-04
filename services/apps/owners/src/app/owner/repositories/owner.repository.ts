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
    const { _id, ...data } = owner;
    return this.ownerModel.updateOne({ _id: _id }, { $set: { ...data } }).exec();
  }

  async findOwners() {
    return this.ownerModel.find().exec();
  }

  async findOwner(_id: string) {
    return this.ownerModel.findById(_id).exec();
  }

  async deleteOwner(_id: string) {
    this.ownerModel.deleteOne({ _id: _id }).exec();
  }
}

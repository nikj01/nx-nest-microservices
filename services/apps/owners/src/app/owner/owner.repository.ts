import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Owner } from "./owner.model";
import { Model } from "mongoose";
import { OwnerEntity } from "./owner.entity";

@Injectable()
export class OwnerRepository {
  constructor(@InjectModel(Owner.name) private readonly ownerModel: Model<Owner>) {}

  async createOwner(newData: OwnerEntity) {
    const newOwner = new this.ownerModel(newData);
    return await newOwner.save();
  }

  async updateOwner(updatedData: OwnerEntity) {
    console.log(updatedData);
    const { _id, ...data } = updatedData;
    return await this.ownerModel.updateOne({ _id: _id }, { $set: { ...data } }).exec();
  }

  async findOwners() {
    return await this.ownerModel.find().exec();
  }

  async findOwner(_id: string) {
    return await this.ownerModel.findById(_id).exec();
  }

  async deleteOwner(_id: string) {
    return await this.ownerModel.deleteOne({ _id: _id }).exec();
  }
}

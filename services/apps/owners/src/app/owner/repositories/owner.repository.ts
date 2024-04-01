import { Inject, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Owner } from "../models/owner.model";
import { Model } from "mongoose";
import { OwnerEntity } from "../entities/owner.entity";
import { ClientProxy } from "@nestjs/microservices";

@Injectable()
export class OwnerRepository {
  constructor(
    @InjectModel(Owner.name) private readonly ownerModel: Model<Owner>,
    @Inject("OWNERS_SERVICE") private readonly rabbitClient: ClientProxy,
  ) {}

  async createOwner(owner: OwnerEntity) {
    this.rabbitClient.emit("create-owner", owner);
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

  async findOwner(id: string) {
    return this.ownerModel.findById(id).exec();
  }

  async deleteOwner(id: string) {
    this.ownerModel.deleteOne({ _id: id }).exec();
  }
}

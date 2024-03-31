import { IOwner } from "@services/interfaces";

export class OwnerEntity implements IOwner {
  _id?: string;
  surname: string;
  name: string;
  cars?: string[];

  constructor(id: string, surname: string, name: string, cars: string[]) {
    this._id = id;
    this.surname = surname;
    this.name = name;
    this.cars = cars;
  }
}

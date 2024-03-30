import { IOwner } from "@services/interfaces/src/lib/owner.interface";

export class OwnerEntity implements IOwner {
  _id?: number;
  surname: string;
  name: string;
  cars?: string[];

  constructor(id: number, surname: string, name: string, cars: string[]) {
    this._id = id;
    this.surname = surname;
    this.name = name;
    this.cars = cars;
  }
}

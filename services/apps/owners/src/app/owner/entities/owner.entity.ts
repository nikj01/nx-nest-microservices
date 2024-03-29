import { IOwner } from "../../../../../../interfaces/src/lib/owner.interface";

export class OwnerEntity implements IOwner {
  id?: number;
  surname: string;
  name: string;
  cars?: string[];

  constructor(id: number, surname: string, name: string, cars: string[]) {
    this.id = id;
    this.surname = surname;
    this.name = name;
    this.cars = cars;
  }
}

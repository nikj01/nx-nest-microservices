import { IsArray, IsOptional, IsString } from "class-validator";

export namespace OwnerReadAll {
  export const pattern = { cmd: "owner.read-all.message" };

  export class Request {}

  export class Response {
    Owners: Owner[];
  }

  class Owner {
    @IsString()
    _id: string;

    @IsString()
    surname: string;

    @IsString()
    name: string;

    @IsOptional()
    @IsArray()
    cars?: string[];
  }
}

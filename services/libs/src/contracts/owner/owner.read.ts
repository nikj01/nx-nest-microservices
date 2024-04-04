import { IsArray, IsOptional, IsString } from "class-validator";

export namespace OwnerRead {
  export const pattern = { cmd: "owner.read-owner.message" };

  export class Request {
    _id: string;
  }

  export class Response {
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

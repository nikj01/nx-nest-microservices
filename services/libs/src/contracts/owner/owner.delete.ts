import { IsString } from "class-validator";

export namespace OwnerDelete {
  export const pattern = { cmd: "owner.delete-owner.message" };

  export class Request {
    @IsString()
    _id: string;
  }

  export class Response {}
}

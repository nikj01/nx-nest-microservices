import { IsString } from "class-validator";

export namespace OwnerDelete {
  export const pattern = { cmd: "owner.update-owner.message" };

  export class Request {
    @IsString()
    _id: string;
  }

  export class Response {}
}

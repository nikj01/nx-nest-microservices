import { Document } from "mongoose";
import { IOwner } from "../../../../../../interfaces/src/lib/owner.interface";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Owner extends Document implements IOwner {
  @Prop()
  id?: number;

  @Prop({ isRequired: true })
  surname: string;

  @Prop({ isRequired: true })
  name: string;

  @Prop()
  cars?: string[];
}

export const OwnerSchema = SchemaFactory.createForClass(Owner);

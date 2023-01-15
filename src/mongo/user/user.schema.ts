
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { AbstractDocument } from 'src/common/abstract/abstract.schema';


@Schema({
  collection: 'User',
  timestamps: true
})
export class User extends AbstractDocument {
  @Prop()
  email: string;

  @Prop()
  password: string;

  @Prop()
  firstName: string;

  @Prop()
  lastName: string;

  @Prop()
  dob: Date;

  @Prop()
  userType: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
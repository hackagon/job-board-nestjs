
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
import { AbstractDocument } from 'src/common/abstract/abstract.schema';
import { User } from '../user/user.schema';

export type CompanyDocument = HydratedDocument<Company>;

@Schema({
  collection: 'Company',
  timestamps: true,
})
export class Company extends AbstractDocument {
  @Prop()
  name: string;

  @Prop()
  logoUrl: string;

  @Prop()
  description: string;

  @Prop({
    type: Types.ObjectId,
    ref: User.name
  })
  creatorId: Types.ObjectId;

  @Prop({ default: true })
  isActive: Boolean
}

export const CompanySchema = SchemaFactory.createForClass(Company);
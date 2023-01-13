import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { UserController } from "./controller/user.controller";
import { UserService } from "./provider/user.service";
import { User, UserSchema } from "./user.schema";

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: User.name, schema: UserSchema }
    ])
  ],
  providers: [UserService],
  controllers: [UserController]
})
export class UserModule { }
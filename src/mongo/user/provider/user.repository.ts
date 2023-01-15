import { Injectable, Logger } from "@nestjs/common";
import { InjectConnection, InjectModel } from "@nestjs/mongoose";
import { Connection, Model } from "mongoose";
import { AbstractRepository } from "src/common/abstract/abstract.repository";
import { User } from "../user.schema";

@Injectable()
export class UserRepository extends AbstractRepository<User>{
  protected readonly logger = new Logger(UserRepository.name);

  constructor(
    @InjectModel(User.name) userModel: Model<User>,
    @InjectConnection() connection: Connection
  ) {
    super(userModel, connection)
  }
}
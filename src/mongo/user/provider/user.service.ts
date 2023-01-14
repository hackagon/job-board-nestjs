import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model, Types } from "mongoose";
import { User } from "../user.schema";

// declare: public, protected, private
@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>
  ) { }

  async create(data) {
    return await this.userModel.create(data);
  }

  async findById(userId: Types.ObjectId) {
    return await this.userModel.findById(userId);
  }

  async find() {
    return await this.userModel.find();
  }
}
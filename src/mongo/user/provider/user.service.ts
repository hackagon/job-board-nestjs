import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model, Types } from "mongoose";
import { UserRepository } from "./user.repository";
import { User } from "../user.schema";

// declare: public, protected, private
@Injectable()
export class UserService {
  constructor(
    // @InjectModel(User.name) private userModel: Model<User>
    private userRepository: UserRepository,
  ) { }

  async create(data) {
    return await this.userRepository.create(data)
  }

  async findById(userId: Types.ObjectId) {
    return await this.userRepository.findOne(userId)
  }

  async find() {
    return await this.userRepository.find({});
  }

  async findByEmail(email: string) {
    const user = await this.userRepository.findOne({ email })
    if (!user) throw new NotFoundException("User not found")

    return user;
  }

  // 
}
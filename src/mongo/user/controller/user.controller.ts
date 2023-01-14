import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { Types } from "mongoose";
import { CreateUserDto } from "../dto/create-user.dto";
import { UserService } from "../provider/user.service";

@Controller('/users')
export class UserController {
  constructor(
    private userService: UserService
  ) { }

  @Post('register')
  register(
    @Body() data: CreateUserDto
  ) {
    return this.userService.create(data)
  }

  @Get(':userId')
  findById(@Param('userId') userId: Types.ObjectId) {
    return this.userService.findById(userId)
  }

  @Get()
  find() {
    return this.userService.find();
  }

  // update

  // delete
}
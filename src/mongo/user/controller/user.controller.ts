import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { Types } from "mongoose";
import { UserService } from "../provider/user.service";

@Controller('/users')
export class UserController {
  constructor(
    private userService: UserService
  ) { }

  @Post('register')
  register(
    @Body() data
  ) {
    return this.userService.create(data)
  }

  @Get(':userId')
  findById(@Param('userId') userId: Types.ObjectId) {
    return this.userService.findById(userId)
  }

  // update

  // delete
}
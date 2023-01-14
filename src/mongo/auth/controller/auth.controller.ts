import { Controller, Post, UseGuards, Request, Get } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import _ from 'lodash'
import { JwtAuthGuard } from "../guard/jwt.guard";
import { LocalAuthGuard } from "../guard/local.guard";
import { AuthService } from "../provider/auth.service";

@Controller('/auth')
export class AuthController {
  constructor(
    private authService: AuthService
  ) { }

  @UseGuards(LocalAuthGuard)
  @Post('/login')
  async login(
    @Request() req: Request
  ) {
    const email = _.get(req, 'user.email');
    return this.authService.login({ email })
  }

  @UseGuards(JwtAuthGuard)
  @Get('/me')
  async getMe(
    @Request() req: Request
  ) {
    return _.get(req, 'user');
  }
}
import { Injectable } from "@nestjs/common";
import { UserService } from "src/mongo/user/provider/user.service";
import { JwtService } from '@nestjs/jwt'

export interface IValidateUser {
  email: string;
  password: string;
}

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService
  ) { }

  async validateUser(data: IValidateUser) {
    const { email, password } = data;[]
    const user = await this.userService.findByEmail(email)

    if (user.password === password) return user;

    return null;
  }

  async login(data) {
    const { email } = data;
    const payload = {
      email
    }
    return {
      jwt: this.jwtService.sign(payload)
    }
  }
}
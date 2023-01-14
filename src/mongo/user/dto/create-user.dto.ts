import { IsEmail, IsNotEmpty, Matches, MaxLength, MinLength } from "class-validator";
import { Match } from "src/common/decorator/match.decorator";

export class CreateUserDto {
  @IsNotEmpty()
  @IsEmail()
  email: string;


  @IsNotEmpty()
  @MinLength(2, { message: "First name must have at least 2 characters" })
  @MaxLength(20, { message: 'First name must have at most 20 characters' })
  firstName: string;

  @IsNotEmpty()
  @MinLength(2, { message: "Last name must have at least 2 characters" })
  @MaxLength(20, { message: 'Last name must have at most 20 characters' })
  lastName: string;

  @IsNotEmpty()
  password: string;

  // confirm password
  @IsNotEmpty()
  @Match('password', { message: "Password must match" })
  password2: string;
}
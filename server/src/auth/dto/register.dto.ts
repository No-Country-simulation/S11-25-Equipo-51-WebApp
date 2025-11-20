import { IsAlpha, IsEmail, IsNotEmpty, MinLength } from 'class-validator';
import { Trim } from 'src/common/decorators/trim.decorator';

export class RegisterDto {
  @IsNotEmpty()
  @MinLength(3)
  @IsAlpha()
  @Trim()
  username: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @MinLength(6)
  password: string;
}

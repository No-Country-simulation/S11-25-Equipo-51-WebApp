import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';
import { Trim } from 'src/common/decorators/trim.decorator';
import { IsFullName } from 'src/common/validators/is-full-name.validator';
import { IsStrongPassword } from 'src/common/validators/is-strong-password.validator';

export class RegisterDto {
  @IsNotEmpty()
  @MinLength(3)
  @IsFullName()
  @Trim()
  username: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsStrongPassword()
  password: string;
}

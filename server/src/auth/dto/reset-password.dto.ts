import { IsNotEmpty } from 'class-validator';
import { IsStrongPassword } from 'src/common/validators/is-strong-password.validator';

export class ResetPasswordDto {
  @IsNotEmpty()
  token: string;

  @IsNotEmpty()
  @IsStrongPassword()
  newPassword: string;
}

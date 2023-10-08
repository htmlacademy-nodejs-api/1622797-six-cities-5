import { UserRole } from '../../../types/index.js';

export class CreateUserDto {
  public name: string;
  public email: string;
  public avatarPath: string;
  public password: string;
  public role: UserRole;
}

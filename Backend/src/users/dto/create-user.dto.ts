import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
 
  id: number;
  
  @IsNotEmpty()
  firstname: string;
  @IsNotEmpty()
  lastname: string;
  @IsNotEmpty()
  @IsEmail()
  email: string;
}

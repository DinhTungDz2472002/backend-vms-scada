import { IsString, IsNotEmpty, IsOptional,Matches, IsEmail, IsNumber, MinLength } from 'class-validator';
import { ApiProperty,ApiPropertyOptional } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ example: 'alice' })
  @IsString()
  @Matches(/^(?!\d+$).+$/, { message: 'username khong duoc chi la so' })
  @MinLength(3, {message: 'Username phải ít nhất 3 ký tự'})
  @IsNotEmpty()
  username!: string;

  @ApiPropertyOptional({ example: 'Password123@' })
  @MinLength(6, {message:'Password quá ngắn bạn ơi'})
  @IsString()
  @IsOptional()
  password?: string;

  @ApiPropertyOptional({ example: 'Alice Nguyen' })
  @IsString()
  @IsOptional()
  name?: string;

  @ApiPropertyOptional({ example: 'alice@gmail.com' })
  @IsEmail()
  @IsOptional()
  email?: string;

  @ApiProperty({ example: 2 })
  @IsNumber()
  roleId!: number;
}
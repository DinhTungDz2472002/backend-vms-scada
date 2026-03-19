import { Controller, Get, Post, Param, Body, Query, Delete } from '@nestjs/common';
import { UserService } from './users.service'; 
import { CreateUserDto } from './dto/create-user.dto';
import { QueryUserDto } from './dto/query-user.dto';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  // GET /users
  @Get()
  async getList(@Query() query: QueryUserDto) {
    return await this.userService.getList(query);
  }

  // GET /users/:id
  @Get(':id')
  async getById(@Param('id') id: string) {
    return await this.userService.getById(Number(id));
  }

  // POST /users
  @Post()
  async create(@Body() body: CreateUserDto) {
    return await this.userService.create(body);
  }

  //DELETE /user/all
  @Delete('all')
  async deleteAll(){
    return await this.userService.deleteAll()
  }

  //DELETE /users/delete/:id
  @Delete(':id')
  async deleteId(@Param('id') id:string){
    return await this.userService.deleteId(Number(id))
  }


}
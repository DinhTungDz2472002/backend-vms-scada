import { Injectable, Query } from '@nestjs/common';
import { UserModel } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {

  // 1. Lấy danh sách user + role
  async getList(query: any) {
    const { page = 1, pageSize = 10 } = query;

    return await UserModel.query()
      .withGraphFetched('role') // load role
      .page(Number(page) - 1, Number(pageSize));
  }

  // 2. Lấy user theo id
  async getById(id: number) {
    return await UserModel.query()
      .findById(id)
      .withGraphFetched('role');
  }

  // 3. Tạo user
  async create(data: CreateUserDto) {
    const result = await UserModel.query().insert(data);
    if(!result){
      throw new Error('Username đã tồn tại')
    }
    return {      
      message: 'create successfully',
      statusCode: 200,
    }
  }
  // 4. Delete theo id

  async deleteId(id: number){
    const deleted = await UserModel.query().deleteById(id);
    
    if(!deleted){
      throw new Error('User không tồn tại');
    }
    return {message: 'Xóa thành công'};
  } 

  //5. Delete all
  async deleteAll(){
    const deleted = await UserModel.query().delete();

  }
}
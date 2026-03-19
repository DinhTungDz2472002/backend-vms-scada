import { Model } from "objection";
import { UserModel } from "../../users/entities/user.entity";
export class RoleModel extends Model{

    static tableName = 'roles';

    id!: number;
    name!: string;
    key!: string;
    description?: string;
    
    static relationMappings ={
        user: {
            relation: Model.HasManyRelation,
            modelClass: UserModel,
            join: {
                from: 'roles.id',
                to:'users.roleId'
            }
        }
    }
}

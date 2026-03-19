import {RoleModel} from '../../roles/entities/role.entity';

import { Model } from 'objection';

export class UserModel extends Model {
  static tableName = 'users';

  id!: number;
  username!: string;
  password?: string;
  name?: string;
  email?: string;
  roleId!: number;

  static relationMappings = {
    role: {
      relation: Model.BelongsToOneRelation,
      modelClass: RoleModel,
      join: {
        from: 'users.roleId',
        to: 'roles.id',
      },
    },
  };
}
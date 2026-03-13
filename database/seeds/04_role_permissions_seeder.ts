import { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex('role_permissions').del();

  // Inserts seed entries
  await knex('role_permissions').insert([
    { id: 1, roleId: 1, permissionId: 1, value: 31 },
    { id: 2, roleId: 1, permissionId: 2, value: 15 },
    // { id: 3, roleId: 1, permissionId: 3, value: 4 },
    { id: 4, roleId: 1, permissionId: 4, value: 15 },
    { id: 5, roleId: 1, permissionId: 5, value: 15 },
    { id: 6, roleId: 1, permissionId: 6, value: 15 },
    { id: 7, roleId: 1, permissionId: 7, value: 15 },
    { id: 8, roleId: 1, permissionId: 8, value: 4 },
    { id: 9, roleId: 1, permissionId: 9, value: 4 },
    { id: 10, roleId: 1, permissionId: 10, value: 6 },
    { id: 11, roleId: 1, permissionId: 11, value: 6 },
    { id: 12, roleId: 1, permissionId: 12, value: 6 },
    { id: 13, roleId: 1, permissionId: 13, value: 4 },
    { id: 14, roleId: 1, permissionId: 14, value: 4 },
    // { id: 15, roleId: 1, permissionId: 15, value: 15 },
    { id: 16, roleId: 1, permissionId: 16, value: 15 },
    // { id: 17, roleId: 1, permissionId: 17, value: 15 },

    // { id: 14, roleId: 1, permissionId: 14, value: 6 },
  ]);

  // Update Id
  await knex.raw("select setval('role_permissions_id_seq', max(id)) from role_permissions");
}

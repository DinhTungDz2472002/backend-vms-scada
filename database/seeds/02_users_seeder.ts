import { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex('users').del();

  // Inserts seed entries
  await knex('users').insert([
    {
      id: 1,
      username: 'admin',
      roleId: 1,
      password: '$2a$12$SfQPG3wWMz6TfBHh3T7Qgexuc10IttcK.RmSQ4Gl04y6zubPJN4GO',
      firstLogin: true,
    }, // 123456 '$2a$12$SfQPG3wWMz6TfBHh3T7Qgexuc10IttcK.RmSQ4Gl04y6zubPJN4GO'
    {
      id: 2,
      username: 'user',
      roleId: 2,
      password: '$2a$12$MvLL7ExCCWLmJNKSjilZa.xHcMjMn2SbHAbUupG6AnP/nzx0lNViG',
      firstLogin: true,
    }, //123456@
  ]);

  // Update Id
  await knex.raw("select setval('users_id_seq', max(id)) from users");
}

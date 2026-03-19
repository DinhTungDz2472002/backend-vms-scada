import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('users', function (table) {
    table.increments();
    table.string('username').notNullable().unique();
    table.string('password').nullable();
    table.string('name').nullable();
    table.string('email').nullable();
    table.string('refreshToken').nullable();
    table.jsonb('alarms').nullable();
    table.dateTime('lastLogin').nullable();
    table.string('telegramId').nullable();
    table.boolean('manualLock').nullable().defaultTo(false);
    table.string('twoFactAuthKey').nullable();
    table.boolean('firstLogin').defaultTo(false);
    table
      .jsonb('settings')
      .nullable()
      .comment('Cài đặt riêng cho từng người dùng');
    table
      .integer('roleId')
      .notNullable()
      .references('id')
      .inTable('roles')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
    table.timestamps({ defaultToNow: true, useCamelCase: true });
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('users');
}

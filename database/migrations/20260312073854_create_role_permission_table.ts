import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('role_permissions', function (table) {
    table.increments();
    table.integer('roleId').notNullable().references('id').inTable('roles').onUpdate('CASCADE').onDelete('CASCADE');
    table.integer('permissionId').notNullable().references('id').inTable('permissions').onUpdate('CASCADE').onDelete('CASCADE');
    table.integer('value');
    table.timestamps({ defaultToNow: true, useCamelCase: true });
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('role_permissions');
}

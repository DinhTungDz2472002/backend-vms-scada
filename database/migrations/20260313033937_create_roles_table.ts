import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('roles', (table)=>{
        table.increments();
        table.string('name').notNullable();
        table.string('key').notNullable();
        table.string('description').nullable();
        table.timestamps({defaultToNow: true, useCamelCase: true});
    })
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('roles')
}


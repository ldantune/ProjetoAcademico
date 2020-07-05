exports.up = function(knex, Promise) {
    return knex.schema.createTable('cursos', table => {
        table.increments('id').primary()
        table.string('nom_curso').notNull()
        table.integer('tot_cred').notNull()
        
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('cursos')
};
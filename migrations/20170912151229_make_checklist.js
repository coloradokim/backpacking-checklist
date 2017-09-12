exports.up = function(knex, Promise) {
  return knex.schema.createTable('checklist', (table) => {
    table.increments();
    table.boolean('tent');
    table.boolean('stove');
    table.boolean('fuel');
    table.boolean('pot');
    table.boolean('water_filter');
    table.boolean('rope');
    table.boolean('map');
    table.boolean('compass');
    table.boolean('first_aid_kit');
    table.boolean('matches_and_lighter');
    table.boolean('extra_batteries');
    table.boolean('trowel');
    table.boolean('toilet_paper');
    table.boolean('sunscreen');
    table.boolean('bug_repellant');
    table.boolean('contact_solution');
    table.boolean('toothpaste');
    table.boolean('hand_sanitizer');
    table.boolean('stuffsacks');
    table.boolean('paper_and_pen');
    table.boolean('extra_ziplock_bags');
    table.boolean('extra_garbage_bag ');
    table.boolean('knife');
    table.boolean('car_permit');
  });
};

exports.down = function(knex, Promise) {
return knex.schema.dropTableIfExists('checklist');
};

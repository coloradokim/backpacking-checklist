exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('checklist').del()
    .then(function() {
      // Inserts seed entries
      return knex('checklist').insert({
        id: 1,
        tent: false,
        stove: false,
        fuel: false,
        pot: false,
        water_filter: false,
        rope: false,
        map: false,
        compass: false,
        first_aid_kit: false,
        matches_and_lighter: false,
        extra_batteries: false,
        trowel: false,
        toilet_paper: false,
        sunscreen: false,
        bug_repellant: false,
        contact_solution: false,
        toothpaste: false,
        hand_sanitizer: false,
        stuffsacks: false,
        paper_and_pen: false,
        extra_ziplock_bags: false,
        extra_garbage_bag: false,
        knife: false,
        car_permit: false
      });
    });
};

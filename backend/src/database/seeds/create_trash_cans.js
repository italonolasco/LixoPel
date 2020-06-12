module.exports.seed = function (knex) {
  return knex("trash_cans").insert([
    { latitude: -31.7704355, longitude: -52.3422246, is_recyclable: true },
    { latitude: -31.7712177, longitude: -52.339868, is_recyclable: true },
    { latitude: -31.7710454, longitude: -52.3406291, is_recyclable: true },
    { latitude: -31.7705985, longitude: -52.342988, is_recyclable: false },
    { latitude: -31.7698426, longitude: -52.3428827, is_recyclable: false },
    { latitude: -31.7694148, longitude: -52.3409347, is_recyclable: false },
  ]);
};

const db = require("../../data/db-config");

const getAll = () => {
  return db("cars");
};

const getById = (id) => {
  return db("cars").where({ id }).first();
};

const create = (create) => {
  return db("cars")
    .insert(create)
    .then((ids) => {
      return getById(ids[0]);
    });
};

module.exports = {
  getAll,
  getById,
  create,
};

// ESNEK
const defaultCars = [
  {
    vin: "123",
    make: "Volkswagen",
    model: "Golf",
    milage: 12345,
  },
  {
    vin: "1234",
    make: "Mercedes",
    model: "C180",
    milage: 12345,
  },
  {
    vin: "12345",
    make: "Audi",
    model: "A4",
    milage: 12345,
  },
  {
    vin: "123456",
    make: "Seat",
    model: "Leon",
    milage: 12345,
  },
  {
    vin: "1234567",
    make: "Skoda",
    model: "Octavia",
    milage: 12345,
  },
];

exports.seed = async function (knex) {
  await knex("cars").truncate();
  await knex("cars").insert(defaultCars);
};

// ESNEK
const defaultCars = [
  {
    vin: "123",
    make: "Volkswagen",
    model: "Golf",
    mileage: 12345,
  },
  {
    vin: "1234",
    make: "Mercedes",
    model: "C180",
    mileage: 12345,
  },
  {
    vin: "12345",
    make: "Audi",
    model: "A4",
    mileage: 12345,
  },
  {
    vin: "123456",
    make: "Seat",
    model: "Leon",
    mileage: 12345,
  },
  {
    vin: "1234567",
    make: "Skoda",
    model: "Octavia",
    mileage: 12345,
  },
];

exports.seed = async function (knex) {
  await knex("cars").truncate();
  await knex("cars").insert(defaultCars);
};

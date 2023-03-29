// HOKUS POKUS
const express = require("express");
const router = express.Router();
const {
  checkCarPayload,
  checkVinNumberUnique,
  checkVinNumberValid,
  checkCarId,
} = require("./cars-middleware");
const { getAll, getById, create } = require("./cars-model");

router.get("/", async (req, res, next) => {
  try {
    const allCars = await getAll();
    res.json(allCars);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", checkCarId, (req, res, next) => {
  try {
    res.json(req.car);
  } catch (error) {
    next(error);
  }
});

router.post(
  "/",
  checkCarPayload,
  checkVinNumberValid,
  checkVinNumberUnique,
  async (req, res, next) => {
    try {
      let insertedCar = await create(req.body);
      res.json(insertedCar);
    } catch (error) {
      next(error);
    }
  }
);

router.use((error, req, res, next) => {
  res
    .status(error.status || 500)
    .json({ message: error.message, customMessage: "hata oluştu" });
});

module.exports = router;

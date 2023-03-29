const { getAll, getById, create } = require("./cars-model");
const db = require("../../data/db-config");
const vinValidator = require("vin-validator");

const checkCarId = async (req, res, next) => {
  try {
    const isExist = await getById(req.params.id);
    if (!isExist) {
      res.status(404).json({
        message: `${req.params.id} 
        no car found`,
      });
    } else {
      req.car = isExist;
    }
  } catch (error) {
    next(error);
  }
};

const checkCarPayload = (req, res, next) => {
  try {
    const fields = ["vin", "make", "model", "mileage"];
    const missedFields = [];

    fields.forEach((field) => {
      if (!req.body[field]) {
        missedFields.push(field);
      }
    });

    if (missedFields.length > 0) {
      let missedFieldsStr = missedFields.join();
      res.status(400).json({ message: `${missedFieldsStr} is missing` });
    } else {
      next();
    }
  } catch (error) {
    next(error);
  }
};

const checkVinNumberValid = (req, res, next) => {
  let isValidVin = vinValidator.validate(req.body.vin);
  if (!isValidVin)
    res.status(400).json({ message: `vin ${req.body.vin} is invalid` });
  else next();
};

const checkVinNumberUnique = async (req, res, next) => {
  try {
    let isExist = await db("cars").where("vin", req.body.vin).first();
    if (isExist) {
      res.status(400).json({ message: `vin ${req.body.vin} already exists` });
    } else {
      next();
    }
  } catch (error) {
    next(error);
  }
};

module.exports = {
  checkCarPayload,
  checkVinNumberUnique,
  checkVinNumberValid,
  checkCarId,
};

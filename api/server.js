const express = require("express");

const carsRouter = require("./cars/cars-router");
const server = express();

// SİHRİNİZİ GÖSTERİN
server.use(express.json());
server.use("/api/cars", carsRouter);
module.exports = server;

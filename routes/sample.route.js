const express = require("express");
const sampleRouter = express.Router();

const sampleData = (req, res) => {
  return res.status(200).json({ message: "Route is working without DB!" });
};

sampleRouter.get("/", sampleData);

module.exports = { sampleRouter };

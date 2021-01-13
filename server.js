require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helmet");
const MOVIES = require("./movie-data-sm.json");

const app = express();

app.use(morgan(dev));
app.use(cors());
app.use(helmet());

require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const MOVIES = require("./movie-data-sm.json");

const app;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const date_and_time_1 = require("date-and-time");
exports.default = (date) => (0, date_and_time_1.format)(new Date(date), 'MM/DD/YYYY');

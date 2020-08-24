//welcome message: get the date first, convert it to string, concatenate to welcome message
"use strict";
var date = new Date();
var dateString = date.toUTCString();
alert("Welcome back, SDRT fast 50 learners!\nToday is "+dateString);

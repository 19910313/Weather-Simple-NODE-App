// global module
import * as readline from "node:readline";
import { stdin as input, stdout as output } from "node:process";

// custom module / local

import { data_week } from "./data.mjs";
import { type } from "node:os";

const io = readline.createInterface({ input, output });

// io.on("line", (day_number) => {
//   console.log(day_number, typeof day_number);
// });

io.question("Choose the day (1...7): ", (day_number) => {
  if (parseInt(day_number)) {
    console.log(day_number, typeof day_number);

    data_week.forEach((day, index) => {
      if (index + 1 == +day_number) {
        console.log(`${day.day} : [${day.date}]: ${day.temp}`);
      }
    });
  } else {
    console.log(day_number, typeof day_number);
    data_week.forEach((day) => {
      if (day_number == day.day) {
        console.log(`${day.day} : [${day.date}]: ${day.temp}`);
      }
    });
  }
  io.close();
});



// const EventEmitter = require("events");

// const emitter = new EventEmitter();
const School = require('./school');
//Event listener

const school = new School();
school.on("BellRing", ({ period, text }) => {
    console.log(`We need to run! because ${period} ${text}`);
  });
school.startPeriod();


const EventEmitter = require("events");

class School extends EventEmitter{
    startPeriod() {
        console.log("Class started");
        //raised event when bell rinngs
        setTimeout(() => {
          this.emit("BellRing", {
            period: "first",
            text: "period ended",
          });
        }, 2000);
      }
}

module.exports = School;

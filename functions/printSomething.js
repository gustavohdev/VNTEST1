const settings = require("../settings.json");
const alerts = settings.alerts;

module.exports = function printSomething(myHighestNumber) {
    try {
        if (myHighestNumber <= 0) throw new Error(alerts.loop.not_zero);
        //if (typeof myHighestNumber !== "number") throw new Error(alerts.loop.not_number);
        //if (myNumber) throw new Error(alerts.loop.not_empty);

        for (let x = 0; x < myHighestNumber; x++) {
            let myRealValue = x + 1;
            let print = "";

            if (myRealValue % 3 === 0) print = "Visual";

            if (print) print += " ";

            if (myRealValue % 5 === 0) print += "Nuts";

            print ? console.log(print) : console.log(myRealValue);
        }
    } catch (err) {
        console.log(err);
    }
};

//module.exports = printSomething;

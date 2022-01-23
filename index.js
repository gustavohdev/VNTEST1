let myNumber = 0;
function printSomething(myHighestNumber) {
    try {
        for (let x = 0; x < myHighestNumber; x++) {
            let myRealValue = x + 1;
            let print = "";

            if (myRealValue % 3 === 0) print = "Visual";

            if (print) print += " ";

            if (myRealValue % 5 === 0) print += "Nuts";

            print ? console.log(print) : console.log(myRealValue);
        }
    } catch (err) {
        console.log(err.name, " - ", err.message);
    }
}

printSomething(myNumber);

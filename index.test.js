const { printSomething } = require("./index.js");

// function nao esta rodando com parametros, usar mocha or chai
// mocha aq e jest no outro
//clases e functions
// index roda function e criar file so para function
test("running number 0", () => {
    expect(() => {
        printSomething(100).toThrow("Can't use zero or below zero here");
    });
});

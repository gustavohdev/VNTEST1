const { printSomething } = require("./functions/printSomething");

// function nao esta rodando com parametros, usar mocha or chai
// mocha aq e jest no outro
//clases e functions
// index roda function e criar file so para function

describe("first set", () => {
    test("running number 0", () => {
        expect(() => {
            printSomething(0).toThrow("Can't use zero or below zero here");
        });
    });

    test("running number 100", () => {
        expect(() => {
            printSomething(100).not.toThrow();
        });
    });

    test("running number 500", () => {
        expect(() => {
            printSomething(500).not.toThrow();
        });
    });
});

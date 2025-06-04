"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Knapsack_1 = require("../src/Knapsack");
const Solution_1 = require("../src/Solution");
const vitest_1 = require("vitest");
(0, vitest_1.describe)('comprobar si se instancia correctamente los objetos de la clase Knapsack', () => {
    const mochila = new Knapsack_1.Knapsack([
        { nombre: "gorra", beneficio: 30, peso: 10 },
        { nombre: "agua", beneficio: 80, peso: 5 },
        { nombre: "chocolate", beneficio: 25, peso: 20 },
        { nombre: "galleta", beneficio: 60, peso: 15 }
    ], 30);
    (0, vitest_1.test)('se instancia un objeto Knapsack', () => {
        (0, vitest_1.expect)(mochila.capacidad).toBe(30);
    });
    (0, vitest_1.test)('los datos de elementos se guardan correctamente', () => {
        (0, vitest_1.expect)(mochila.elementos[2].beneficio).toBe(25);
        (0, vitest_1.expect)(mochila.elementos[3].peso).toBe(15);
        (0, vitest_1.expect)(mochila.elementos[0].nombre).toBe("gorra");
        (0, vitest_1.expect)(mochila.elementos[1].peso).toBe(5);
    });
});
(0, vitest_1.describe)('Resolución correcta con algortimo voraz', () => {
    const mochila = new Knapsack_1.Knapsack([
        { nombre: "gorra", beneficio: 30, peso: 10 },
        { nombre: "agua", beneficio: 80, peso: 5 },
        { nombre: "chocolate", beneficio: 25, peso: 20 },
        { nombre: "galleta", beneficio: 60, peso: 15 }
    ], 30);
    let solucion = new Solution_1.Solution(mochila);
    solucion.buscar_solucion_voraz();
    solucion.print();
    (0, vitest_1.test)('solución óptima esperada', () => {
        (0, vitest_1.expect)(solucion.beneficio_total).toBe(170);
    });
});

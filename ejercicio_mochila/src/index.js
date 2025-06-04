"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Knapsack_1 = require("./Knapsack");
const Solution_1 = require("./Solution");
// Ejemplo de funcionamiento de una búsqueda de solucón voraz
// crear una mochila
const mochila = new Knapsack_1.Knapsack([
    { nombre: "gorra", beneficio: 30, peso: 10 },
    { nombre: "agua", beneficio: 80, peso: 5 },
    { nombre: "chocolate", beneficio: 25, peso: 20 },
    { nombre: "galleta", beneficio: 60, peso: 15 }
], 30);
let solucion = new Solution_1.Solution(mochila);
/**
 * Se invoca al método para buscar una solución por algoritmo voraz y se imprime la solución
 */
solucion.buscar_solucion_voraz();
solucion.print();

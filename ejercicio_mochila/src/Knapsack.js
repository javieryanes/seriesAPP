"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Knapsack = void 0;
/**
 * Clase que guarda la capacidad de la mochila y los objetos que se quieren introducir
 */
class Knapsack {
    elementos;
    capacidad;
    constructor(elementos, capacidad) {
        this.elementos = elementos;
        this.capacidad = capacidad;
    }
}
exports.Knapsack = Knapsack;

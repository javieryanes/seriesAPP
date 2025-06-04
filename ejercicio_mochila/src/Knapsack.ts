import {elemento} from './types'

/**
 * Clase que guarda la capacidad de la mochila y los objetos que se quieren introducir
 */
export class Knapsack {
    public elementos: elemento[];
    capacidad: number;
    constructor(elementos: elemento[], capacidad: number) {
        this.elementos = elementos;
        this.capacidad = capacidad;
    }
}
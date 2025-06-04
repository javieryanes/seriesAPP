import { elemento } from './types';
/**
 * Clase que guarda la capacidad de la mochila y los objetos que se quieren introducir
 */
export declare class Knapsack {
    elementos: elemento[];
    capacidad: number;
    constructor(elementos: elemento[], capacidad: number);
}

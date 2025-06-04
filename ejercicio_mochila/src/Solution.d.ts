import { Knapsack } from "./Knapsack";
import { elemento } from "./types";
export declare class Solution {
    contenido_solucion: elemento[];
    peso_total: number;
    beneficio_total: number;
    mochila: Knapsack;
    constructor(mochila: Knapsack);
    /**
     * Algoritmo voraz:  ordenar en orden descendente los elementos de la instancia que desea resolver según ratio beneficio/peso.
     * Luego, deberá introducir aquellos elementos que quepan en la mochila siguiendo el orden anterior.
     * Guarda los datos obtenidos en los atributos de la solución
     * @returns - No retorna ningún valor
     */
    buscar_solucion_voraz(): void;
    /**
     * Método básico para mostrar información sobre la solución
     */
    print(): void;
}

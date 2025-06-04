
import { Knapsack } from "./Knapsack";
import { elemento } from "./types";

export class Solution {
    public contenido_solucion: elemento[] = []
    peso_total: number = 0
    beneficio_total: number = 0
    mochila: Knapsack;
    constructor(mochila: Knapsack) {
        this.mochila = mochila;
    }
    /**
     * Algoritmo voraz:  ordenar en orden descendente los elementos de la instancia que desea resolver según ratio beneficio/peso. 
     * Luego, deberá introducir aquellos elementos que quepan en la mochila siguiendo el orden anterior.
     * Guarda los datos obtenidos en los atributos de la solución
     * @returns - No retorna ningún valor
     */
    buscar_solucion_voraz() {
        let contenido_ordenado: elemento[] = this.mochila.elementos.sort((elemento) => elemento.beneficio/elemento.peso);
        
        let peso = 0;
        let beneficio = 0;
          contenido_ordenado.forEach(item => {
            // si cabe en la mochila se mete el objeto
            if ((item.peso + peso) <= this.mochila.capacidad) {
                this.contenido_solucion.push(item);
                peso += item.peso;
                beneficio += item.beneficio
            }
          })
        this.peso_total = peso;
        this.beneficio_total = beneficio;
    }
    
    /**
     * Método básico para mostrar información sobre la solución
     */
    print() {
        console.log(`Peso: ${this.peso_total}/${this.mochila.capacidad}`);
        console.log(`Beneficio total: ${this.beneficio_total}`);
        console.log(`Elementos que la componen: `);
      this.contenido_solucion.forEach(item => {
        console.log(item);
      })
    }
}

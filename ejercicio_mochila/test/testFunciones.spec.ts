import { Knapsack } from "../src/Knapsack";
import { Solution } from "../src/Solution";
import  { describe,test, expect } from 'vitest';



describe('comprobar si se instancia correctamente los objetos de la clase Knapsack', () => {
    const mochila = new Knapsack(
        [
            { nombre: "gorra", beneficio: 30, peso: 10 },
            { nombre: "agua", beneficio: 80,peso: 5},
            { nombre: "chocolate", beneficio: 25,peso: 20},
            { nombre: "galleta", beneficio: 60,peso: 15 } 
        ],
        30
    );
    test('se instancia un objeto Knapsack', () => {
        expect(mochila.capacidad).toBe(30);
    });
    test('los datos de elementos se guardan correctamente', () => {
        expect(mochila.elementos[2].beneficio).toBe(25);
        expect(mochila.elementos[3].peso).toBe(15);
        expect(mochila.elementos[0].nombre).toBe("gorra");
        expect(mochila.elementos[1].peso).toBe(5);
    });
});

describe('Resolución correcta con algortimo voraz', () => {
    const mochila = new Knapsack(
        [
            { nombre: "gorra", beneficio: 30, peso: 10 },
            { nombre: "agua", beneficio: 80,peso: 5},
            { nombre: "chocolate", beneficio: 25,peso: 20},
            { nombre: "galleta", beneficio: 60,peso: 15 } 
        ],
        30
    );
    let solucion = new Solution(mochila);

    solucion.buscar_solucion_voraz();
    solucion.print();
    test('solución óptima esperada', () => {
        expect(solucion.beneficio_total).toBe(170)
    })
} )
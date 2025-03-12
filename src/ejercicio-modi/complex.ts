import { Arithmetic, ArithmeticCollection } from "./arithmeticable";

/**
 * Clase ComplexNumber que implementa la interfas Arithmetic y define las operaciones para estos
 */
export class ComplexNumber implements Arithmetic<ComplexNumber>{
  accessor real: number;
  accessor img: number;

  /**
   * Contructor de la clase ComplexNumber
   * @param real - Parte real del número
   * @param img - Parte imaginaria del número
   */
  constructor(real: number, img: number) {
    this.real = real;
    this.img = img;
  }

  /**
   * Función de adición
   * @param other - El otro número complejo a sumar
   * @returns La suma de ambos complejos sumados
   */
  add(other: ComplexNumber): ComplexNumber {
    return new ComplexNumber(this.real + other.real, this.img + other.img) 
  }

    /**
   * Función de substracción
   * @param other - El otro número complejo a restar
   * @returns La suma de ambos complejos restados
   */
  sub(other: ComplexNumber): ComplexNumber {
    return new ComplexNumber(this.real - other.real, this.img - other.img) 
  }

    /**
   * Función de mutiplicación
   * @param other - El otro número complejo a multiplicar
   * @returns La suma de ambos complejos multiplicados
   */
  multiply(other: ComplexNumber): ComplexNumber {
    let a: number = this.real;
    let b: number = this.img;
    let c: number = other.real;
    let d: number = other.img;
    return new ComplexNumber((a * c) - (b * d), (a * d) + (b * c)); 
  }

    /**
   * Función de división
   * @param other - El otro número complejo a dividir
   * @returns La suma de ambos complejos divididos
   */
  divide(other: ComplexNumber): ComplexNumber {
    let a: number = this.real;
    let b: number = this.img;
    let c: number = other.real;
    let d: number = other.img;
    return new ComplexNumber(((a * c) + (b * d)) / ((c * c) + (d * d)), ((b * c) - (a * d)) / ((c * c) + (d * d))); 
  }
}

let complex1: ComplexNumber = new ComplexNumber(1, 2);
let complex2: ComplexNumber = new ComplexNumber(3, 4);

let collection: ArithmeticCollection<ComplexNumber> = new ArithmeticCollection<ComplexNumber>();
collection.addArithmetic(complex1);
collection.addArithmetic(complex2);

console.log(`Número complejo 1: (${collection.getArithmetic(complex1).real}, ${collection.getArithmetic(complex1).img})`);

console.log(`Tamaño de la colección: ${collection.getNumberOfArithmeticables()}`);
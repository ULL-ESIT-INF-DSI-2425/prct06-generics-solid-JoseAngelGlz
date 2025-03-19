import { Arithmetic } from "./arithmeticable.js";

/**
 * Clase RationalNumber que implementa la interfas Arithmetic y define las operaciones para estos
 */
export class RationalNumber implements Arithmetic<RationalNumber>{
  accessor a: number;
  accessor b: number;

  /**
   * Contructor de la clase RationalNumber
   * @param a - Parte a del número
   * @param b - Parte b del número
   */
  constructor(a: number, b: number) {
    this.a = a;
    this.b = b;
  }

  /**
   * Función de adición
   * @param other - El otro número racional a sumar
   * @returns La suma de ambos racionales sumados
   */
  add(other: RationalNumber): RationalNumber {
    let a: number = this.a;
    let b: number = this.b;
    let c: number = other.a;
    let d: number = other.b;
    return new RationalNumber((a * d) + (b * c), b * d); 

  }

    /**
   * Función de substracción
   * @param other - El otro número racional a restar
   * @returns La suma de ambos racionales restados
   */
  sub(other: RationalNumber): RationalNumber {
    let a: number = this.a;
    let b: number = this.b;
    let c: number = other.a;
    let d: number = other.b;
    return new RationalNumber((a * d) - (b * c), b * d); 
  }

    /**
   * Función de mutiplicación
   * @param other - El otro número racional a multiplicar
   * @returns La suma de ambos racionales multiplicados
   */
  multiply(other: RationalNumber): RationalNumber {
    let a: number = this.a;
    let b: number = this.b;
    let c: number = other.a;
    let d: number = other.b;
    return new RationalNumber(a * c, b * d); 
  }

    /**
   * Función de división
   * @param other - El otro número racional a dividir
   * @returns La suma de ambos racionales divididos
   */
  divide(other: RationalNumber): RationalNumber {
    let a: number = this.a;
    let b: number = this.b;
    let c: number = other.a;
    let d: number = other.b;
    return new RationalNumber(a * d, b * c); 
  }
}
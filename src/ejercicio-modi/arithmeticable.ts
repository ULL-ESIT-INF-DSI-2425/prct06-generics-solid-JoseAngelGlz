/**
 * Interfaz Arithmetic que implementa las operaciones que ha de tener un número aritmético
 */
export interface Arithmetic<T> {
  add(other: T): T;
  sub(other: T): T;
  multiply(other: T): T;
  divide(other: T): T;
}

/**
 * Clase ArithmeticCollection que contiene un array de T y sus respectivas operaicones
 */
export class ArithmeticCollection<T extends Arithmetic<T>> {
  accessor collection: T[] = [];

  /**
   * Función que añade un aritmético a la collección
   * @param arithmetic - Parámetro de tipo T
   */
  addArithmetic(arithmetic: T) {
    this.collection.push(arithmetic);
  }

  /**
   * Función que devuelve un aritmético concreto dentro de la colección
   * @param arithmetic - Parámetro a buscar
   * @returns T si lo encuentra, undefined si no.
   */
  getArithmetic(arithmetic: T): T | undefined {
    return this.collection.find(item => item === arithmetic);
  }

  /**
   * Función que devuelve el tamaño de la colleción
   * @returns El tamaño de la colección
   */
  getNumberOfArithmeticables(): number {
    return this.collection.length;
  }
}
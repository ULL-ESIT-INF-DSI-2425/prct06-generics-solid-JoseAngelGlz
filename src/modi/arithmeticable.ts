/**
 * Interfaz Arithmetic que implementa las operaciones que ha de tener un número aritmético
 */
export interface Arithmetic<T> {
  add(other: T): T;
  sub(other: T): T;
  multiply(other: T): T;
  divide(other: T): T;
}
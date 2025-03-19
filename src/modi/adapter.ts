import { ComplexNumber as Complex } from './complex.js'
import { RationalNumber as Rational } from './rational.js'
import { Arithmetic as Collection } from './arithmeticable.js'

/**
 * Clase que adapta un rational para que sea operable con un complejo
 */
export class Adapter extends Complex {

  /**
   * Constructor de la clase Adapter
   * @param rational - Racional a adaptar
   */
  constructor(private rational: Rational) {
    super(rational.a / rational.b, 0);
  }
}
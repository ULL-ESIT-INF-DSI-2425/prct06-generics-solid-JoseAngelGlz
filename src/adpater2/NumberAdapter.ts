import { Complex } from "./complex.js";
import { Rational } from "./rational.js";

/**
 * NumberAdapter - Allow to operate Rational numbers as Complex numbers
 */
export class NumberAdapter extends Complex {
  constructor(private rational: Rational) {
    super(rational.getNominator() / rational.getDenominator(), 0);
  }
}
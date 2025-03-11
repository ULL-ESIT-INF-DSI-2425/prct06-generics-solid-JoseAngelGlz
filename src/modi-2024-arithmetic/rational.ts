import { arithmetic, Number } from "./arithmetic";

export class Rational extends Number implements arithmetic<Rational> {
  sum(other: Rational): Rational {
    return new Rational(this.num1 * other.num2 + other.num1 * this.num2, this.num2 * other.num2);
  }

  sub(other: Rational): Rational {
    return new Rational(this.num1 * other.num2 - other.num1 * this.num2, this.num2 * other.num2);
  }

  print(): string {
    return `${this.num1}/${this.num2}`;
  }
}
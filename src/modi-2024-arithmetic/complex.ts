import { arithmetic, Number } from "./arithmetic";

export class Complex extends Number implements arithmetic<Complex> {
  sum(other: Complex): Complex {
    return new Complex(this.num1 + other.num1, this.num2 + other.num2);
  }

  sub(other: Complex): Complex {
    return new Complex(this.num1 - other.num1, this.num2 - other.num2);
  }

  print(): string {
    return `${this.num1} + ${this.num2}i`;
  }
}
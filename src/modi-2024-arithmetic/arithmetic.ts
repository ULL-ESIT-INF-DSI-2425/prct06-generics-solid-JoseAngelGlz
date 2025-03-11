export interface numberLike {
  num1: number;
  num2: number;
}

export interface arithmetic<T> {
  sum(other: T): T;
  sub(other: T): T;
}

export abstract class Number implements numberLike {
  num1: number;
  num2: number;

  constructor(num1: number, num2: number) {
    this.num1 = num1;
    this.num2 = num2;
  }

  abstract sum(other: Number): Number;

  abstract sub(other: Number): Number;

  abstract print(): string;

}

export class ArithmeticCollection<T extends arithmetic<T>> {
  private items: T[] = [];

  add(item: T) {
    this.items.push(item);
  }

  sumAll(): T {
    let sum: T = this.items[0];
    for (let i = 1; i < this.items.length; i++) {
      sum = sum.sum(this.items[i]);
    }
    return sum;
  }

  subAll(): T {
    let sub: T = this.items[0];
    for (let i = 1; i < this.items.length; i++) {
      sub = sub.sub(this.items[i]);
    }
    return sub;
  }
}
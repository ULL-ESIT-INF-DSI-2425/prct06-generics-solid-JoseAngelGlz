import { beforeEach, afterEach, describe, expect, test, vi } from "vitest";
import { Number, ArithmeticCollection } from '../src/modi-2024-arithmetic/arithmetic'
import { Complex } from '../src/modi-2024-arithmetic/complex'
import { Rational } from '../src/modi-2024-arithmetic/rational'

describe('Number', () => { 
  let number: Number;

  beforeEach(() => {
    number = new Complex(1, 2);
  });

  test('Constructor and getters', () => {
    expect(number.num1).toBe(1);
    expect(number.num2).toBe(2);
  });

  test('sum', () => {
    expect(number.sum(new Complex(3, 4))).toEqual(new Complex(4, 6));
  });

  test('sub', () => {
    expect(number.sub(new Complex(3, 4))).toEqual(new Complex(-2, -2));
  });
});

describe('ArithmeticCollection', () => {
  let collection: ArithmeticCollection<Complex>;

  beforeEach(() => {
    collection = new ArithmeticCollection();
    collection.add(new Complex(1, 2));
    collection.add(new Complex(3, 4));
    collection.add(new Complex(5, 6));
  });

  test('sumAll', () => {
    expect(collection.sumAll()).toEqual(new Complex(9, 12));
  });

  test('subAll', () => {
    expect(collection.subAll()).toEqual(new Complex(-7, -8));
  });
});

describe('ArithmeticCollection', () => {
  let collection: ArithmeticCollection<Rational>;

  beforeEach(() => {
    collection = new ArithmeticCollection();
    collection.add(new Rational(1, 2));
    collection.add(new Rational(3, 4));
    collection.add(new Rational(5, 6));
  });

  test('sumAll', () => {
    expect(collection.sumAll()).toEqual(new Rational(100, 48));
  });

  test('subAll', () => {
    expect(collection.subAll()).toEqual(new Rational(-52, 48));
  });
});

describe('Complex', () => {
  let number: Complex;

  beforeEach(() => {
    number = new Complex(1, 2);
  });

  test('Constructor and getters', () => {
    expect(number.num1).toBe(1);
    expect(number.num2).toBe(2);
  });

  test('sum', () => {
    expect(number.sum(new Complex(3, 4))).toEqual(new Complex(4, 6));
  });

  test('sub', () => {
    expect(number.sub(new Complex(3, 4))).toEqual(new Complex(-2, -2));
  });

  test('print', () => {
    expect(number.print()).toBe('1 + 2i');
  });
});

describe('Rational', () => {
  let number: Rational;

  beforeEach(() => {
    number = new Rational(1, 2);
  });

  test('Constructor and getters', () => {
    expect(number.num1).toBe(1);
    expect(number.num2).toBe(2);
  });

  test('sum', () => {
    expect(number.sum(new Rational(3, 4))).toEqual(new Rational(10, 8));
  });

  test('sub', () => {
    expect(number.sub(new Rational(3, 4))).toEqual(new Rational(-2, 8));
  });

  test('print', () => {
    expect(number.print()).toBe('1/2');
  });
});
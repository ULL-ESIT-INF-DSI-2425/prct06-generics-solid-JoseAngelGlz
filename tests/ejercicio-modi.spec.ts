import { beforeEach, afterEach, describe, expect, test, vi } from "vitest";
import { ArithmeticCollection } from '../src/ejercicio-modi/arithmeticable.ts'
import { ComplexNumber } from '../src/ejercicio-modi/complex.ts'

describe('Arithmetic Collection', () => {
  let complex1: ComplexNumber;
  let complex2: ComplexNumber;
  let complex3: ComplexNumber;
  let complex4: ComplexNumber;
  let collection: ArithmeticCollection<ComplexNumber>;

  beforeEach(() => {
    complex1 = new ComplexNumber(1, 1);
    complex2 = new ComplexNumber(2, 2);
    complex3 = new ComplexNumber(3, 3);
    complex4 = new ComplexNumber(4, 4);
    collection = new ArithmeticCollection<ComplexNumber>();
    collection.addArithmetic(complex1);
    collection.addArithmetic(complex2);
    collection.addArithmetic(complex3);
  });

  test('Constructor and getters', () => {
    expect(collection.collection).toStrictEqual([complex1, complex2, complex3]);
  });

  test('Setters', () => {
    collection.collection = [complex4];
    expect(collection.collection).toStrictEqual([complex4]);
  });

  test('Add arithmetic', () => {
    collection.addArithmetic(complex4);
    expect(collection.collection).toStrictEqual([complex1, complex2, complex3, complex4]);
  });

  test('Get arithmetic', () => {
    expect(collection.getArithmetic(complex2)).toBe(complex2);
  });

  test('No get arithmetic', () => {
    expect(collection.getArithmetic(complex4)).toBe(undefined);
  });

  test('Empty list', () => {
    collection.collection = [];
    expect(collection.getNumberOfArithmeticables()).toBe(0);
  });

  test('No empty list', () => {
    expect(collection.getNumberOfArithmeticables()).toBe(3);
  });

  test('Full list', () => {
    collection.addArithmetic(complex4);
    expect(collection.getNumberOfArithmeticables()).toBe(4);
  });
});

describe('Arithmetic Collection', () => {
  let complex1: ComplexNumber;
  let complex2: ComplexNumber;
  let complex3: ComplexNumber;
  let complex4: ComplexNumber;
  let collection: ArithmeticCollection<ComplexNumber>;

  beforeEach(() => {
    complex1 = new ComplexNumber(1, 1);
    complex2 = new ComplexNumber(2, 2);
    complex3 = new ComplexNumber(3, 3);
    complex4 = new ComplexNumber(4, 4);
  });

  test('Constructor and getters', () => {
    expect(complex1.real).toBe(1);
    expect(complex1.img).toBe(1);
    expect(complex2.real).toBe(2);
    expect(complex2.img).toBe(2);
    expect(complex3.real).toBe(3);
    expect(complex3.img).toBe(3);
    expect(complex4.real).toBe(4);
    expect(complex4.img).toBe(4);
  });

  test('Setters', () => {
    complex1.real = 2;
    complex1.img = 4;
    complex2.real = -8;
    complex2.img = -50;
    expect(complex1.real).toBe(2);
    expect(complex1.img).toBe(4);
    expect(complex2.real).toBe(-8);
    expect(complex2.img).toBe(-50);
  });

  test('Add', () => {
    expect(complex1.add(complex2)).toStrictEqual(new ComplexNumber(3, 3));
    expect(complex2.add(complex2)).toStrictEqual(new ComplexNumber(4, 4));
    expect(complex4.add(complex3)).toStrictEqual(new ComplexNumber(7, 7));
    expect(complex3.add(complex3)).toStrictEqual(new ComplexNumber(6, 6));
  });

  test('Sub', () => {
    expect(complex1.sub(complex2)).toStrictEqual(new ComplexNumber(-1, -1));
    expect(complex2.sub(complex2)).toStrictEqual(new ComplexNumber(0, 0));
    expect(complex4.sub(complex3)).toStrictEqual(new ComplexNumber(1, 1));
    expect(complex3.sub(complex3)).toStrictEqual(new ComplexNumber(0, 0));
  });

  test('Multipliy', () => {
    expect(complex1.multiply(complex2)).toStrictEqual(new ComplexNumber(0, 4));
    expect(complex2.multiply(complex2)).toStrictEqual(new ComplexNumber(0, 9));
    expect(complex4.multiply(complex3)).toStrictEqual(new ComplexNumber(0, 24));
    expect(complex3.multiply(complex3)).toStrictEqual(new ComplexNumber(0, 18));
  });

  test('Divide', () => {
    expect(complex1.divide(complex2)).toStrictEqual(new ComplexNumber(1/2, 0));
    expect(complex2.divide(complex2)).toStrictEqual(new ComplexNumber(1, 0));
    expect(complex4.divide(complex3)).toStrictEqual(new ComplexNumber(3/4, 0));
    expect(complex3.divide(complex3)).toStrictEqual(new ComplexNumber(1, 0));
  });
});
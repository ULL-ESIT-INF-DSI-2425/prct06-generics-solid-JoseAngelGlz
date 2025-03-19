import { beforeEach, afterEach, describe, expect, test, vi } from "vitest";
import { Arithmetic } from '../src/modi/arithmeticable.ts'
import { ComplexNumber } from '../src/modi/complex.ts'
import { RationalNumber } from '../src/modi/rational.ts'
import { Adapter } from '../src/modi/adapter.ts'

describe('Complex', () => {
  let complex1: ComplexNumber;
  let complex2: ComplexNumber;
  let complex3: ComplexNumber;
  let complex4: ComplexNumber;

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

describe('Rational', () => {
  let rational1: RationalNumber;
  let rational2: RationalNumber;
  let rational3: RationalNumber;
  let rational4: RationalNumber;

  beforeEach(() => {
    rational1 = new RationalNumber(1, 2);
    rational2 = new RationalNumber(3, 4);
    rational3 = new RationalNumber(5, 6);
    rational4 = new RationalNumber(7, 8);
  });

  test('Constructor and getters', () => {
    expect(rational1.a).toBe(1);
    expect(rational1.b).toBe(2);
    expect(rational2.a).toBe(3);
    expect(rational2.b).toBe(4);
    expect(rational3.a).toBe(5);
    expect(rational3.b).toBe(6);
    expect(rational4.a).toBe(7);
    expect(rational4.b).toBe(8);
  });

  test('Setters', () => {
    rational1.a = 2;
    rational1.b = 4;
    rational2.a = -8;
    rational2.b = -50;
    expect(rational1.a).toBe(2);
    expect(rational1.b).toBe(4);
    expect(rational2.a).toBe(-8);
    expect(rational2.b).toBe(-50);
  });

  test('Add', () => {
    expect(rational1.add(rational2)).toStrictEqual(new RationalNumber(5, 4));
    expect(rational2.add(rational2)).toStrictEqual(new RationalNumber(3, 2));
    expect(rational4.add(rational3)).toStrictEqual(new RationalNumber(82, 35));
    expect(rational3.add(rational3)).toStrictEqual(new RationalNumber(12, 5));
  });

  test('Sub', () => {
    expect(rational1.sub(rational2)).toStrictEqual(new RationalNumber(2, 8));
    expect(rational2.sub(rational2)).toStrictEqual(new RationalNumber(0, 0));
    expect(rational4.sub(rational3)).toStrictEqual(new RationalNumber(6, 4));
    expect(rational3.sub(rational3)).toStrictEqual(new RationalNumber(0, 0));
  });

  test('Multipliy', () => {
    expect(rational1.multiply(rational2)).toStrictEqual(new RationalNumber(20, 4));
    expect(rational2.multiply(rational2)).toStrictEqual(new RationalNumber(102, 53));
    expect(rational4.multiply(rational3)).toStrictEqual(new RationalNumber(8, 9));
    expect(rational3.multiply(rational3)).toStrictEqual(new RationalNumber(30, 18));
  });

  test('Divide', () => {
    expect(rational1.divide(rational2)).toStrictEqual(new RationalNumber(3, 5));
    expect(rational2.divide(rational2)).toStrictEqual(new RationalNumber(1, 20));
    expect(rational4.divide(rational3)).toStrictEqual(new RationalNumber(41, 106));
    expect(rational3.divide(rational3)).toStrictEqual(new RationalNumber(8, 24));
  });
});

describe('Adapter', () => {
  let rational1: RationalNumber;
  let rational2: RationalNumber;
  let complex1: ComplexNumber;
  let complex2: ComplexNumber;
  let adpatedRational1: Adapter;
  let adpatedRational2: Adapter;

  beforeEach(() => {
    rational1 = new RationalNumber(1, 2);
    rational2 = new RationalNumber(3, 4);
    complex1 = new ComplexNumber(5, 6);
    complex2 = new ComplexNumber(7, 8);
    adpatedRational1 = new Adapter(rational1);
    adpatedRational2 = new Adapter(rational2);
    
  });

  test('Constructor and getters', () => {
    expect(adpatedRational1.real).toBe(0.5);
    expect(adpatedRational1.img).toBe(0);
    expect(adpatedRational2.real).toBe(0.75);
    expect(adpatedRational2.img).toBe(0);
  });

  test('Setters', () => {
    adpatedRational1.real = -20;
    adpatedRational1.img = 0;
    adpatedRational2.real = 6;
    adpatedRational2.img = 100;
    expect(adpatedRational1.real).toBe(-20);
    expect(adpatedRational1.img).toBe(0);
    expect(adpatedRational2.real).toBe(6);
    expect(adpatedRational2.img).toBe(100);
  });

  test('Add', () => {
    expect(adpatedRational1.add(complex1)).toStrictEqual(new ComplexNumber(1.5, 6));
    expect(adpatedRational2.add(complex2)).toStrictEqual(new ComplexNumber(3.75, 8));
    expect(adpatedRational1.add(complex2)).toStrictEqual(new ComplexNumber(3.75, 8));
    expect(adpatedRational2.add(complex1)).toStrictEqual(new ComplexNumber(1.5, 6));
  });
  
  test('Sub', () => {
    expect(adpatedRational1.sub(complex1)).toStrictEqual(new ComplexNumber(-4.5, -6));
    expect(adpatedRational2.sub(complex2)).toStrictEqual(new ComplexNumber(-6.25, -8));
    expect(adpatedRational1.sub(complex2)).toStrictEqual(new ComplexNumber(-6.25, -8));
    expect(adpatedRational2.sub(complex1)).toStrictEqual(new ComplexNumber(-4.5, -6));
  });
  
  test('Multiply', () => {
    expect(adpatedRational1.multiply(complex1)).toStrictEqual(new ComplexNumber(0.5, 3));
    expect(adpatedRational2.multiply(complex2)).toStrictEqual(new ComplexNumber(5.25, 5.25));
    expect(adpatedRational1.multiply(complex2)).toStrictEqual(new ComplexNumber(5.25, 5.25));
    expect(adpatedRational2.multiply(complex1)).toStrictEqual(new ComplexNumber(0.5, 3));
  });
  
  test('Divide', () => {
    expect(adpatedRational1.divide(complex1)).toStrictEqual(new ComplexNumber(0.1, -0.1));
    expect(adpatedRational2.divide(complex2)).toStrictEqual(new ComplexNumber(0.075, -0.075));
    expect(adpatedRational1.divide(complex2)).toStrictEqual(new ComplexNumber(0.075, -0.075));
    expect(adpatedRational2.divide(complex1)).toStrictEqual(new ComplexNumber(0.1, -0.1));
  });
});
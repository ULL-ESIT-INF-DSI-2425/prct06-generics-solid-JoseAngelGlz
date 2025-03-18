import { describe, expect, test } from "vitest";
import { ImperialLength, ImperialMass } from '../src/adapter/imperial.js';
import { MetricLength, MetricMass } from '../src/adapter/metric.js';
import { LengthAdapter, MassAdapter } from '../src/adapter/adapter.js';

describe('ImperialLength', () => {
  test('should correctly intestialize and print values', () => {
    const imperialLength = new ImperialLength(1, 2, 3, 4);
    expect(imperialLength.print()).toBe('ImperialLength: 1 pulgadas, 2 pies, 3 yardas, 4 millas');
  });
});

describe('ImperialMass', () => {
  test('should correctly intestialize and print values', () => {
    const imperialMass = new ImperialMass(5, 6, 7, 8);
    expect(imperialMass.print()).toBe('ImperialMass: 5 onzas, 6 libras, 7 toneladas, 8 centenas');
  });
});

describe('MetricLength', () => {
  test('should correctly intestialize and print values', () => {
    const metricLength = new MetricLength(10, 20, 30, 40);
    expect(metricLength.print()).toBe('MetricLength: 10 milimetros, 20 centimetros, 30 metros, 40 kilometros');
  });
});

describe('MetricMass', () => {
  test('should correctly intestialize and print values', () => {
    const metricMass = new MetricMass(50, 60, 70, 80);
    expect(metricMass.print()).toBe('MetricMass: 50 miligramos, 60 gramos, 70 kilogramos, 80 toneladas');
  });
});

describe('LengthAdapter', () => {
  test('should correctly convert and print values', () => {
    const imperialLength = new ImperialLength(1, 2, 3, 4);
    const metricLength = new LengthAdapter(imperialLength);
    expect(metricLength.print()).toBe(
      `LengthAdapter: ${1 * 25.4} milimetros, ${2 * 304.8} centimetros, ${3 * 914.4} metros, ${4 * 1609344} kilometros`
    );
  });
});

describe('MassAdapter', () => {
  test('should correctly convert and print values', () => {
    const imperialMass = new ImperialMass(1, 2, 3, 4);
    const metricMass = new MassAdapter(imperialMass);
    expect(metricMass.print()).toBe(
      `MassAdapter: ${1 * 28349.5} miligramos, ${2 * 453592} gramos, ${3 * 1000000} kilogramos, ${4 * 45359.2} toneladas`
    );
  });
});
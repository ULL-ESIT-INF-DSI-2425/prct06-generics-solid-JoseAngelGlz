export class MetricLength {
  accessor milimetros: number;
  accessor centimetros: number;
  accessor metros: number;
  accessor kilometros: number;

  constructor(milimetros: number, centimetros: number, metros: number, kilometros: number) {
    this.milimetros = milimetros;
    this.centimetros = centimetros;
    this.metros = metros;
    this.kilometros = kilometros;
  }

  print(): string {
    return `MetricLength: ${this.milimetros} milimetros, ${this.centimetros} centimetros, ${this.metros} metros, ${this.kilometros} kilometros`;
  }
}

export class MetricMass {
  accessor miligramos: number;
  accessor gramos: number;
  accessor kilogramos: number;
  accessor toneladas: number;

  constructor(miligramos: number, gramos: number, kilogramos: number, toneladas: number) {
    this.miligramos = miligramos;
    this.gramos = gramos;
    this.kilogramos = kilogramos;
    this.toneladas = toneladas;
  }

  print(): string {
    return `MetricMass: ${this.miligramos} miligramos, ${this.gramos} gramos, ${this.kilogramos} kilogramos, ${this.toneladas} toneladas`;
  }
}
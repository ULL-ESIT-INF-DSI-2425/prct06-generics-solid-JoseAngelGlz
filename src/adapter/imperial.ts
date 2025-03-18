export class ImperialLength {
  accessor pulgadas: number;
  accessor pies: number;
  accessor yardas: number;
  accessor millas: number;

  constructor(pulgadas: number, pies: number, yardas: number, millas: number) {
    this.pulgadas = pulgadas;
    this.pies = pies;
    this.yardas = yardas;
    this.millas = millas;
  }

  print(): string {
    return `ImperialLength: ${this.pulgadas} pulgadas, ${this.pies} pies, ${this.yardas} yardas, ${this.millas} millas`;
  }
}

export class ImperialMass {
  accessor onzas: number;
  accessor libras: number;
  accessor toneladas: number;
  accessor centenas: number;

  constructor(onzas: number, libras: number, toneladas: number, centenas: number) {
    this.onzas = onzas;
    this.libras = libras;
    this.toneladas = toneladas;
    this.centenas = centenas;
  }

  print(): string {
    return `ImperialMass: ${this.onzas} onzas, ${this.libras} libras, ${this.toneladas} toneladas, ${this.centenas} centenas`;
  }
}
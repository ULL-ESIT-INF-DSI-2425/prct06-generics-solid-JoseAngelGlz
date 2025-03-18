import { ImperialLength as IL, ImperialMass as IM} from './imperial.js';
import { MetricLength as ML, MetricMass as MM} from './metric.js';

export class LengthAdapter extends ML {
  constructor(private length: IL) {
    super(length.pulgadas * 25.4, length.pies * 304.8, length.yardas * 914.4, length.millas * 1609344);
  }

  print(): string {
    return `LengthAdapter: ${this.milimetros} milimetros, ${this.centimetros} centimetros, ${this.metros} metros, ${this.kilometros} kilometros`;
  }
}

export class MassAdapter extends MM {
  constructor(private mass: IM) {
    super(mass.onzas * 28349.5, mass.libras * 453592, mass.toneladas *
      1000000, mass.centenas * 45359.2);
  }

  print(): string {
    return `MassAdapter: ${this.miligramos} miligramos, ${this.gramos} gramos, ${this.kilogramos} kilogramos, ${this.toneladas} toneladas`;
  }
}

function printData(data: string) {
  console.log(data);
}

const imperialLength = new IL(1, 2, 3, 4);
const metricLength = new LengthAdapter(imperialLength);
printData(imperialLength.print());
printData(metricLength.print());
/**
 * Clase que genera los primeros n numeros primos
 */
export class PrimeNumber {
  // instancia de la clase
  private static primeNumInstance: PrimeNumber;
  // numero primos generados
  private primes: number[];
  /**
   * Constructor de la clase que genera los primeros n numeros primos
   * @param n - numero de primos a generar
   */
  private constructor(n: number) {
    // comprobar que n es un numero entero positivo
    if (n <= 0 || n % 1 !== 0) {
      throw new Error('n debe ser un numero entero positivo');
    }
    this.primes = this.generatePrimes(n);
  }
  /**
   * Metodo que devuelve la instancia de la clase
   * @param n - numero de primos a generar
   * @returns instancia de la clase PrimeNumber
   */
  public static getPrimeNumInstance(n: number): PrimeNumber {
    if (!PrimeNumber.primeNumInstance) {
      PrimeNumber.primeNumInstance = new PrimeNumber(n);
    }
    return PrimeNumber.primeNumInstance;
  }
  /**
   * Metodo que comprueba si un numero es primo
   * @param n - numero a comprobar si es primo
   * @returns true si n es primo, false en caso contrario
   */
  private static isPrime(n: number): boolean {
    for (let i = 2; i < n; i++) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  }
  /**
   * Metodo que genera los primeros n numeros primos
   * @param n - numero de primos a generar
   * @returns array con los primeros n numeros primos
   */
  private generatePrimes(n: number): number[] {
    const generatedPrimes: number[] = [];
    // buscar los primeros n numeros primos
    let i = 2;
    while (generatedPrimes.length < n) {
      if (PrimeNumber.isPrime(i)) {
        generatedPrimes.push(i);
      }
      i++;
    }
    return generatedPrimes;
  }

  /**
   * Metodo que devuelve los primos comprendidos entre n y m
   * @param n - Cota inferior del rango
   * @param m - Cota superior del rango
   * @returns Array con los primos comprendidos entre n y m
   */
  public getPrimesInRange(n: number, m: number): number[] {
    if (n <= 0 || n % 1 !== 0 || m <= 0 || m % 1 !== 0 ) {
      throw new Error('n y m deben ser un numero entero positivo');
    }
    if (m < n) {
      throw new Error('m debe ser mayor que n');
    }
    const generatedPrimes: number[] = [];
    // buscar los primeros n numeros primos
    let i = n;
    while (i <= m) {
      if (PrimeNumber.isPrime(i)) {
        generatedPrimes.push(i);
      }
      i++;
    }
    return generatedPrimes;
  }
  /**
   * Getter del atributo primes
   * @returns array con los primeros n numeros primos
   */
  public getPrimes(): number[] {
    return PrimeNumber.primeNumInstance.primes;
  }
  /**
   * Setter del atributo primes
   * @param n - numero de primos a generar
   */
  public setPrimes(n: number): void {
    PrimeNumber.primeNumInstance.primes = PrimeNumber.primeNumInstance.generatePrimes(n);
  }

  [Symbol.iterator](): Iterator<number> {
    return this.primes.values();
  }
}

const primeNumInstance = PrimeNumber.getPrimeNumInstance(5);
// imprimir primes de la instancia
for (let i = 0; i < primeNumInstance.getPrimes().length; i++) {
  console.log(primeNumInstance.getPrimes()[i]);
}


[...primeNumInstance].forEach((prime) => console.log(prime));
import { Song, Single, Album } from './music';

/**
 * Interface Printable that contains the method printDiscography
 */
export interface Printable {
  printDiscography(): string;
}

/**
 * Class Artist that contains the attributes of an artist
 */
export class Artist<T extends Album | Single> {
  accessor name: string;
  accessor age: number;
  accessor discography: T[];

  /**
   * Constructor of the class Artist
   * @param name - Name of the artist
   * @param age - Age of the artist
   * @param discography - Array of discography of the artist
   * ```typescript	
   * const artist = new Artist('Queen', 50, [album1, album2, single1]);
   * ```
   */
  constructor(name: string, age: number, discography: T[]) {
    this.name = name;
    this.age = age;
    this.discography = discography;
  }

  /**
   * Print the discography of the artist
   * @returns string
   * ```typescript
   * artist.printDiscography();
   * ```
   */
  printDiscography(): string {
    let output: string = `The discography of ${this.name} is not available`;
    return output;
  }
}

/**
 * Class PrintableArtist that contains the attributes of an artist
 */
export class PirntableArtist<T extends Album | Single> extends Artist<T> implements Printable {
  /**
   * Print the discography of the artist
   * @returns string
   * ```typescript
   * artist.printDiscography();
   * ```
   */
  printDiscography(): string {
    let output: string = `Discography of ${this.name}:\n`;
    this.discography.forEach((element) => {
      output += `${element.name}\n`;
    });
    return output;
  }
}
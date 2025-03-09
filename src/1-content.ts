/**
 * Content class and its subclasses
 */
export class Content {
  accessor name: string;
  accessor year: number;

  /**
   * Constructor
   * @param name - Name of the content 
   * @param year - Year of the content
   * ```typescript	
   * const content = new Content('The Lord of the Rings', 2001);
   * ```
   */
  constructor(name: string, year: number) {
    this.name = name;
    this.year = year;
  }
}

/**
 * Film class
 */
export class Film extends Content {
  accessor duration: number;

  /**
   * Constructor
   * @param name - Name of the film
   * @param year - Year of the film
   * @param duration - Duration of the film
   * ```typescript
   * const film = new Film('The Lord of the Rings', 2001, 178);
   * ```
   */
  constructor(name: string, year: number, duration: number) {
    super(name, year);
    this.duration = duration;
  }
}

/**
 * Series class
 */
export class Documentary extends Content {
  accessor duration: number;

  /**
   * Constructor
   * @param name - Name of the documentary
   * @param year - Year of the documentary
   * @param duration - Duration of the documentary
   * ```typescript
   * const documentary = new Documentary('Planet Earth', 2006, 60);
   * ```
   */
  constructor(name: string, year: number, duration: number) {
    super(name, year);
    this.duration = duration;
  }
}

/**
 * Serie class
 */
export class Serie extends Content {
  accessor seasons: number;

  /**
   * Constructor
   * @param name - Name of the serie
   * @param year - Year of the serie
   * @param seasons - Number of seasons of the serie
   * ```typescript
   * const serie = new Serie('Breaking Bad', 2008, 62);
   * ```
   */
  constructor(name: string, year: number, seasons: number) {
    super(name, year);
    this.seasons = seasons;
  }
}
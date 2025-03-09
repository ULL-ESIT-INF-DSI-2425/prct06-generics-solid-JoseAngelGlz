import { Content, Film, Documentary, Serie } from "./1-content";

/**
 * Interface for streamable content
 */
export interface StreamableContent<T extends Content> {
  searchByName(name: string): T | undefined;
  searchByYear(year: number): T | undefined;
}

/**
 * Interface for streamable film and documentary
 */
export interface StreamableFilmDocumentary<T extends Film | Documentary> {
  searchByDuration(duration: number): T | undefined;
}

/**
 * Interface for streamable serie
 */
export interface StreamableSerie<T extends Serie> {
  searchBySeasons(seasons: number): T | undefined;
}

/**
 * Class to manage streamable content
 */
export class StreamableContentManager {
  accessor contents: Content[] = [];

  /**
   * Add content to the manager
   * @param content - Content to add
   * @returns void
   * ```typescript
   * const manager = new StreamableContentManager();
   * const content = new Content('The Lord of the Rings', 2001);
   * manager.addContent(content);
   * ```
   */
  addContent(content: Content): void {
    this.contents.push(content);
  }
}

/**
 * Class to manage streamable film and documentary
 */
export class SearcheableStreamableContentManager extends StreamableContentManager implements StreamableContent<Content> {
  /**
   * Search content by name
   * @param name - Name of the content
   * @returns Content
   * ```typescript
   * const manager = new SearcheableStreamableContentManager();
   * const content = new Content('The Lord of the Rings', 2001);
   * manager.addContent(content);
   * manager.searchByName('The Lord of the Rings');
   * ```
   */
  searchByName(name: string): Content | undefined {
    return this.contents.find(c => c.name === name);
  }

  /**
   * Search content by year
   * @param year - Year of the content
   * @returns Content
   * ```typescript
   * const manager = new SearcheableStreamableContentManager();
   * const content = new Content('The Lord of the Rings', 2001);
   * manager.addContent(content);
   * manager.searchByYear(2001);
   * ```
   */
  searchByYear(year: number): Content | undefined {
    return this.contents.find(c => c.year === year);
  }
}

/**
 * Class to manage streamable film and documentary
 */
export class SearcheableStreamableFilmDocumentaryManager extends SearcheableStreamableContentManager implements StreamableFilmDocumentary<Film | Documentary> {
  /**
   * Search content by duration
   * @param duration - Duration of the content
   * @returns Film | Documentary
   * ```typescript
   * const manager = new SearcheableStreamableFilmDocumentaryManager();
   * const film = new Film('The Lord of the Rings', 2001, 178);
   * manager.addContent(film);
   * manager.searchByDuration(178);
   * ```
   */
  searchByDuration(duration: number): Film | Documentary | undefined {
    return this.contents.find(c => (c instanceof Film || c instanceof Documentary) && c.duration === duration) as Film | undefined;
  }
}

/**
 * Class to manage streamable serie
 */
export class SearcheableStreamableSerieManager extends SearcheableStreamableContentManager implements StreamableSerie<Serie> {
  /**
   * Search content by seasons
   * @param seasons - Seasons of the content
   * @returns Serie
   * ```typescript
   * const manager = new SearcheableStreamableSerieManager();
   * const serie = new Serie('The Lord of the Rings', 2001, 3);
   * manager.addContent(serie);
   * manager.searchBySeasons(3);
   * ```
   */
  searchBySeasons(seasons: number): Serie | undefined {
    return this.contents.find(c => c instanceof Serie && c.seasons === seasons) as Serie | undefined;
  }
}
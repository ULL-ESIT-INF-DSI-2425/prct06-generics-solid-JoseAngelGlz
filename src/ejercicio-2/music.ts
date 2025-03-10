/**
 * Class Song that contains the attributes of a song
 */
export class Song {
  accessor name: string;
  accessor views: number;
  accessor year: number;

  /**
   * Constructor of the class Song
   * @param name - Name of the song
   * @param views - Number of views of the song
   * @param year - Year of the song
   * ```typescript	
   * const song = new Song('Bohemian Rhapsody', 1000000, 1975);
   * ```
   */
  constructor(name: string, views: number, year: number) {
    this.name = name;
    this.views = views;
    this.year = year;
  }
}

/**
 * Class Single that contains the attributes of a single
 */
export class Single {
  accessor name: string;
  accessor song: Song;

  /**
   * Constructor of the class Single
   * @param name - Name of the single
   * @param song - Song of the single
   * ```typescript	
   * const single = new Single('Bohemian Rhapsody', song);
   * ```
   */
  constructor(name: string, song: Song) {
    this.name = name;
    this.song = song;
  }
}

/**
 * Class Album that contains the attributes of an album
 */
export class Album {
  accessor name: string;
  accessor songs: Song[];

  /**
   * Constructor of the class Album
   * @param name - Name of the album
   * @param songs - Array of songs of the album
   * ```typescript	
   * const album = new Album('The Dark Side of the Moon', [song1, song2, song3], 1973);
   * ```
   */
  constructor(name: string, songs: Song[]) {
    this.name = name;
    this.songs = songs;
  }
}
import { beforeEach, afterEach, describe, expect, test, vi } from "vitest";
import { Artist, PirntableArtist } from '../src/ejercicio-2/artist'
import { Album, Single, Song } from '../src/ejercicio-2/music'

describe('Song', () => {
  let song: Song;

  beforeEach(() => {
    song = new Song('Bohemian Rhapsody', 1000000, 1975);
  });

  test('Constructor and getters', () => {
    expect(song.name).toBe('Bohemian Rhapsody');
    expect(song.views).toBe(1000000);
    expect(song.year).toBe(1975);
  });

  test('Setter', () => {
    song.name = 'Another One Bites the Dust';
    song.views = 500000;
    song.year = 1980;
    expect(song.name).toBe('Another One Bites the Dust');
    expect(song.views).toBe(500000);
    expect(song.year).toBe(1980);
  });
});

describe('Single', () => {
  let single: Single;
  let song: Song;

  beforeEach(() => {
    song = new Song('Bohemian Rhapsody', 1000000, 1975);
    single = new Single('Bohemian Rhapsody', song);
  });

  test('Constructor and getters', () => {
    expect(single.name).toBe('Bohemian Rhapsody');
    expect(single.song).toBe(song);
  });

  test('Setter', () => {
    single.name = 'Another One Bites the Dust';
    single.song = song;
    expect(single.name).toBe('Another One Bites the Dust');
    expect(single.song).toBe(song);
  });
});

describe('Album', () => {
  let album: Album;
  let song1: Song;
  let song2: Song;
  let song3: Song;

  beforeEach(() => {
    song1 = new Song('Bohemian Rhapsody', 1000000, 1975);
    song2 = new Song('Another One Bites the Dust', 500000, 1980);
    song3 = new Song('Under Pressure', 800000, 1981);
    album = new Album('Greatest Hits', [song1, song2, song3]);
  });

  test('Constructor and getters', () => {
    expect(album.name).toBe('Greatest Hits');
    expect(album.songs).toStrictEqual([song1, song2, song3]);
  });

  test('Setter', () => {
    album.name = 'The Platinum Collection';
    album.songs = [song1, song2, song3];
    expect(album.name).toBe('The Platinum Collection');
    expect(album.songs).toStrictEqual([song1, song2, song3]);
  });
});

describe('Artist', () => {
  let artist: Artist<Album | Single>;
  let album: Album;
  let single: Single;
  let song1: Song;
  let song2: Song;
  let song3: Song;

  beforeEach(() => {
    song1 = new Song('Bohemian Rhapsody', 1000000, 1975);
    song2 = new Song('Another One Bites the Dust', 500000, 1980);
    song3 = new Song('Under Pressure', 800000, 1981);
    album = new Album('Greatest Hits', [song1, song2, song3]);
    single = new Single('Bohemian Rhapsody', song1);
    artist = new Artist('Queen', 50, [album, single]);
  });

  test('Constructor and getters', () => {
    expect(artist.name).toBe('Queen');
    expect(artist.age).toBe(50);
    expect(artist.discography).toStrictEqual([album, single]);
  });

  test('Setter', () => {
    artist.name = 'The Beatles';
    artist.age = 60;
    artist.discography = [album, single];
    expect(artist.name).toBe('The Beatles');
    expect(artist.age).toBe(60);
    expect(artist.discography).toStrictEqual([album, single]);
  });

  test('printDiscography', () => {
    expect(artist.printDiscography()).toBe('The discography of Queen is not available');
  });
});

describe('PrintableArtist', () => {
  let artist: PirntableArtist<Album | Single>;
  let album: Album;
  let single: Single;
  let song1: Song;
  let song2: Song;
  let song3: Song;

  beforeEach(() => {
    song1 = new Song('Bohemian Rhapsody', 1000000, 1975);
    song2 = new Song('Another One Bites the Dust', 500000, 1980);
    song3 = new Song('Under Pressure', 800000, 1981);
    album = new Album('Greatest Hits', [song1, song2, song3]);
    single = new Single('Bohemian Rhapsody', song1);
    artist = new PirntableArtist('Queen', 50, [album, single]);
  });

  test('printDiscography', () => {
    expect(artist.printDiscography()).toBe('Discography of Queen:\nGreatest Hits\nBohemian Rhapsody\n');
  });
});
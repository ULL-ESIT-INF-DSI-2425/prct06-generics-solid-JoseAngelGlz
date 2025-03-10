import { beforeEach, afterEach, describe, expect, test, vi } from "vitest";
import { Content, Film, Documentary, Serie } from '../src/ejericio-1/content.ts'
import {  StreamableContentManager, SearcheableStreamableContentManager, SearcheableStreamableFilmDocumentaryManager, SearcheableStreamableSerieManager } from '../src/ejericio-1/streamable.ts'

describe('Content', () => {
  let content: Content;

  beforeEach(() => {
    content = new Content('The Lord of the Rings', 2001);
  });

  test('Constructor and getters', () => {
    expect(content.name).toBe('The Lord of the Rings');
    expect(content.year).toBe(2001);
  });

  test('Setter', () => {
    content.name = 'The Hobbit';
    content.year = 2012;
    expect(content.name).toBe('The Hobbit');
    expect(content.year).toBe(2012);
  });
});

describe('Film', () => {
  let film: Film;

  beforeEach(() => {
    film = new Film('The Lord of the Rings', 2001, 178);
  });

  test('Constructor and getters', () => {
    expect(film.name).toBe('The Lord of the Rings');
    expect(film.year).toBe(2001);
    expect(film.duration).toBe(178);
  });

  test('Setter', () => {
    film.name = 'The Hobbit';
    film.year = 2012;
    film.duration = 169;
    expect(film.name).toBe('The Hobbit');
    expect(film.year).toBe(2012);
    expect(film.duration).toBe(169);
  });
});

describe('Documentary', () => {
  let documentary: Documentary;

  beforeEach(() => {
    documentary = new Documentary('Planet Earth', 2006, 60);
  });

  test('Constructor and getters', () => {
    expect(documentary.name).toBe('Planet Earth');
    expect(documentary.year).toBe(2006);
    expect(documentary.duration).toBe(60);
  });

  test('Setter', () => {
    documentary.name = 'Blue Planet';
    documentary.year = 2001;
    documentary.duration = 50;
    expect(documentary.name).toBe('Blue Planet');
    expect(documentary.year).toBe(2001);
    expect(documentary.duration).toBe(50);
  });
});

describe('Serie', () => {
  let serie: Serie;

  beforeEach(() => {
    serie = new Serie('Breaking Bad', 2008, 5);
  });

  test('Constructor and getters', () => {
    expect(serie.name).toBe('Breaking Bad');
    expect(serie.year).toBe(2008);
    expect(serie.seasons).toBe(5);
  });

  test('Setter', () => {
    serie.name = 'Better Call Saul';
    serie.year = 2015;
    serie.seasons = 6;
    expect(serie.name).toBe('Better Call Saul');
    expect(serie.year).toBe(2015);
    expect(serie.seasons).toBe(6);
  });
});

describe('StreamableContent', () => {
  let contents: StreamableContentManager;
  let film: Film;
  let documentary: Documentary;

  beforeEach(() => {
    contents = new StreamableContentManager();
    film = new Film('The Lord of the Rings', 2001, 178);
    documentary = new Documentary('Planet Earth', 2006, 60);
    contents.addContent(film);
    contents.addContent(documentary);
  });

  test('Constructor and getters', () => {
    expect(contents.contents).toStrictEqual([film, documentary]);
  });

  test('Setter', () => {
    const serie = new Serie('Breaking Bad', 2008, 5);
    contents.contents = [serie];
    expect(contents.contents).toStrictEqual([serie]);
  });

  test('Add content', () => {
    expect(contents.contents.length).toBe(2);
  });
});

describe('SearcheableStreamableContentManager', () => {
  let contents: SearcheableStreamableContentManager;
  let film: Film;
  let documentary: Documentary;

  beforeEach(() => {
    contents = new SearcheableStreamableContentManager();
    film = new Film('The Lord of the Rings', 2001, 178);
    documentary = new Documentary('Planet Earth', 2006, 60);
    contents.addContent(film);
    contents.addContent(documentary);
  });

  test('Search by name', () => {
    expect(contents.searchByName('The Lord of the Rings')).toBe(film);
  });

  test('Search by year', () => {
    expect(contents.searchByYear(2006)).toBe(documentary);
  });
});

describe('SearcheableStreamableFilmDocumentaryManager', () => {
  let contents: SearcheableStreamableFilmDocumentaryManager;
  let film: Film;
  let documentary: Documentary;

  beforeEach(() => {
    contents = new SearcheableStreamableFilmDocumentaryManager();
    film = new Film('The Lord of the Rings', 2001, 178);
    documentary = new Documentary('Planet Earth', 2006, 60);
    contents.addContent(film);
    contents.addContent(documentary);
  });

  test('Search by duration', () => {
    expect(contents.searchByDuration(60)).toBe(documentary);
  });
});

describe('SearcheableStreamableSerieManager', () => {
  let contents: SearcheableStreamableSerieManager;
  let serie: Serie;

  beforeEach(() => {
    contents = new SearcheableStreamableSerieManager();
    serie = new Serie('Breaking Bad', 2008, 5);
    contents.addContent(serie);
  });

  test('Search by seasons', () => {
    expect(contents.searchBySeasons(5)).toBe(serie);
  });
});


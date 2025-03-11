// Implemente una interfaz genérica 'Collectable' con los siguientes métodos,
// los cuales deberá definir toda clase que quiera implementar dicha interfaz: addItem, getItems(), removeItem, getNumber

import { it } from "node:test";

export interface Collectable<T> {
  addItem(item: T): void;
  getItems(): T[];
  removeItem(item: T): void;
  getNumberOfItems(): number;
}

// Implemente una interfaz genérica 'Searchable' con los siguientes métodos, los cuales deberá definir toda clase que desee
// implementar dicha interfaz: search. Este método recibirá un término de búsqueda cuyo tipo no se conoce a priori.

export interface Searchable<T> {
  searchItem(predicate: (item: T) => boolean): T[];
}

// Implemente una clase abstracta genérica 'SearchableCollection' que implemente las interfaces genéricas 'Collectable'
// y 'Searchable'. Tenga en cuenta que en este punto deberá implementar todos los metodos de la interfaz 'Collectable',
// mientras que el método search de 'Searchable' será abstracto, de modo que aquellas clases que extiendan a 
// 'SearchableCollection' tengan que implementarlo obligatoriamente.

export abstract class SearchableCollection<T extends number | string> implements Collectable<T>, Searchable<T> {
  protected collection: T[] = [];

  addItem(item: T): void {
    this.collection.push(item);
  }

  getItems(): T[] {
    return this.collection;
  }

  removeItem(item: T): void {
    this.collection = this.collection.filter(otherItem => otherItem !== item);
  }

  getNumberOfItems(): number {
    return this.collection.length;
  }

  abstract searchItem(predicate: (item: T) => boolean): T[];
} 

// Extienda la clase abstracta genérica 'SearchableCollection' escribiendo dos subclases: 'NumericSearchableCollection' y 
// 'StringSearchableCollection'. La primera deberá modelar una colección de elementos numéricos en la que el método search
// deberá poder buscar un número concreto y devolverá un array con todas las ocurrencias de dicho número en la colección.
// La segunda deberá modelar una colección de cadenas de caracteres en la que el método search deberá poder buscar una subcadena
// y devolverá un array con todas las cadenas de la colección que contengan dicha subcadena.

export class NumericSearchableCollection extends SearchableCollection<number> {
  searchItem(predicate: (item: number) => boolean): number[] {
    return this.collection.filter(predicate);
  }
}

export class StringSearchableCollection extends SearchableCollection<string> {
  searchItem(predicate: (item: string) => boolean): string[] {
    return this.collection.filter(predicate);
  }
}
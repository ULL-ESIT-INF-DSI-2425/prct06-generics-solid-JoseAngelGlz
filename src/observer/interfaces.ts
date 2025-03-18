/**
 * Interfaz de la entidad observada
 */
export interface Observable {
  agregar(observer: Observer): void; 
  quitar(observer: Observer): void; 
  notificar(): void; 
}

/**
* Interfaz de la entidad observadora
*/
export interface Observer {
  update(observable: Observable): string | undefined;
}
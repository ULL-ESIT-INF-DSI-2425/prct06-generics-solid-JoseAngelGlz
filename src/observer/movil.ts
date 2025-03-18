import { Observable, Observer } from "./interfaces.js";
import { Estacion } from "./estacion.js";
import { AvisoCambioEstacion } from "./estacion.js";

/**
 * Clase observadora movil
 */
export class Movil implements Observer {
    /**
     * 
     * @param _marca - marca del movil
     * @param _numero - numero del movil
     */
    constructor(private _marca: string, private _numero: string) {
    }

    /**
     * getter de marca del movil
     */
    get marca() {
        return this._marca; 
    }

    /**
     * getter de numero del movil
     */
    get numero() {
        return this._numero; 
    }

    /**
     * 
     * @param observable - entidad que es observada para la notificacion
     * @returns 
     */
    update(observable: Observable): string | undefined {
        let cambio: string = ""; 
        if (observable instanceof Estacion) {
            switch(observable.estacionCambio) {
                case AvisoCambioEstacion.Temperatura:
                    cambio = `Soy el movil con numero ${this.numero}` + 
                    ` y marca ${this.marca} e informo que he recibido una notificacion` + 
                    ` de que la temperatura ha cambiado`; 
                    return cambio; 
                case AvisoCambioEstacion.Fenomenos:
                    cambio = `Soy el movil con numero ${this.numero}` + 
                    ` y marca ${this.marca} e informo que he recibido una notificacion` + 
                    ` de que los fenomenos meteorologicos han cambiado`; 
                    return cambio; 
            }   
        }
    }
}
import { Observable, Observer } from "./interfaces.js";
import { Estacion } from "./estacion.js";
import { AvisoCambioEstacion } from "./estacion.js";

/**
 * Clase observadora movil
 */
export class Panel implements Observer {
    /**
     * 
     * @param _modelo - modelo del panel
     */
    constructor(private _modelo: string) {
    }

    /**
     * getter de model del panel
     */
    get modelo() {
        return this._modelo; 
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
                    cambio = `Soy el panel de modelo ${this._modelo}` + 
                    ` e informo que la temperatura ha cambiado`; 
                    return cambio; 
                case AvisoCambioEstacion.Fenomenos:
                    cambio = `Soy el panel de modelo ${this._modelo}` + 
                    ` e informo que los fenomenos han cambiado`; 
                    return cambio; 
            }   
        }
    }
}
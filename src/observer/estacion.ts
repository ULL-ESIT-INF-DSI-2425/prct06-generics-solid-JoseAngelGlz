import { Observable, Observer } from "./interfaces.js";

/**
 * Enum de notifiacion de cambio en la estacion
 */
export enum AvisoCambioEstacion {'SinCambio','Temperatura','Fenomenos'}; 

/**
 * Clase que representa la estacion meteorologica
 */
export class Estacion implements Observable {
    /**
     * Metodos privados
     */
    private _observers: Observer [] = []; 
    private _temperatura: number; 
    private _fenomenos: string[]; 
    private _estacionCambio: AvisoCambioEstacion = AvisoCambioEstacion.SinCambio;

    /**
     * 
     * @param temperatura - temperatura de la estacion
     * @param fenomenos - fenomenos de la estacion
     */
    constructor (temperatura: number, fenomenos: string[]) {
        this._temperatura = temperatura; 
        this._fenomenos = fenomenos;         
    }

    /**
     * get de temperatura
     */
    get observers() {
        return this._observers; 
    }

    /**
     * get de temperatura
     */
    get temperatura() {
        return this._temperatura; 
    }

    /**
     * get de fenomenos
     */
    get fenomenos() {
        return this._fenomenos; 
    }

    /**
     * get de cambio en la estacion
     */
    get estacionCambio() {
        return this._estacionCambio;
    }

    /**
     * 
     * @param observer - observer a ser agregado
     */
    agregar(observer: Observer) {
        if (this.observers.includes(observer)) {
            throw new Error("El observador ya ha sido agregado"); 
        } else {
            this.observers.push(observer); 
        }
    }

    /**
     * 
     * @param observer - observer a ser quitado
     */
    quitar(observer: Observer) {
        const index = this.observers.indexOf(observer); 
        if (index === -1) {
            throw new Error("El observador no ha sido agregado"); 
        } else {
            this.observers.splice(index, 1); 
        }
    }

    /**
     * funcion notificar para los observadores
     */
    notificar() {
        this.observers.forEach((observer) => observer.update(this));
    }

    /**
     * 
     * @param temp - nueva temperatura de la estacion
     */
    modificarTemperatura(temp: number) {
        this._temperatura = temp; 
        this._estacionCambio = AvisoCambioEstacion.Temperatura; 
        this.notificar(); 
    }

    /**
     * 
     * @param fenom - lista de nuevos fenomenos de la estacion
     */
    modificarFenomenos(fenom: string[]) {
        this._fenomenos = []; 
        fenom.forEach((f) => {
            this._fenomenos.push(f); 
        }) ;
        this._estacionCambio = AvisoCambioEstacion.Fenomenos; 
        this.notificar(); 
    }
}
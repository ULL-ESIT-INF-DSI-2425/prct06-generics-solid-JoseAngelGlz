import { describe, expect, test } from "vitest";
import { Movil } from "../src/observer/movil.js";
import { Estacion, AvisoCambioEstacion } from "../src/observer/estacion.js";
import { Panel } from "../src/observer/panel.js";

describe("Test sobre el observador movil", () => {
    test("Inicializacion del movil", () => {
        const movil = new Movil("iPhone", "223"); 
        expect(movil.numero).toEqual("223") ;
        expect(movil.marca).toEqual("iPhone") ;
    }); 
    test("Funcion update", () => {
        const estacion = new Estacion(15, ["lluvia"]); 
        const movil = new Movil("iPhone", "223"); 
        const movil2 = new Movil("Samsung", "4235"); 
        estacion.agregar(movil); 
        estacion.agregar(movil2); 
        estacion.modificarTemperatura(30); 
        expect(movil.update(estacion)).toEqual(
        "Soy el movil con numero 223 y marca iPhone e informo que he recibido una notificacion de que la temperatura ha cambiado");
        estacion.modificarFenomenos(["sol","nubes"]);
        expect(movil2.update(estacion)).toEqual(
        "Soy el movil con numero 4235 y marca Samsung e informo que he recibido una notificacion de que los fenomenos meteorologicos han cambiado");    
    });     
}); 

describe("Test sobre el observador panel", () => {
  test("Inicializacion del panel", () => {
      const panel = new Panel("francia"); 
      expect(panel.modelo).toEqual("francia") ;
  }); 
  test("Funcion update", () => {
      const estacion = new Estacion(15, ["lluvia"]); 
      const panel = new Panel("francia"); 
      const panel2 = new Panel("alemania"); 
      estacion.agregar(panel); 
      estacion.agregar(panel2); 
      estacion.modificarTemperatura(30); 
      expect(panel.update(estacion)).toEqual(
      "Soy el panel de modelo francia e informo que la temperatura ha cambiado");
      estacion.modificarFenomenos(["sol","nubes"]);
      expect(panel2.update(estacion)).toEqual(
      "Soy el panel de modelo alemania e informo que los fenomenos han cambiado");
      });     
}); 

describe("Tests sobre la estacion meteorologica", () => {
  test("Inicializacion", () => {
      const estacion = new Estacion(20, ["soleado", "poco nublado"]);
      expect(estacion.estacionCambio).toEqual(AvisoCambioEstacion.SinCambio); 
      expect(estacion.temperatura).toEqual(20); 
      expect(estacion.fenomenos).toContain("soleado"); 
      estacion.modificarTemperatura(30); 
      expect(estacion.temperatura).toEqual(30); 
      estacion.modificarFenomenos(["truenos", "rayos"]); 
      expect(estacion.fenomenos).toEqual(["truenos", "rayos"]); 
  }); 
  test ("Observadores", () => {
      const movil = new Movil("Nokia","679666666"); 
      const estacion = new Estacion(20, ["soleado", "poco nublado"]);
      estacion.agregar(movil); 
      expect(estacion.observers.includes(movil));
      expect(() => {estacion.agregar(movil)}).toThrowError("El observador ya ha sido agregado");        estacion.quitar(movil); 
      expect(estacion.observers).toEqual([]);
      expect(() => {estacion.quitar(movil)}).toThrowError("El observador no ha sido agregado"); 
  }); 
});
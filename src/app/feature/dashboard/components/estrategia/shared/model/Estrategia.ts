export class Estrategia {

  nombre: string;
  descripcion: string;
  id: number;

  constructor(id: number, nombre: string, descripcion: string ) {
    this.id = id;
    this.descripcion = descripcion;
    this.nombre = nombre;
  }
}

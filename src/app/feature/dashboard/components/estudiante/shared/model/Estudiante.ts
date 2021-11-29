export class Estudiante {
  id: number;
  nombre: string;
  apellido: string;
  correo: string;
  repitente: boolean;

  constructor(nombre: string, apellido: string, correo: string, repitente: boolean, id: number) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.correo = correo;
    this.repitente = repitente;
    this.id = id;
  }
}

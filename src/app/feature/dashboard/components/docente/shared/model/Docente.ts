export class Docente {

  nombre: string;
  apellido: string;
  correo: string;
  contrasena: string;
  enabled: boolean;
  id: number;

  constructor(nombre: string, apellido: string, correo: string, contrasena: string, enabled: boolean, id: number) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.correo = correo;
    this.contrasena = contrasena;
    this.enabled = enabled;
    this.id = id;
  }
}

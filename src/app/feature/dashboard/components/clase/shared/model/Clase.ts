export class Clase {
  clase: number;
  materia: number;
  grupo: number;
  docente: number;
  estudiante: number;
  id: number;

  constructor(
    clase: number,
    materia: number,
    grupo: number,
    docente: number,
    estudiante: number,
    id: number
  ) {
    this.clase = clase;
    this.docente = docente;
    this.estudiante = estudiante;
    this.grupo = grupo;
    this.materia = materia;
    this.id = id;
  }
}

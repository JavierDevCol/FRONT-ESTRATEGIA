export class Clase {
  clase: string;
  materia: string;
  grupo: string;
  docente: string;
  estudiante: string;
  id: number;

  constructor(
    clase: string,
    materia: string,
    grupo: string,
    docente: string,
    estudiante: string,
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

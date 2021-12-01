export class AsignarEstrategias {
"clase": number;
  "estado": boolean;
  "estrategia": number;
  "id": number;

  constructor(
    clase: number,
    estado: boolean,
    estrategia: number,

    id: number
  ){
    this.clase = clase;
    this.estado = estado;
    this.estrategia = estrategia;
    this.id = id;
  }
}

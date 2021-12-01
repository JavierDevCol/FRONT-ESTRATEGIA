export class Token {
  mensaje: string;
  user: Map<string, string>;
  token: String;

  constructor(mensaje: string, user: Map<string, string>, token: String) {
    this.mensaje = mensaje;
    this.token = token;
    this.user = user;
  }
}

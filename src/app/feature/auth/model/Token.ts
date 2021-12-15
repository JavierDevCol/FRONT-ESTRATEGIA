import { User } from "./User";

export class Token {
  mensaje: string;
  user: User;
  token: string;

  constructor(mensaje: string, user: User, token: string) {
    this.mensaje = mensaje;
    this.token = token;
    this.user = user;
  }
}

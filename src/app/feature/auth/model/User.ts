import { Authorities } from "./Authorities";

export class User {
  username: string;
  authorities: Authorities[];
  enabled: boolean;

  constructor(username: string,
    authorities: Authorities[],
    enabled: boolean) {
    this.authorities = authorities;
    this.enabled = enabled;
    this.username = username;
  }
}

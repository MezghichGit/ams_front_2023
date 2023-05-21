import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  authenticate(username: any, password: any) {

    // Step 2 : charger credentials du backend
    if (username === "amine" && password === "1234") {
      sessionStorage.setItem('username', username)
      return true;
    } else {
      return false;
    }
  }

  isUserLoggedIn() {
    // retourne true si l'user est connecté sinon false
    let user = sessionStorage.getItem('username')
    //console.log(!(user === null))
    return (!(user === null) && (user==="amine"))
  }
  logOut() {
    sessionStorage.removeItem('username')
  }
}

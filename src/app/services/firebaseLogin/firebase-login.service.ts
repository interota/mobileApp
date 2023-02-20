import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class FirebaseLoginService {

  constructor(public angularFireAuthentication: AngularFireAuth) { }
  login(emailaddress, password) {
    return new Promise((resolve, reject) => {
        this.angularFireAuthentication
            .signInWithEmailAndPassword(emailaddress, password)
            .then(
                result => resolve(result),
                error => reject(error)
            );
    });
  }

  logout()
  {
    this.angularFireAuthentication.signOut();
  }

  async getCurrentUser()
  {
     return (await this.angularFireAuthentication.currentUser);
  }

}

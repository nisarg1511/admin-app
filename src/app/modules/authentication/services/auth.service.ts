import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import * as auth from 'firebase/auth';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userName = new Subject<any>();
  constructor(private auth: AngularFireAuth, private router: Router) { }
  async signIn(email: string, password: string) {
    return this.auth.signInWithEmailAndPassword(email, password);
  }
  async continueWithGoogle() {
    try {
      return await this.authLogin(new auth.GoogleAuthProvider());
    }
    catch (err) {
      throw err;
    }
  }

  async signUp(email: string, password: string) {
    return this.auth.createUserWithEmailAndPassword(email, password);
  }
  private authLogin(provider: any) {
    return this.auth.signInWithPopup(provider);
  }
}

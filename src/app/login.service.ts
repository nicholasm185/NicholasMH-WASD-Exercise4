import { Injectable } from '@angular/core';
import { Router} from '@angular/router';

import {auth} from 'firebase/app';
import {AngularFireAuth} from '@angular/fire/auth';

import {AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore';

import {Observable, of} from 'rxjs';
import {switchMap} from 'rxjs/operators';
import {User} from './user';
import {UserData} from './user-data';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  user$: Observable<User>;
  public credential;

  constructor(
    private afAuth: AngularFireAuth,
    public afs: AngularFirestore,
    private router: Router,
  ) {
    this.user$ = this.afAuth.authState.pipe(
      switchMap(user => {
        // Logged in
        if (user) {
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
        } else {
          // Logged out
          return of(null);
      }
    }));
  }

  async googleSignin() {
    const provider = new auth.GoogleAuthProvider();
    this.credential = await this.afAuth.auth.signInWithPopup(provider);
    this.afs.collection(`users`, ref => ref.where('uid', '==', this.credential.user.uid)).snapshotChanges().subscribe(res => {
      if (res.length > 0) {
        console.log('Match found.');
      } else {
        console.log('Does not exist.');
        this.initData(this.credential.user);
      }
    });
    return this.router.navigate(['/createCV/', this.credential.user.uid]);
  }

  async signOut() {
    await this.afAuth.auth.signOut();
    return this.router.navigate(['/']);
  }


  emailSignIn(email: string, password: string) {
    this.credential = this.afAuth.auth.signInWithEmailAndPassword(email, password).then(
      res => {
        // this.afs.collection(`users`, ref => ref.where('uid', '==', this.credential.user.uid)).snapshotChanges().subscribe(res => {
        //   if (res.length > 0) {
        //     console.log('Match found.');
        //   } else {
        //     console.log('Does not exist.');
        //     this.initData(this.credential.user);
        //   }
        // });
        console.log('Email login');
        // return this.router.navigate(['/createCV/', this.credential.user.uid]);
      }
    ).catch(err => {
      console.log('Something wrong:' , err.message);
    });
  }

  private initData(user) {
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);

    const data = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,

      fullName: '',
      gender: '',
      number: 0,
      shortDesc: '',
      longDesc: '',
      skill1: '',
      skill2: '',
      skill3: '',
      sk1p: 0,
      sk2p: 0,
      sk3p: 0,
      acheivement1: '',
      ac1desc: '',
      acheivement2: '',
      ac2desc: '',
      acheivement3: '',
      ac3desc: '',
      edu1: '',
      edu2: '',
      edu3: '',
      edu1desc: '',
      edu2desc: '',
      edu3desc: '',
    };

    return userRef.set(data, { merge: true });

  }

  public updateData(user) {
    const userRef: AngularFirestoreDocument<UserData> = this.afs.doc(`users/${this.credential.user.uid}`);

    const data = {
      fullName: user.fullName,
      gender: user.gender,
      number: user.number,
      shortDesc: user.shortDesc,
      longDesc: user.longDesc,
      skill1: user.skill1,
      skill2: user.skill2,
      skill3: user.skill3,
      sk1p: user.sk1p,
      sk2p: user.sk2p,
      sk3p: user.sk3p,
      acheivement1: user.acheivement1,
      ac1desc: user.ac1desc,
      acheivement2: user.acheivement2,
      ac2desc: user.ac2desc,
      acheivement3: user.acheivement3,
      ac3desc: user.ac3desc,
      edu1: user.edu1,
      edu2: user.edu2,
      edu3: user.edu3,
      edu1desc: user.edu1desc,
      edu2desc: user.edu2desc,
      edu3desc: user.edu3desc,
    };

    return userRef.set(data, { merge: true });
  }

}

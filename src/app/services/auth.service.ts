import { Injectable } from '@angular/core'
import { Auth, signInWithEmailAndPassword, getAuth, User } from '@angular/fire/auth'
import { createUserWithEmailAndPassword, UserCredential, signOut } from '@firebase/auth'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor (
    private readonly auth: Auth
  ) { }

  public async register (email: string, password: string): Promise<UserCredential> {
    return await createUserWithEmailAndPassword(this.auth, email, password)
  }

  public async login (email: string, password: string): Promise<UserCredential> {
    return await signInWithEmailAndPassword(this.auth, email, password)
  }

  public async getCurrent (): Promise<string | undefined> {
    const currentAuth = getAuth()
    return currentAuth.currentUser?.uid
  }

  public async logout (): Promise<void> {
    return await signOut(this.auth)
  }
}

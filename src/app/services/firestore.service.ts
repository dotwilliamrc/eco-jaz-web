import { Injectable } from '@angular/core'
import { Firestore, doc, setDoc, getDoc, docData, DocumentData, updateDoc, collectionData, DocumentSnapshot} from '@angular/fire/firestore'
import { collection } from '@firebase/firestore'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  constructor (
    private readonly firestore: Firestore
  ) { }

  public async register<T>(object: T, coll: string, id: string): Promise<void> {
    const objectRef = doc(this.firestore, coll, id)
    return await setDoc(objectRef, object)
  }

  public async getObject (coll: string, id: string): Promise<DocumentData | undefined> {
    const objectRef = doc(this.firestore, coll, id)
    const object: DocumentSnapshot<DocumentData> = await getDoc(objectRef)
    return object.data()
  }

  public getObjectRealtime<T>(coll: string, id: string): Observable<T[]> {
    const objectRef = collection(this.firestore, coll)
    return collectionData(objectRef, { idField: id }) as Observable<T[]>
  }

  public getDocRealtime<T>(coll: string, id: string): Observable<T> {
    const objectRef = doc(this.firestore, coll, id)
    return docData(objectRef, { idField: 'id' }) as Observable<T>
  }

  public async update<T>(object: T, coll: string, id: string): Promise<void> {
    const objectRef = doc(this.firestore, coll, id)
    return await updateDoc(objectRef, object)
  }
}

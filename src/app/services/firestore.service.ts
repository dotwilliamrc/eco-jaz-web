import { Injectable } from '@angular/core'
import { Firestore, doc, setDoc, getDoc, docData, DocumentData, updateDoc, collectionData, DocumentSnapshot, where, query, deleteDoc, getDocs, QuerySnapshot } from '@angular/fire/firestore'
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

  public async update<T>(object: T, coll: string, id: string): Promise<void> {
    const objectRef = doc(this.firestore, coll, id)
    return await updateDoc(objectRef, object)
  }

  public async delete (coll: string, id: string): Promise<void> {
    const docRef = doc(this.firestore, coll, id)
    return await deleteDoc(docRef)
  }

  public async getObject (coll: string, id: string): Promise<DocumentData | undefined> {
    const objectRef = doc(this.firestore, coll, id)
    const object: DocumentSnapshot<DocumentData> = await getDoc(objectRef)
    return object.data()
  }

  public async getObjectOfUser (coll: string, uid: string, camp: string): Promise<DocumentData | undefined> {
    const objectRef = collection(this.firestore, coll)
    const condition = where(camp, '==', uid)
    const q = query(objectRef, condition)
    let doc: DocumentData | undefined
    const object: QuerySnapshot<DocumentData> = await getDocs(q)
    object.forEach(docum => {
      doc = docum.data()
    })
    return doc
  }

  public getObjectRealtime<T>(coll: string, id: string): Observable<T[]> {
    const objectRef = collection(this.firestore, coll)
    return collectionData(objectRef, { idField: id }) as Observable<T[]>
  }

  public getObjectOfUserRealtime<T>(coll: string, uid: string, camp: string): Observable<T[]> {
    const objectRef = collection(this.firestore, coll)
    const condition = where(camp, '==', uid)
    const q = query(objectRef, condition)
    return collectionData(q, { idField: 'id' }) as Observable<T[]>
  }

  public getDocRealtime<T>(coll: string, id: string): Observable<T> {
    const objectRef = doc(this.firestore, coll, id)
    return docData(objectRef, { idField: 'id' }) as Observable<T>
  }
}

import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { collection, addDoc, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import Productos from '../models';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private database: AngularFirestore) { }


  createDoc(producto:Productos, path:string, id:string){
    const collection = this.database.collection(path);
    return collection.doc(id).set(producto)
  }

  getDoc(path:string, id:string){
    const collection = this.database.collection(path);
    return collection.doc(id).valueChanges();
  }

  delateDoc(path:string, id:string){
    const collection = this.database.collection(path);
    return collection.doc(id).delete();
  }

  updateDoc(producto:Productos, path:string, id:string){
    const collection = this.database.collection(path);
    return collection.doc(id).update(producto);
  }

  getId(){
    return this.database.createId();
  }

  getCollection<tipo>(path:string){
    const collection = this.database.collection<tipo>(path)
    return collection.valueChanges();
  }

}

import { Injectable } from '@angular/core';
import { Database } from '@angular/fire/database';
import {Firestore} from '@angular/fire/firestore'
import { Storage } from '@angular/fire/storage';
import { addDoc, collection, CollectionReference } from 'firebase/firestore';
import { Observable } from 'rxjs';
import { DatabaseReference, ref, set } from 'firebase/database';
import { FileItem } from '../models/file-items';


@Injectable({
  providedIn: 'root'
})
export class CargaImagenesService {

  private CARPETA_IMAGENES='carpeta_img';
  users$: Observable<any[]> = null as any;
  private userCollection:CollectionReference;
  private ref_Database:DatabaseReference;

  constructor(private db: Firestore, private db2:Database, private storage:Storage) {
    this.userCollection = collection(this.db, this.CARPETA_IMAGENES);
    this.ref_Database=ref(this.db2,this.CARPETA_IMAGENES);
    // this.users$ = collectionData(this.userCollection) as Observable<any[]>;
  }

  private guardarImagen(imagen:{nombre:string,url:string}){
    addDoc(this.userCollection,imagen).then(ref=>{
      console.log('Guardar Imagen-Firestore, referencia',ref);
    });
    set(this.ref_Database,imagen).then(ref2=>{
      console.log('Guardar Imagen-Database, referencia',ref2);
    }
    );
    
  }
  cargarImagenesFirebase(imagenes:FileItem[]){
    console.log('cargarImagesFirebase:',imagenes);
    this.guardarImagen({nombre:imagenes[0].nombreArchivo,url:imagenes[0].url})
  }
}

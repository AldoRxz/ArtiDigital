import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/services/firestore.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Producto from 'src/app/models';
import {Storage, ref, uploadBytes} from '@angular/fire/storage'


@Component({
  selector: 'app-set-product',
  templateUrl: './set-product.component.html',
  styleUrls: ['./set-product.component.scss']
})

export class SetProductComponent implements OnInit {


  formFirestore: FormGroup;

  productos: Producto[] = [];

  enableNewProducto = false;

  private path= 'Productos/';

  newImage!: '';

  constructor(
    private firestoreService: FirestoreService,
    private storage: Storage
  ) {
    this.formFirestore = new FormGroup({
      name: new FormControl(),
      categoria: new FormControl(),
      precioNormal: new FormControl(),
      precioReducido: new FormControl(),
      foto: new FormControl(),
      id: new FormControl(this.firestoreService.getId()),
      fecha: new FormControl(Date()),
    })
  }

  ngOnInit(): void {
    this.getProductos();
  }

  guardarProducto(){
    const id = this.firestoreService.getId();
    this.firestoreService.createDoc(this.formFirestore.value, this.path, this.formFirestore.value.id);
    this.formFirestore.reset();
  }

  getProductos(){
    this.firestoreService.getCollection<Producto>(this.path).subscribe( res => {
      this.productos = res;
    })
  }

  delateProducto(producto: Producto){
    this.firestoreService.delateDoc(this.path, producto.id)
  }

  editProduct(producto:Producto){
    this.firestoreService.updateDoc(this.formFirestore.value, this.path, producto.id)
  }

  nuevo(){
    this.enableNewProducto = true;
  }

  newImageUpload(event:any){
    const file = event.target.files[0];

    const imgRef = ref(this.storage, `images/${file.name}`);
  }
}

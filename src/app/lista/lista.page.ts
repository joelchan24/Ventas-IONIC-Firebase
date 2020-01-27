import { Component, OnInit } from '@angular/core';
import {IArticulo,IInmobiliaria,IMotor,ITecnologia}from '../interface';

import {productosServices} from '../servicios/producto.service'
import { snapshotChanges } from '@angular/fire/database';
@Component({
  selector: 'app-lista',
  templateUrl: './lista.page.html',
  styleUrls: ['./lista.page.scss'],
})
export class ListaPage implements OnInit {
  articulos:(IArticulo|IMotor|IInmobiliaria|ITecnologia)[]=[]

  
  constructor(private _ProductosServices:productosServices) { 
    
  }
//funcion de la vista que se ejecuta antes de mostrar la vista html
  ngOnInit() {
   
    //obtener todos los datos de firebase 
    let ref=this._ProductosServices.getArticulos();
    //recorremos todos los articulos de firebase
    ref.once("value",snapshot=>{
      snapshot.forEach(child=>{
        //llenamos nuestro array que muestra los items en el lista.page.html
        this.articulos.push( child.val());
      })
    })
    
  }

}

import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import {IArticulo,IInmobiliaria,IMotor,ITecnologia}from '../interface'

import {productosServices} from '../servicios/producto.service'
@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.page.html',
  styleUrls: ['./detalles.page.scss'],
})
export class DetallesPage implements OnInit {
  articulos:(IArticulo|IMotor|IInmobiliaria|ITecnologia)[]=[];
  id:number;
  nombre:string;
  tipo:string;
  descripcion:string;
  constructor(private _activatedRouted:ActivatedRoute,private _productosServices :productosServices ) { }

  ngOnInit() {
     this.id= +this._activatedRouted.snapshot.paramMap.get('id');
    //var res=this._productosServices.getproductoDetalles(this.id);
    var res=this._productosServices.getArticulos();
    res.once("value",snapshot=>{
      snapshot.forEach(child=>{
        if(child.val().id==this.id){

          this.nombre=child.val().nombre;
          this.tipo=child.val().categoria;
          this.descripcion=child.val().descripcion;

          
        }
       // this.articulos.push( child.val());
      })
    })
    // this.nombre=res.nombre;
     //this.tipo=res.categoria;
    
 
    
  }

}

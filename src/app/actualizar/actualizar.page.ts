import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import {IArticulo,IInmobiliaria,IMotor,ITecnologia}from '../interface'

import {productosServices} from '../servicios/producto.service'

@Component({
  selector: 'app-actualizar',
  templateUrl: './actualizar.page.html',
  styleUrls: ['./actualizar.page.scss'],
})
export class ActualizarPage implements OnInit {
  articulos:(IArticulo|IMotor|IInmobiliaria|ITecnologia)[]=[];
  cat:string ="categorías";
  nombre:string;
  precio:number;
  descripcion:string;
  tipoM:string;
  anio:number;
  km:number;
  m2V:number;
  numbanios:number;
  numhabitaciones:number;
  localidad:string;
  Estado:string;
  oculto:boolean=true;
  categoria:string="";
  Tcolor:string="primary";
  showV:string="";
  id:number;
  constructor(private _activatedRouted:ActivatedRoute,private _productosServices :productosServices ) { }


  ngOnInit() {
    this.id= +this._activatedRouted.snapshot.paramMap.get('id');
    //var res=this._productosServices.getproductoDetalles(this.id);
    var res=this._productosServices.getArticulos();
    res.once("value",snapshot=>{
      snapshot.forEach(child=>{
        if(child.val().id==this.id){
          this.nombre=child.val().nombre;
          this.descripcion=child.val().descripcion;
          this.precio=child.val().precio;
          this.tipoM=child.val().categoria;
          this.anio=child.val().anio;
          this.km=child.val().km;
          this.m2V=child.val().m2V;
          this.numbanios=child.val().numbanios;
          this.numhabitaciones=child.val().numhabitaciones;
          this.localidad=child.val().localidad;
          this.Estado=child.val().Estado;
          this.categoria=child.val().categoria;
          
        }
       // this.articulos.push( child.val());
      })
    })
  }
     evento(event):void{
    this.showV=event.detail.value;
    if(this.showV=="Motor"){
     this.categoria="Motor";
    }else if(this.showV=="Inmobiliaria"){
      this.categoria="Inmobiliaria";
    }else if(this.showV=="Tecnologia"){
      this.categoria="Tecnología";
    }
    
      }
      GuardarArticulo() {
        this.id= +this._activatedRouted.snapshot.paramMap.get('id');
        console.log(this.categoria);
        console.log(this.id);
      
        if(this.categoria=="Motor")
        {
          
          
           
           let ref = this._productosServices.getArticulos();
           ref.orderByChild('id').equalTo(this.id.toString()).once("value", snapshot => {
           console.log(this.id);
           snapshot.forEach(child => {
           let clave = child.key;
           ref.child(clave).child('nombre').set(this.nombre);
           ref.child(clave).child('descripcion').set(this.descripcion);
           ref.child(clave).child('categoria').set(this.categoria);
           ref.child(clave).child('km').set(this.km);
           ref.child(clave).child('localidad').set(this.localidad);
           ref.child(clave).child('m2V').set(this.m2V);
           ref.child(clave).child('numbanios').set(this.numbanios);
           ref.child(clave).child('numhabitaciones').set(this.numhabitaciones);
           ref.child(clave).child('precio').set(this.precio);
           ref.child(clave).child('tipo').set(this.tipoM);
           ref.child(clave).child('Estado').set(this.Estado);

           
           })
           });
        }else if(this.categoria=="Inmobiliaria")
        {
         
            
              let ref = this._productosServices.getArticulos();
              ref.orderByChild('id').equalTo(this.id.toString()).once("value", snapshot => {
              
              snapshot.forEach(child => {
              let clave = child.key;
              ref.child(clave).child('nombre').set(this.nombre);
              ref.child(clave).child('descripcion').set(this.descripcion);
              ref.child(clave).child('categoria').set(this.categoria);
              ref.child(clave).child('km').set(this.km);
              ref.child(clave).child('localidad').set(this.localidad);
              ref.child(clave).child('m2V').set(this.m2V);
              ref.child(clave).child('numbanios').set(this.numbanios);
              ref.child(clave).child('numhabitaciones').set(this.numhabitaciones);
              ref.child(clave).child('precio').set(this.precio);
              ref.child(clave).child('tipo').set(this.tipoM);
              ref.child(clave).child('Estado').set(this.Estado);

              })
              });
             
        }else if(this.categoria=="Tecnología")
        {
         
           let ref = this._productosServices.getArticulos();
          
           ref.orderByChild('id').equalTo(this.id.toString()).once("value", snapshot => {
           
           snapshot.forEach(child => {
            
           let clave = child.key;
          
           ref.child(clave).child('nombre').set(this.nombre);
           ref.child(clave).child('descripcion').set(this.descripcion);
           ref.child(clave).child('categoria').set(this.categoria);
           ref.child(clave).child('km').set(this.km);
           ref.child(clave).child('localidad').set(this.localidad);
           ref.child(clave).child('m2V').set(this.m2V);
           ref.child(clave).child('numbanios').set(this.numbanios);
           ref.child(clave).child('numhabitaciones').set(this.numhabitaciones);
           ref.child(clave).child('precio').set(this.precio);
           ref.child(clave).child('tipo').set(this.tipoM);
           ref.child(clave).child('Estado').set(this.Estado);
           })
           });
           
        }
    
    //this.articulos.push(item);
    
    
    
    
    }
    

}

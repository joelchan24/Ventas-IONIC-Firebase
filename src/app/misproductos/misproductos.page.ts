import { Component, OnInit } from '@angular/core';
import {IArticulo,IInmobiliaria,IMotor,ITecnologia}from '../interface';
import {productosServices} from '../servicios/producto.service'

@Component({
  selector: 'app-misproductos',
  templateUrl: './misproductos.page.html',
  styleUrls: ['./misproductos.page.scss'],
})
export class MisproductosPage implements OnInit {
  articulos:(IArticulo|IMotor|IInmobiliaria|ITecnologia)[]=[]
  constructor(private _ProductosServices:productosServices) { }

  ngOnInit() {
     //obtener todos los datos de firebase 
     let ref=this._ProductosServices.getArticulos();
     //recorremos todos los articulos de firebase 
     //consulta a FireBase donde ordeno los productos por el campo Dproductos y  filtro popr su valor 12 simulando que es usuario logueado
     ref.orderByChild('Dproductos').equalTo(12).once("value",snapshot=>{
       snapshot.forEach(child=>{
         //llenamos nuestro array que muestra los items en el misproductos.page.html
        //push agregar datos a un array
         this.articulos.push( child.val());
       
       })
     })



  }
  //https://forum.ionicframework.com/t/how-to-handle-canel-and-ok-clicks-in-ion-select/48664
  onCancel(){
    
    let ref=this._ProductosServices.getArticulos();
    ref.orderByChild('Dproductos').equalTo(12).once("value",snapshot=>{
      snapshot.forEach(child=>{
        //llenamos nuestro array que muestra los items en el misproductos.page.html
       //push agregar datos a un array
        this.articulos.push( child.val());
      
      })
    })
  }
  //metodo de filtrado por categorias 
  evento(event):void{
    console.log(event.detail.value);
    this.articulos=[];
    //obtener todos los datos de firebase 
    let ref=this._ProductosServices.getArticulos();
    if(event.detail.value=="Motor"){
      //filtro de Motor
     ref.orderByChild('Dproductos').equalTo(12).once("value",snapshot=>{
      snapshot.forEach(child=>{
        //llenamos nuestro array que muestra los items en el lista.page.html
        if(child.val().categoria=='Motor')
        { 
        this.articulos.push( child.val());
        }
      })
    })
   
    }else if(event.detail.value=="Inmobiliaria"){
      //recorremos todos los articulos de firebase
      ref.orderByChild('Dproductos').equalTo(12).once("value",snapshot=>{
        snapshot.forEach(child=>{
          //filtro de Inmobiliaria
          if(child.val().categoria=='Inmobiliaria')
          { 
          this.articulos.push( child.val());
          }
        })
      })
    }else if(event.detail.value=="Tecnología"){
      
      //recorremos todos los articulos de firebase
      ref.orderByChild('Dproductos').equalTo(12).once("value",snapshot=>{
        snapshot.forEach(child=>{
          //filtro de Tecnología
          if(child.val().categoria=='Tecnología')
          { 
          this.articulos.push( child.val());
          }
        })
      })
    }else{
      ref.orderByChild('Dproductos').equalTo(12).once("value",snapshot=>{
        snapshot.forEach(child=>{
          //llenamos nuestro array que muestra los items en el misproductos.page.html
         //push agregar datos a un array
          this.articulos.push( child.val());
        
        })
      })
    }
    
      }
//metodo de eliminar un registro en la BD  de firebase
      Eliminar(id:string){
        //obtines los resgitros y seleccionas por id 
        let ref = this._ProductosServices.getArticulos();
        ref.orderByChild('id').equalTo(id).once("value", snapshot => {
     
        snapshot.forEach(child => {
        let clave = child.key;
        //metodo remove se encarga de eliminar el registro en firebase 
        ref.child(clave).remove();
        })
        });
      }
}

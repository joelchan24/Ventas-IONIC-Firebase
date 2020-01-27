import { Component } from '@angular/core';
import { Color } from '@ionic/core';
//import para utilizar toast
import { ToastController,ActionSheetController } from '@ionic/angular';
import { File } from '@ionic-native/file/ngx';
import { Camera, CameraOptions } from '@ionic-native/Camera/ngx';
// se importa el servicio donde se realiza el INSERT O GET ARTICULOS
import {productosServices} from '../servicios/producto.service'





import {IArticulo,IInmobiliaria,IMotor,ITecnologia}from '../interface'
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})


export class HomePage {
  
  croppedImagepath = "";
  isLoading = false;

  imagePickerOptions = {
    maximumImagesCount: 1,
    quality: 50
  };



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

//Defino el Array para mostrar un registro cuando inicie la Aplicación


   //variable toastController para llamar  y utilizar el toast https://ionicframework.com/docs/api/toast
  constructor(public toastController: ToastController,
    private camera: Camera,
    public actionSheetController: ActionSheetController,
    private file: File,
    private _productoservice:productosServices,
    
    ) {
  
   
  }
  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Item Agregado',
      duration: 1000,
      position:'bottom'
    });
    toast.present();
  }
  evento(event):void{
this.showV=event.detail.value;
if(this.showV=="M"){
 this.categoria="Motor";
}else if(this.showV=="I"){
  this.categoria="Inmobiliaria";
}else if(this.showV=="T"){
  this.categoria="Tecnología";
}

  }

/*
ARRAY SIMPLE 
{"ddd","ddd","ddd"}
JSON
[{nombre:"DDd",apellio:"apellido"}] */
  GuardarArticulo() {
    //PARA CREAR UN ID USANDO LOS DATOS DE FECHA SEGUNDOS,MILESEGUNDOS PARA CREAR UN ID UNICO
    var ahora = new Date();
    var milisegundos = ahora.getMilliseconds()+ahora.getTime()+ahora.getSeconds();
  
    if(this.categoria=="Motor")
    {
      let item:(IArticulo|IMotor|IInmobiliaria|ITecnologia)={
        id:milisegundos.toString(), 
        nombre: this.nombre,
        descripcion: this.descripcion,
        categoria:this.categoria,
        precio:this.precio,
        tipo:this.categoria,
        anio:this.anio,
        km:this.km,
        localidad:"",
        m2V:0,
        numbanios:0,
        numhabitaciones:0,
        Estado:"",
        Dproductos:12

       };
       // EJECUTA EL INSERT PASANDO EL ARRAY QUE SE CREO ARRIBA 
       this._productoservice.setArticulo(item);
       this.presentToast(); 
    }else if(this.categoria=="Inmobiliaria")
    {
     
        let item:(IArticulo|IMotor|IInmobiliaria|ITecnologia)={
          id:milisegundos.toString(), 
          nombre: this.nombre,
          descripcion: this.descripcion,
          categoria:this.categoria,
          precio:this.precio,
          tipo:this.categoria,
          anio:0,
          km:0,
          localidad:this.localidad,
          m2V:this.m2V,
          numbanios:this.numbanios,
          numhabitaciones:this.numhabitaciones,
          Estado:"",
          Dproductos:12
  
         };
          // EJECUTA EL INSERT PASANDO EL ARRAY QUE SE CREO ARRIBA 
         this._productoservice.setArticulo(item);
         this.presentToast();

    }else if(this.categoria=="Tecnología")
    {
      let item:(IArticulo|IMotor|IInmobiliaria|ITecnologia)={
        id:milisegundos.toString(), 
        nombre: this.nombre,
        descripcion: this.descripcion,
        categoria:this.categoria,
        precio:this.precio,
        tipo:this.categoria,
        anio:0,
        km:0,
        localidad:"",
        m2V:0,
        numbanios:0,
        numhabitaciones:0,
        Estado:this.Estado,
        Dproductos:12

       };
        // EJECUTA EL INSERT PASANDO EL ARRAY QUE SE CREO ARRIBA 
       this._productoservice.setArticulo(item);
       this.presentToast();
    }

//this.articulos.push(item);




}

}

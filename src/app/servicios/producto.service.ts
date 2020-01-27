import {Injectable} from '@angular/core';
import {IArticulo,IInmobiliaria,IMotor,ITecnologia}from '../interface';
//importa la conexión de firebase 
import {AngularFireDatabase, snapshotChanges} from '@angular/fire/database'

@Injectable()



export class productosServices{

    articulos:(IArticulo|IMotor|IInmobiliaria|ITecnologia)[]=[         ];
    //{id:1, nombre: 'KTM 450 EXC-F', descripcion: 'Moto todo terreno',categoria:'Motor',precio:10690,tipo:'',anio:0,km:680},
    //{id:2, nombre: 'Piso', descripcion: '4 Dormitorios y 1 cuarto de baño, situada a tres minutos del metro de Begoña. Vivienda de 66 metros cuadrados. Armario empotrado en dormitorio principal. Salón con acceso a terraza. Cocina amueblada. Ventanas de aluminio y puertas sapelly. Orientación suroeste. ',categoria:'Inmobiliaria',precio:190000,tipo:'',anio:0,km:0},
    //{id:3, nombre: 'Cascos NewSkill', descripcion: 'Cascos newskill kimera RBG 7.1 conexion USB , minijack, entrada sonido, microfono con cancelacion de ruido y controlador de volumen, muteo de micro.',categoria:'Tecnologia',precio:45,tipo:'',anio:0,km:0} ]
      

constructor(private _db:AngularFireDatabase){

}
// ARRAY DATOS https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array
//GUARDAR:inserta un nuevo articulo en firebase
setArticulo(articulos:(IArticulo|IMotor|IInmobiliaria|ITecnologia))
{
//se conecta a la BBDD articulos e inserta 
let ref=this._db.database.ref("Articulos");
//inserta 
//PUSH propiedad de los array/JSON que inserta un nuevo dato a array
ref.push(articulos);
}



/* getproductos():(IArticulo|IMotor|IInmobiliaria|ITecnologia)[]{
    return this.articulos;

} */
//LISTA:obtiene todo los articulos de firebase 
getArticulos():firebase.database.Reference{
    let ref=this._db.database.ref("Articulos");
    return ref;

}









}
export interface IArticulo{
    "id":String,
    "nombre":string,
    "descripcion":string,
    "categoria":string,
    "precio":number,
     "Dproductos":number, 
    
}

export interface IMotor extends IArticulo{
    "tipo":string,
    "anio":number,
    "km":number

}
export interface IInmobiliaria extends IArticulo{
    "m2V":number,
    "numbanios":number,
    "numhabitaciones":number,
    "localidad":string,

}
export interface ITecnologia extends IArticulo{
    "Estado":string,
   

}
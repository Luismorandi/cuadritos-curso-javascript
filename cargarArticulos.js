//VARIABLES GLOBLAES//


const formulario =  document.querySelector("#formulario");
const cargarProducto = document.querySelector("#botonAgregarProducto");
localStorage.getItem(`productos`) === null ? listaProductos = [{nombre: 'Cuadro 1', precioPrincipal:1500, precio: 1500, cantidad: 10, cantidadPrecio: 10, id: 0},{nombre: 'Cuadro 2', precioPrincipal:2500, precio: 2500, cantidad: 10, cantidadPrecio: 10, id: 1},{nombre: 'Cuadro 3', precioPrincipal:1000, precio: 1000, cantidad: 10, cantidadPrecio: 10, id: 2},{nombre: 'Cuadro 4',precioPrincipal:11500, precio: 11500, cantidad: 10, cantidadPrecio: 10, id: 3}]: listaProductos= JSON.parse(localStorage.getItem(`productos`));
let carritoCompras = []; // son los objetos que van a ser agregados al carritos desde los objetos del ecommerce (listaProductos)
localStorage.setItem(`productos`, JSON.stringify(listaProductos));
listaProductos = JSON.parse(localStorage.getItem(`productos`));
localStorage.getItem(`productosCarrito`) === null ? carritoCompras = [] : carritoCompras = JSON.parse(localStorage.getItem(`productosCarrito`));

carritoCompras.forEach(carritoCompras=> {
insertarCarrito(carritoCompras)

}); 


///CONSTRUCTOR DE OBJETOS////

document.body.onload = totalCarrito()
class Producto {
constructor(nombre,precioPrincipal, precio, cantidad, cantidadPrecio, id) {
    this.nombre = nombre;
    this.precioPrincipal = precioPrincipal;
    this.precio = precio;
    this.cantidad = cantidad;
    this.cantidadPrecio = cantidadPrecio;
    this.id =   id ;
}
} 



//funcion para agregar producto al ecommerce. Funcionaria para un supuesto empleado que quiera cargar los productos//

const agregarProducto = () => {
let nombre = document.getElementById("nombre").value   
let precioPrincipal = parseFloat(document.getElementById("precio").value);
let precio = precioPrincipal
let cantidad = parseInt(document.getElementById("cantidad").value);
let cantidadPrecio = cantidad;
let id =  listaProductos.length;
let prod = new Producto(nombre,precioPrincipal, precio, cantidad, cantidadPrecio, id);
guardarLocalStorageProductos(prod)
return prod;
}; 


///FUNCION ONCLICK PARA MENSAJES DE ALERTAS EN EL FORMULARIO DE LA CARGA DE PRODUCTOS // 

cargarProducto.onclick = (e) => {
if (nombre.value == 0) {

    e.preventDefault()
    swal("Tienes que ingresar el nombre del producto");
}

else if (precio.value == 0) {

  e.preventDefault()
  swal("Tienes que ingresar el precio del producto");
}

else if (cantidad.value == 0) {

   e.preventDefault()
   return swal("Tienes que ingresar las unidades que ingresaran al stock");
}
else {
    
    e.preventDefault();
    agregarProducto();

    swal("Excelente", `${nombre.value} fue agregado al stock de la tienda`, "success");

    document.getElementById("formulario").reset() 
    
}}


//FUNCION PARA IMPRIMIR EN LA SECCION DEL CARRITO ///
function  insertarCarrito (carritoCompras) {
tr= document.createElement("tr")
tr.setAttribute(`id`, `id.${carritoCompras.id}`)
tr.innerHTML = 

`<td>
<img src="/img/Cuadro1.PNG" width= 100>
</td>
<td>${carritoCompras.nombre}</td>
<td>$${carritoCompras.precio}</td>
<td>
<a href="#" class="borrar-platillo" onclick = eliminarCarrito1(${carritoCompras.id})> X </a>
</td> ` 
document.getElementById("thread").appendChild(tr);
}


//////////IMPRIME EL TOTAL DEL CARRITO EN LA SECCION CARRITO////////// 

function totalCarrito(){ 

    let totalCarritos = 0;
    totalCarritos = carritoCompras.reduce((acumulador, obj) => acumulador + obj.precio, 0 );
    let th = document.getElementById("thread2");
    th.innerHTML= `$${totalCarritos}`;
    localStorage.setItem(`totalCarrito`, JSON.stringify(totalCarritos));

    } ;



///////// FUNCION PARA ELIMINAR ARTICULOS DE LA SECCION CARRITOS Y LOS ELIMINA DEL ARRAY "carritoCompras" ///////


function eliminarCarrito1 (prodId){
let aidi= document.getElementById(`id.${prodId}`);
aidi.parentNode.removeChild(aidi);
let item= carritoCompras.find((obj) =>    prodId === obj.id);
let item5 = carritoCompras.indexOf(item);
carritoCompras.splice(item5, 1);
carritoCompras = localStorage.setItem(`productosCarrito`, JSON.stringify(carritoCompras));
carritoCompras= JSON.parse(localStorage.getItem(`productosCarrito`));
//luego de eliminarlo, hace otra vez la cuenta del total del carrito//
totalCarrito();
}

/* COMIENZO DE FUNCIONES PARA GUARDAR/ ACTUALIZAR CARRITO DE COMPRAS EN EL STORAGE */


//FUNCION PARA GUARDAR EL ARTICULO DE LOS ARTICULOS AL ARRAY CARRITOCOMPRAS AL STORAGE//

function guardarLocalStorage(producto){
carritoCompras= this.obtenerProductoLocasStorage();
carritoCompras.push(producto);
localStorage.setItem(`productosCarrito`, JSON.stringify(carritoCompras));

}

//FUNCION  PARA LEER EL LOCAL STORAGE PARA TENERLO ACTUALIZO EN LA FUNCION ANTERIOR//
function obtenerProductoLocasStorage(){
let productosLs;
localStorage.getItem(`productosCarrito`) === null ? productosLs = [] : productosLs= JSON.parse(localStorage.getItem(`productosCarrito`));

return  productosLs;
};

function guardarLocalStorageProductos(producto){
listaProductos.push(producto);
localStorage.setItem(`productos`, JSON.stringify(listaProductos));


}

//FUNCION PARA VACIAR EL CARRITO DE COMPRAS ///

function eliminarCarritoCompras(){
carritoCompras = []
localStorage.setItem(`productosCarrito`, JSON.stringify(carritoCompras));
}

/* FIN DE FUNCIONES PARA GUARDAR/ ACTUALIZAR CARRITO DE COMPRAS EN EL STORAGE */


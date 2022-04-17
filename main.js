///********** Seccion = agregar productos al ecommerce ***********/

//variables globales//
const formulario =  document.querySelector("#formulario");
const cargar = document.querySelector("#boton");
let nombre1= document.getElementById("nombre");
let precio1= document.getElementById("precio");
let cantidad1 = document.getElementById("cantidad");
let listaProductos = [];//Son los objetos que van a ser agregados en el eccomerce
let  carritoCompras = []; // son los objetos que van a ser agregados al carritos desde los objetos del ecommerce (listaProductos)

// constructor de objetos de cada articulo que se va a agregar al ecommerce

class Producto {
    constructor(nombre,precio, cantidad, id) {
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
        this.id =   id ;
    }
} 



//funcion para agregar producto al ecommerce. Funcionaria para un supuesto empleado que quiera cargar los productos

const agregarProducto = () => {
    let nombre = document.getElementById("nombre").value   
    let precio = parseFloat(document.getElementById("precio").value);
    let cantidad = parseInt(document.getElementById("cantidad").value)
    let id =  listaProductos.length;
    let prod = new Producto(nombre,precio, cantidad, id);
    listaProductos.push(prod);
    return prod;
}; 




 cargar.onclick = (e) => {
    if (nombre1.value == 0) {
        alert("Tienes que ingresar el nombre del producto")
    }

    else if (precio1.value == 0) {
        alert("Tienes que ingresar el precio del producto")
    }

    else if (cantidad.value == 0) {
        alert("Tienes que ingresar la cantidad que ingresará al stock")
    }
    else {
        
        e.preventDefault();
        agregarProducto();
        alert(`${nombre1.value} fue agregado al stock de la tienda. Gracias!`);
        document.getElementById("formulario").reset() 
    
    }
    } 


//lista de productos en el ecommerce. Arrays vacios  que van a ser agregados.


///********** Seccion = agregar productos al ecommerce ***********/

// funcion para agregar articulos del ecommerce (listaProductos) al carrito (carritoCompras). 
const agregarCarrito = () => {

    i = prompt("Cual articulo quieres agregar?");
    let a = listaProductos[i];
    carritoCompras.push(a);
    
    }; 

 
// esta variable es el total del precio de todo lo que esta dentro del carrito (carritoCompras)

function totalCarrito(){ 
let totalCarrito = 0
totalCarrito = carritoCompras.reduce((acumulador, obj) => acumulador + obj.precio, 0 )
return totalCarrito}
    


// funcion para "comprar". Lo que hace es dejar el carritoCompras en 0
/* function comprar(){
    if (carritoCompras[0].id == listaProductos[0].id){
    
        listaProductos[0].cantidad = listaProductos[0].cantidad - 1 }
  
    return   carritoCompras = []
    }; */



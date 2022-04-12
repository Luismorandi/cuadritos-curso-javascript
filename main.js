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
    let nombre = prompt("Nombre del producto");
    let precio = parseFloat(prompt("Cual es el precio?"));
    let cantidad = parseInt(prompt("Cuanto stocke hay?"));
    let id =  listaProductos.length;
    let prod = new Producto(nombre,precio, cantidad, id);
    listaProductos.push(prod);
    return prod;
}; 


//lista de productos en el ecommerce

let listaProductos = [];
let  carritoCompras = [];

// funcion para agregar articulos del ecommerce (listaProductos) al carrito (carritoCompras)
const agregarCarrito = () => {

    i = prompt("Cual articulo quieres agregar?");
    let a = listaProductos[i];
    carritoCompras.push(a);
    
    }; 

 
// esta variable es el total del precio de todos los carritos

let totalCarrito = carritoCompras.reduce((acumulador, obj) => (acumulador) + (obj.precio), 0); 

// funcion para "comprar". Lo que hace es dejar el carritoCompras en 0
function comprar(){
    if (carritoCompras[0].id == listaProductos[0].id){
    
        listaProductos[0].cantidad = listaProductos[0].cantidad - 1 }
  
    return   carritoCompras = []
    };




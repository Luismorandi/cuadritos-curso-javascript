///********** Seccion = agregar productos al ecommerce ***********/


//variables globales//
const formulario =  document.querySelector("#formulario");
const cargarProducto = document.querySelector("#botonAgregarProducto");
localStorage.getItem(`productos`) === null ? listaProductos = [{nombre: 'Cuadro 1', precio: 1500, cantidad: 10, id: 0},{nombre: 'Cuadro 2', precio: 2500, cantidad: 10, id: 1},{nombre: 'Cuadro 3', precio: 1000, cantidad: 10, id: 2},{nombre: 'Cuadro 4', precio: 11500, cantidad: 10, id: 3}]: listaProductos= JSON.parse(localStorage.getItem(`productos`));
let carritoCompras = []; // son los objetos que van a ser agregados al carritos desde los objetos del ecommerce (listaProductos)
localStorage.setItem(`productos`, JSON.stringify(listaProductos));
listaProductos = JSON.parse(localStorage.getItem(`productos`));
localStorage.getItem(`productosCarrito`) === null ? carritoCompras = [] : carritoCompras = JSON.parse(localStorage.getItem(`productosCarrito`));
localStorage.getItem(`totalCarrito`) === null ? totalCarritos = [] : totalCarritos = JSON.parse(localStorage.getItem(`totalCarrito`));


carritoCompras.forEach(carritoCompras=> {
    insertarCarrito(carritoCompras)

}); 

carritoCompras.forEach(carritoCompras=> {
    comprarCarrito(carritoCompras)

}); 

document.body.onload = totalCompra()
document.body.onload = totalCarrito()

function totalCompra(){ 

    let totalCarritos = 0;
    totalCarritos = carritoCompras.reduce((acumulador, obj) => acumulador + obj.precio, 0 );
    let th = document.getElementById("thread22");
    th.innerHTML= `$${totalCarritos}`;
    } ;
    



//Funcion asignada al boton cargar. Una vez la persona llene el formulario lo que hace es:
//Agrega producto al array listaProductos (agregarProducto). Hace un alert del producto agregado con exito y agrega HTML (agregarCard)para hacer cards del producto en HTML y asigna la funcion 
//para agregarloposteriormente al carrito de compras.



    
//imprimir productos agregados en el HTML




//funcion agregar al carrito: lo que hace es agregar al array carritoCompras + imprimir el articulo en el carrito del html. prodID seria el id que se le asigno anteriormente en el array = listaProductos[listaProductos.length -1 ].id


/// funcion parainsertar el articulo en el html para que se pueda ver en el carrito desplegable
function  insertarCarrito (carritoCompras) {
    tr= document.createElement("tr")
    tr.setAttribute(`id`, `id.${carritoCompras.id}`)
   tr.innerHTML = 

   `<td>
   <img src="../img/Cuadro1.PNG" width= 100>
   </td>
   <td>${carritoCompras.nombre}</td>
   <td>$${carritoCompras.precio}</td>
   <td>
   <a href="#" class="borrar-platillo" onclick = eliminarCarrito1(${carritoCompras.id})> X </a>
   </td> ` 
   document.getElementById("thread").appendChild(tr);
}

//elimina los carritos tanto del HTML como del array carritoCompras
function  comprarCarrito (carritoCompras) {
    tr= document.createElement("tr")
    tr.setAttribute(`id`, `id.${carritoCompras.id}`)
   tr.innerHTML = 

   `<td>
   <img src="../img/Cuadro1.PNG" width= 100>
   </td>
   <td>${carritoCompras.nombre}</td>
   <td>$${carritoCompras.precio}</td>
 ` 
   document.getElementById("thread3").appendChild(tr);
}

//Calcula el valor total del carrito de compras y lo imprime en el html



function totalCarrito(){ 

    let totalCarritos = 0;
    totalCarritos = carritoCompras.reduce((acumulador, obj) => acumulador + obj.precio, 0 );
    let th = document.getElementById("thread2");
    th.innerHTML= `$${totalCarritos}`;
    localStorage.setItem(`totalCarrito`, JSON.stringify(totalCarritos));

    } ;
    
//las funciones que vienen a continuacion las hice para los articulos que ya estan en el html por default. Por una mera demostracion del sitio las deje. Si fuera un sitio 
//podria luego agregarlas y dejarlas en el localStorage

//agregarCarrito1 hace lo mismo que  agregarCarrito1, solo que para los articulo ya en el HTML




function eliminarCarrito1 (prodId){
    let aidi= document.getElementById(`id.${prodId}`);
    aidi.parentNode.removeChild(aidi);
    let item= carritoCompras.find((obj) =>    prodId === obj.id);
    let item5 = carritoCompras.indexOf(item);
    carritoCompras.splice(item5, 1);
    carritoCompras = localStorage.setItem(`productosCarrito`, JSON.stringify(carritoCompras));
    carritoCompras= JSON.parse(localStorage.getItem(`productosCarrito`));

    totalCarrito();
    }

//local y session storage

 function guardarLocalStorage(producto){
    carritoCompras= this.obtenerProductoLocasStorage();
    carritoCompras.push(producto);
    localStorage.setItem(`productosCarrito`, JSON.stringify(carritoCompras));

}

function obtenerProductoLocasStorage(){
    let productosLs;
    localStorage.getItem(`productosCarrito`) === null ? productosLs = [] : productosLs= JSON.parse(localStorage.getItem(`productosCarrito`));

    return  productosLs;
};

function guardarLocalStorageProductos(producto){
    listaProductos.push(producto);
    localStorage.setItem(`productos`, JSON.stringify(listaProductos));


}

function eliminarCarritoCompras(){
    carritoCompras = []
    localStorage.setItem(`productosCarrito`, JSON.stringify(carritoCompras));
    location.reload();

    }


   function  comprarCarritoCompras ()
   {
        carritoCompras = [];
        localStorage.setItem(`productosCarrito`, JSON.stringify(carritoCompras));
        Swal.fire(
            '¡Exelente!',
            'Tu compra fue realizada con exito. Te llegará el Link de pago a tu mail',
            'success'
          ).then((result)=> {
              if(result = true){
                location.reload()}

          
          })}

let th1 = document.getElementById("thread234")

const totalBitcoin = () => {
    
    fetch("https://blockchain.info/ticker")
    .then(response => response.json())
    .then((result) => {
        
        th1.innerHTML +=`
        <td> ${(JSON.parse(localStorage.getItem(`totalCarrito`)) /(result.ARS.last) )}<td/>`

    }
    
    )}

    document.body.onload = totalBitcoin()
    

/* FUNCION PRINCIPAL DEL JS AGREGA AL ARRAY "CARRITOCOMPRAS"  */


const agregarCarrito = (prodId) =>{

        let item= listaProductos.find((producto) =>  producto.id   === prodId )
        carritoCompras.push(item)
        //alert("Articulo agregado al carrito")
        totalCarrito()
        insertarCarrito(item)
        this.guardarLocalStorage(item)
        Toastify({
          text: "Articulo agregado al carrito",
            duration: 3000,
            style: {
                background: "#ff523b",
              }
            }).showToast();
    
    
};
//variables globales//
const formulario =  document.querySelector("#formulario");
const cargarProducto = document.querySelector("#botonAgregarProducto");
localStorage.getItem(`productos`) === null ? listaProductos = [{nombre: 'Cuadro 1', precioPrincipal:1500, precio: 1500, cantidad: 10, cantidadPrecio: 10, id: 0},{nombre: 'Cuadro 2', precioPrincipal:2500, precio: 2500, cantidad: 10, cantidadPrecio: 10, id: 1},{nombre: 'Cuadro 3', precioPrincipal:1000, precio: 1000, cantidad: 10, cantidadPrecio: 10, id: 2},{nombre: 'Cuadro 4',precioPrincipal:11500, precio: 11500, cantidad: 10, cantidadPrecio: 10, id: 3}]: listaProductos= JSON.parse(localStorage.getItem(`productos`));
let carritoCompras = []; // son los objetos que van a ser agregados al carritos desde los objetos del ecommerce (listaProductos)
localStorage.setItem(`productos`, JSON.stringify(listaProductos));
listaProductos = JSON.parse(localStorage.getItem(`productos`));
localStorage.getItem(`productosCarrito`) === null ? carritoCompras = [] : carritoCompras = JSON.parse(localStorage.getItem(`productosCarrito`));
 
listaProductos.forEach(listaProductos=> {
    agregarCard(listaProductos)

}); 

carritoCompras.forEach(carritoCompras=> {
    insertarCarrito(carritoCompras)

}); 



document.body.onload = totalCarrito()


/*------------------------- COMIENZO DE FUNCION PARA IMPRIMIR LA LISTA DE PRODUCTOS DEL ARRAY "LISTAPRODUCTOS" EN LA SECTION DE LOS ARTICULOS------------------------- */

//  ESTA FUNCION IMPRIME LOS CARD EN LA SECCION PRODUCTOS///////
function agregarCard (obj){
    let nodo = document.createElement("div");
    nodo.className = "content";
    nodo.innerHTML = `   
    <img src="./img/Cuadro1.PNG" alt="" class="imagenesEco">
    <h3 class="ache3">${obj.nombre}</h3>
    <span class="cantidadUnidades"> Está subiendo su valor <b> ¡Quedan solo ${obj.cantidad} unidades!</b> &#128293;</span>
    <h6 class="ache6" >  <del>$${obj.precioPrincipal} </del>| $${obj.precio}  </h6>
    <button class="buy-4 buttonCard" id= "${obj.id}" onclick="agregarCarrito(${obj.id})" > Agregar carrito</button>`
    document.getElementById("sectionProductos").appendChild(nodo);

}

/* -------------------INSERTAR  ARTICULO AL CARRITO ------------------ */

///////IMPRIME ARTICULOS AGREGADOS AL CARRITO/////////
function  insertarCarrito (carritoCompras) {
    tr= document.createElement("tr")
    tr.setAttribute(`id`, `id.${carritoCompras.id}`)
   tr.innerHTML = 

   `<td>
   <img src="./img/Cuadro1.PNG" width= 100>
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



/*----------------------FIN DE FUNCION PARA IMPRIMIR LA LISTA DE PRODUCTOS DEL ARRAY "LISTAPRODUCTOS" EN LA SECTION DE LOS ARTICULOS -------------------------------- */

/* --------------------------------------------COMIENZO DE LA FUNCION PARA BUSCAR CUADROS EN TODOS LOS ARTICULOS ---------------------------------- */

////VARIABLES PARA IDENTIFICAR IDs///////

const buscador = document.getElementById("buscador");
const botonBuscador = document.getElementById("botonBuscador")
const sectionProductos = document.getElementById("sectionProductos")
const sectionProductos1 = document.getElementById("sectionProductos1")

////Funcion que permite buscar////
const searchFilter = () => {

  let textoBuscador = buscador.value.toLowerCase()
  ///si el buscador esta en 0 se agregan todos los cards/////
  if(textoBuscador === "" ){
      sectionProductos.innerHTML = `
      `
    listaProductos.forEach(listaProductos=> {
        agregarCard(listaProductos)
    
    }); 

  }
  
  ////si no esta en 0, busca por cada letra escrita el nombre del cuadro en vivo/////
  else{ 
    sectionProductos.innerHTML = `
          
    `
  for (let producto of listaProductos){
      let nombre1= producto.nombre.toLowerCase();
      if(nombre1.indexOf(textoBuscador) !== -1){

        agregarCard(producto)

      }
      ///////si lo que escribes no coincide con los nombres de la lista de productos, imprime el H1/////////


  }
}
}
///// addEventListener para cada la funcion buscador. La primera es el boton de buscar. La segunda, por cada letra escrita activa la funcion searchFilter/////////////////////
botonBuscador.addEventListener("click", searchFilter);
buscador.addEventListener("keyup", searchFilter)

/*---------------------------- FIN DE LA FUNCION PARA BUSCAR ARTICULOS EN LOS PRODUCTOS --------------------------------*/


/*--------------------------------- COMIENZO DE FUNCIONES PARA GUARDAR/ ACTUALIZAR CARRITO DE COMPRAS EN EL STORAGE------------------------------ */


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


/* FIN DE FUNCIONES PARA GUARDAR/ ACTUALIZAR CARRITO DE COMPRAS EN EL STORAGE */
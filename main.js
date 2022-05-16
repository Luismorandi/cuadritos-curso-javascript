///********** Seccion = agregar productos al ecommerce ***********/


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
localStorage.getItem(`productos`) === null ? listaProductos = [{nombre: 'Cuadro 1', precio: 1500, cantidad: 10, id: 0},{nombre: 'Cuadro 2', precio: 2500, cantidad: 10, id: 1},{nombre: 'Cuadro 3', precio: 1000, cantidad: 10, id: 2},{nombre: 'Cuadro 4', precio: 11500, cantidad: 10, id: 3}]: listaProductos= JSON.parse(localStorage.getItem(`productos`));
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

//Funcion asignada al boton cargar. Una vez la persona llene el formulario lo que hace es:
//Agrega producto al array listaProductos (agregarProducto). Hace un alert del producto agregado con exito y agrega HTML (agregarCard)para hacer cards del producto en HTML y asigna la funcion 
//para agregarloposteriormente al carrito de compras.



    
//imprimir productos agregados en el HTML

 function agregarCard (obj){
    let nodo = document.createElement("div");
    nodo.className = "content";
    nodo.innerHTML = `   <img src="./img/Cuadro1.PNG" alt="" class="imagenesEco">
    <h3 class="ache3">${obj.nombre}</h3>
    <p class="parrafoEco"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio dolores eaque dolor ex, neque culpa nobis perferendis mollitia consequuntur animi tenetur corrupti at recusandae, fuga voluptas magni ipsum laudantium est?</p>
    <h6 class="ache6">${obj.precio}</h6>
    <button class="buy-4 buttonCard" id= "${obj.id}" onclick="agregarCarrito(${obj.id})" > Agregar carrito</button>`
    document.getElementById("sectionProductos").appendChild(nodo);

}


//funcion agregar al carrito: lo que hace es agregar al array carritoCompras + imprimir el articulo en el carrito del html. prodID seria el id que se le asigno anteriormente en el array = listaProductos[listaProductos.length -1 ].id


/// funcion parainsertar el articulo en el html para que se pueda ver en el carrito desplegable
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

//elimina los carritos tanto del HTML como del array carritoCompras
function  comprarCarrito (carritoCompras) {
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




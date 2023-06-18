let menu;

class Articulos {
   constructor(marca, modelo, forma, precio, stock) {
      this.marca = marca;
      this.modelo = modelo;
      this.precio = precio;
      this.stock = stock;
   }

   visualizar() {
      alert("Marca: " + this.marca + " | Modelo: " + this.modelo + " | Precio: " + this.precio + " | Stock: " + this.stock);
   }

   agregaStock(cant) {
      this.stock = this.stock + cant;
      alert("Usted agregó: " + cant + " artículos. Total: " + this.stock);
   }

   restaStock(cant) {
      if (this.stock == 0) {
         alert("No posee este artículo para modificar el stock");
      } else if (cant > this.stock) {
         alert("No posee stock suficiente para vender esta cantidad de artículos. Cantidad de artículos: " + this.stock);
      } else {
         this.stock = this.stock - cant;
      }
   }
}

let articulosEnStock = [];


//FUNCIONES ------------------------------------------------------------------------------------
function abmArticulos() {
   do {
      menu = parseInt(prompt("Ingrese una opción: \n1-Agregar Artículo Nuevo \n2-Agregar Stock \n3-Ver artículos \n4-Volver al menú principal"));
      switch (menu) {
         case 1:
            const marca = prompt("Ingrese una marca");
            const modelo = prompt("Ingrese el modelo");
            const precio = parseInt(prompt("Ingrese el precio"));
            const stock = parseInt(prompt("Ingrese la cantidad en stock"));

            const articulo = new Articulos(marca, modelo, precio, stock);
            articulosEnStock.push(articulo);

            break;

         case 2:
            const buscarMarca = prompt("Ingrese la marca");
            const buscarModelo = prompt("Ingrese el modelo");
            const sumarStock = parseInt(prompt("Ingrese cantidad a incorporar al stock"));

            const buscarArticulo = articulosEnStock.find((el) => {
               return (el.marca == buscarMarca && el.modelo == buscarModelo)
            });

            if (buscarArticulo) {
               buscarArticulo.agregaStock(sumarStock);
            } else {
               alert("No se encontró el artículo que desea incorporar");
            }

            break;

         case 3:
            for (let i = 0; i < articulosEnStock.length; i++) {
               console.log(articulosEnStock[i].visualizar());
            }

            break;

         case 4:
            break;

         default:
            alert("Ingrese una opción válida");
            break;
      }

   } while (menu != 4);
}


function ventas() {
   let salir = "N";

   do {
      const buscarMarca = prompt("Ingrese una marca");
      const buscarModelo = prompt("Ingrese el modelo");
      const cantidad = parseInt(prompt("Ingrese cantidad a vender"));

      const buscarArticulo = articulosEnStock.find((el) => {
         return (el.marca == buscarMarca && el.modelo == buscarModelo)
      });


// ME QUEDE ACA ----------------------------------------------------------------------------------------------- 


      if (buscarArticulo) {
         alert("Está a punto de vender: " + cantidad + " de: " + buscarArticulo.marca + " " + buscarArticulo.modelo + "\nPrecio Unitario: " + buscarArticulo.precio + " | Precio Total: " + cantidad * buscarArticulo.precio);
      } else {
         alert("No se encontró el artículo que desea incorporar");
      }







   } while (salir != "N")



}



//MENU DE OPCIONES ------------------------------------------------------------------------------

do {
   menu = parseInt(prompt("Ingrese una opción: \n1-Módulo Articulos \n2-Módulo de ventas \n3-Salir"));
   switch (menu) {
      case 1:
         abmArticulos();
         break;
      case 2:
         ventas();
         break;
      case 3:
         alert("¡Hasta pronto!");
         break;
      default:
         alert("Ingrese una opción válida");
         break;

   }

} while (menu != 3);
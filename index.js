let menu;
let articulosEnStock = [];

class Articulos {
   constructor(marca, modelo, precio, stock) {
      this.marca = marca;
      this.modelo = modelo;
      this.precio = precio;
      this.stock = stock;
   }

   visualizar() {
      alert("Marca: " + this.marca + "\nModelo: " + this.modelo + "\nPrecio: " + this.precio + "\nStock: " + this.stock);
   }

   agregaStock(cant) {
      this.stock = this.stock + cant;
      alert("Usted agregó: " + cant + " artículos. Total: " + this.stock);
   }

   restaStock(cant) {
      if (this.stock == 0) {
         alert("No posee stock disponible del artículo: " + this.marca + " " + this.modelo);
      } else if (cant > this.stock) {
         alert("No posee stock suficiente para vender esta cantidad de artículos. Cantidad de artículos: " + this.stock);
      } else {
         this.stock = this.stock - cant;
      }
   }
}

//FUNCIONES #####################################################################################################################
function abmArticulos() {
   do {
      menu = parseInt(prompt("Ingrese una opción: \n(1) Agregar Artículo Nuevo \n(2) Agregar Stock \n(3) Ver artículos \n(4) Volver al menú principal"));
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
               articulosEnStock[i].visualizar();
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

      if (buscarArticulo) {
         alert("Está a punto de vender: " + cantidad + " de: " + buscarArticulo.marca + " " + buscarArticulo.modelo + "\nPrecio Unitario: " + buscarArticulo.precio + " | Precio Total: " + cantidad * buscarArticulo.precio);
         buscarArticulo.restaStock(cantidad);
         buscarArticulo.visualizar();
      } else {
         alert("No se encontró el artículo que desea vender");
      }

   } while (salir != "N")
}



//MENU DE OPCIONES ############################################################################################################
do {
   menu = parseInt(prompt("Ingrese una opción: \n(1) Módulo Articulos \n(2) Módulo de Ventas \n(3) Salir"));
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
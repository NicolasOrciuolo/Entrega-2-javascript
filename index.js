let menu;

do{
   menu = parseInt(prompt("Ingrese una opción: 1-ABM Articulos | 2-Módulo de ventas | 3-Salir"));
   switch (menu){
      case 1:
         console.log(1);
         break;
      case 2:
         console.log(2);
         break;
      case 3:
         alert("¡Hasta pronto!");
         break;
      default:
         alert("Ingrese una opción válida");
         break;

   }

}while (menu != 3);
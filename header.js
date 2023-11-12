const itemDesplegableVentas = document.querySelector('#item-desplegable-ventas');
const itemDesplegableInventario = document.querySelector('#item-desplegable-inventario');
const menuDesplegableVentas = document.querySelector('.menu-desplegable-ventas');
const menuDesplegableInventario = document.querySelector('.menu-desplegable-inventario');

let menuDesplegadoVentas = false;
let menuDesplegadoInventario = false;

itemDesplegableVentas.addEventListener('click', () => {
    if(menuDesplegadoVentas){
        menuDesplegableVentas.style.opacity = 0;
        menuDesplegableVentas.style.top = 0;
        menuDesplegableVentas.style.left = 0;
        menuDesplegadoVentas = false;
    } else {
        menuDesplegableVentas.style.opacity = 1;
        menuDesplegableVentas.style.top = '155px';
        menuDesplegableVentas.style.left = '85px';
        menuDesplegadoVentas = true;
    }
});

itemDesplegableInventario.addEventListener('click', () => {
    if(menuDesplegadoInventario){
        menuDesplegableInventario.style.opacity = 0;
        menuDesplegableInventario.style.top = 0;
        menuDesplegableInventario.style.left = 0;
        menuDesplegadoInventario = false;
    } else {
        menuDesplegableInventario.style.opacity = 1;
        menuDesplegableInventario.style.top = '155px';
        menuDesplegableInventario.style.left = '160px';
        menuDesplegadoInventario = true;
    }
});
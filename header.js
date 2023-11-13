const itemDesplegableVentas = document.querySelector('#item-desplegable-ventas');
const itemDesplegableInventario = document.querySelector('#item-desplegable-inventario');
const menuDesplegableVentas = document.querySelector('.menu-desplegable-ventas');
const menuDesplegableInventario = document.querySelector('.menu-desplegable-inventario');

let menuDesplegadoVentas = false;
let menuDesplegadoInventario = false;

window.addEventListener('click', () => {
    if(menuDesplegadoInventario === true || menuDesplegadoVentas === true){
        cerrarMenuInventario();
        cerrarMenuVentas();
    }
})

itemDesplegableVentas.addEventListener('click', (e) => {
    e.stopPropagation();
    if(menuDesplegadoVentas){
        cerrarMenuVentas();
    } else {
        if(menuDesplegadoInventario){
            cerrarMenuInventario();
        }
        desplegarMenuVentas();
    }
});

itemDesplegableInventario.addEventListener('click', (e) => {
    e.stopPropagation()
    if(menuDesplegadoInventario){
        cerrarMenuInventario();
    } else {
        if(menuDesplegadoVentas){
            cerrarMenuVentas();
        }
        desplegarMenuInventario();
    }
});


const desplegarMenuVentas = () => {
    menuDesplegableVentas.style.opacity = 1;
    menuDesplegableVentas.style.top = '5px';
    menuDesplegableVentas.style.left = '85px';
    menuDesplegadoVentas = true;
};

const cerrarMenuVentas = () => {
    menuDesplegableVentas.style.opacity = 0;
    menuDesplegableVentas.style.top = '-500px';
    menuDesplegableVentas.style.left = '-500px';
    menuDesplegadoVentas = false;
}

const desplegarMenuInventario = () => {
    menuDesplegableInventario.style.opacity = 1;
    menuDesplegableInventario.style.top = '-55px';
    menuDesplegableInventario.style.left = '160px';
    menuDesplegadoInventario = true;
};

const cerrarMenuInventario = () => {
    menuDesplegableInventario.style.opacity = 0;
    menuDesplegableInventario.style.top = '-500px';
    menuDesplegableInventario.style.left = '-500px';
    menuDesplegadoInventario = false;
}
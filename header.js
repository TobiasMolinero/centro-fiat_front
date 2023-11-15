const itemDesplegableInventario = document.querySelector("#item-desplegable-inventario");

const menuDesplegableInventario = document.querySelector(".menu-desplegable-inventario");

let menuDesplegadoInventario = false;

window.addEventListener("click", () => {
  if (menuDesplegadoInventario === true || menuDesplegadoVentas === true) {
    cerrarMenuInventario();
    cerrarMenuVentas();
  }
});

itemDesplegableInventario.addEventListener("click", (e) => {
  e.stopPropagation();
  if (menuDesplegadoInventario) {
    cerrarMenuInventario();
  } else {
    desplegarMenuInventario();
  }
});

const desplegarMenuInventario = () => {
  menuDesplegableInventario.style.opacity = 1;
  menuDesplegableInventario.style.top = "5px";
  menuDesplegableInventario.style.left = "150px";
  menuDesplegadoInventario = true;
};

const cerrarMenuInventario = () => {
  menuDesplegableInventario.style.opacity = 0;
  menuDesplegableInventario.style.top = "-500px";
  menuDesplegableInventario.style.left = "-500px";
  menuDesplegadoInventario = false;
};
function changeStyle() {
    document.querySelector(".contenedor-modal").style.visibility = "visible";
    document.querySelector(".contenedor-modal").style.opacity = "1";
    document.querySelector(".modal-navegacontenedor").style.transform="translateY(0%)";
}

function cerrarVentana() {
    document.querySelector(".contenedor-modal").style.visibility = "hidden";
    document.querySelector(".contenedor-modal").style.opacity = "0";
    document.querySelector(".modal-navegacontenedor").style.transform="translateY(-200%)";
}


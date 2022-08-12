function changeStyle() {
    document.querySelector(".contenedor-modal").style.visibility = "visible";
    document.querySelector(".contenedor-modal").style.opacity = "1";
    document.querySelector(".modal-navegacontenedor").style.transform="translateY(0%)";
}

function cerrarVentana() {
    document.querySelector(".modal-navegacontenedor").style.transform="translateY(-200%)";

    document.querySelector(".contenedor-modal").style.opacity = "0";
    document.querySelector(".contenedor-modal").style.transition = "4s";
    document.querySelector(".contenedor-modal").style.visibility = "hidden";
}


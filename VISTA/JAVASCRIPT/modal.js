let cerrar = document.querySelectorAll(".close")[0];
let abrir = document.querySelectorAll(".hamburger")[0];
let modal = document.querySelectorAll(".modal-close")[0];
let modalC = document.querySelectorAll(".contenedor-modal")[0];

abrir.addEventListener("click", function (e){
    e.preventDefault();
    modalC.style.visibility="visible";
    modalC.style.opacity="1";
    modal.style.translateY="0%";
})
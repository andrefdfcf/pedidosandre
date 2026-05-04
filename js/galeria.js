//array de imágenes
const imagenes = [
    "../img/i1.jpeg",
    "../img/i2.jpeg",
    "../img/i3.jpeg",
    "../img/i1.jpeg",
    "../img/i2.jpeg",
    "../img/i3.jpeg"  
];
//Obtenemos el contenedor donde se insertarán las imágenes
const galeria = document.getElementById("galeria");
//Obtenemos los elementso del modal
const modal = document.getElementById("modal");
const cerrar = document.getElementById("cerrar");
const imgModal = document.getElementById("img-modal");
//Generamos la galería
imagenes.forEach(src =>{
    const img = document.createElement("img"); //Crea un elemento img por cada imágen
    img.src = src; //Asignamos la ruta de la imágen
    img.classList.add("imginfo"); //Aplica estilos a la imagen
    //Cuando el usuario hace click en la imagen
    img.addEventListener("click",()=>{
        modal.style.display="flex"; //Muestre el modal
        imgModal.src = src; //Cambia la imagen del modal por la seleccionada
    });
    galeria.appendChild(img); //Inserta la imágen en el contenedor

});
//Cerrar el modal con la "x"
cerrar.onclick = ()=>{
    modal.style.display = "none"; //Oculta el modal
    
}

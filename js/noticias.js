//Carga de noticias
//Petición al archivo json
fetch("data/noticias.json")
.then(res => res.json()) //Coonvierte la respuesta del servidor en un objeto javascript
.then(data =>{ //Crea el array de objetos data (cada objeto = una noticia)
    const contenedor = document.getElementById("noticias"); //Selecciona el contenedor html donde se insertarán las moticias
    //Recorrido del array data
    data.forEach(n => { //"n" representa cada objeto "noticia" dentro del arreglo
        const div = document.createElement("div"); //Crea dinámicamente un ddocumento div dentro de tu html
        div.classList.add("card"); //Le agrega la clase css al div para applicar estilos
        /*Insertamos contenido html dentro del div*/
        div.innerHTML = `
            <h3>${n.titulo}</h3> <!-- titulo de la noticia -->
            <p>${n.autor}</p> <!-- autor de la noticia -->
            <small>${n.fecha}</small> <!-- fecha de la noticia -->
            <p>${n.contenido}</p> <!-- descripción de la noticia -->
        `;
        contenedor.appendChild(div); // Inserta el div dentro del contenedor de noticias 
    });    
});
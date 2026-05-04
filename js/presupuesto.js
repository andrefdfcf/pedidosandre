//Cálculo de presupuesto
//Obtenemos los elementos del formulario a calcular
const producto = document.getElementById("producto");
const plazo = document.getElementById("plazo");
const extra = document.querySelectorAll(".extra");
const total = document.getElementById("total");
function resetValores(){
    extra.forEach(e => (e.checked = false));
}
function calcularTotal(){
    let precioBase = parseInt(producto.value);
    if(precioBase == 0){
        total.value = "";
        return;
    }
    let sumaExtra = 0;
    extra.forEach(extras => {
        if(extras.checked){
            sumaExtra+= parseInt(extras.value);
        }
    });
    let subTotal = precioBase + sumaExtra;
    let dias = parseInt(plazo.value);
    let descuento = 0;
    
    if(dias>20){
        descuento = 0.10; //Descuento del 10%
    } else if(dias>10){
        descuento = 0.07; //Descuento del 7%
    } else if(dias>5){
        descuento = 0.05; //Descuento del 5%
    }
    let totalFinal = subTotal * (1-descuento);
    total.value = "€ " + totalFinal.toFixed(2);
}
//Eventos automáticos
producto.addEventListener("change",()=>{resetValores();calcularTotal();});
plazo.addEventListener("input",calcularTotal);
plazo.addEventListener("change",calcularTotal);
extra.forEach(e => e.addEventListener("change",calcularTotal));
//Validaciones
document.getElementById("formulario").addEventListener("submit",function(e){
    //Obtenemos los elementos del formulario a validar
    const nombre = document.getElementById("nombre");
    const apellido = document.getElementById("apellidos");
    const telefono = document.getElementById("telefono");
    const correo = document.getElementById("correo");

    //Generamos las expresiones regulares
    const regexNombre = /^[A-Za-zÁÉÍÓÚáéíóúñÑ]{1,15}$/;
    const regexApellido = /^[A-Za-zÁÉÍÓÚáéíóúñÑ]{1,40}$/;
    const regexTelefono = /^[0-9]{9}$/;
    const regexCorreo = /^[^@]+@[^@]+\.[A-Za-z]{2,}$/;

    if (!regexNombre.test(nombre.value)){
        alert("Nombre inválido. Solo podrá contener letras y una longitud máxima de 15 caractéres");
        nombre.focus();
        e.preventDefault();
        return;
    }
    if (!regexApellido.test(apellido.value)){
        alert("Apellido inválido. Solo podrá contener letras y una longitud máxima de 40 caractéres");
        apellido.focus();
        e.preventDefault();
        return;
    }
    if (!regexTelefono.test(telefono.value)){
        alert("Teléfono inválido. Solo podrá contener números y una longitud de 9 caractéres");
        telefono.focus();
        e.preventDefault();
        return;
    }
    if (!regexCorreo.test(correo.value)){
        alert("Correo inválido.");
        correo.focus();
        e.preventDefault();
        return; 
    }
})
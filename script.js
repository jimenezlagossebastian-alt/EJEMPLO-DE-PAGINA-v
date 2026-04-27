/*mensaje de bienvenida*/
alert("Bienvenido a mi portafolio bro");

/* cambiar texto*/
function cambiarTexto() {
    document.getElementById("texto").innerText =
    "Ahora estoy aprendiendo JavaScript y haciendo mi página interactiva.";
}

/* mostrar / ocultar */
function mostrarOcultar() {
    let elemento = document.getElementById("extra");

    if (elemento.style.display === "none") {
        elemento.style.display = "block";
    } else {
        elemento.style.display = "none";
    }
}

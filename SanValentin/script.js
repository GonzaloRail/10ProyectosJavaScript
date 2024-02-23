document.addEventListener("DOMContentLoaded", function() {
    var botonSi = document.getElementById("botonSi");
    var botonNo = document.getElementById("botonNo");
    var aceptacion = document.getElementById("textoAceptacion");

    // Agrega un event listener al botón "Sí"
    botonSi.addEventListener("click", function() {
        aceptacion.innerHTML="Yeeeeeeeeeeeeeeeeee, Te quiero mucho";
    });

    // Agrega un event listener al botón "No"
    botonNo.addEventListener("mouseenter", function() {
        // Cambia la posición del botón y deshabilítalo
        botonNo.style.position = "absolute";
        botonNo.style.left = Math.floor(Math.random() * window.innerWidth) + "px";
        botonNo.style.top = Math.floor(Math.random() * window.innerHeight) + "px";
        botonNo.disabled = true;
    });
});

window.onload = function () {
  document
    .getElementById("AbrirVentana")
    .addEventListener("click", abrirVentana, false);
  document
    .getElementById("CerrarVentana")
    .addEventListener("click", cerrarVentana, false);
  document
    .getElementById("Color")
    .addEventListener("change", cambiarColor, false);
};
let ventana = "";
function abrirVentana() {
  ventana = window.open(
    "",
    "Ventana",
    "width=500,height=500,top=10px left=100px,resizable=yes",
  );
  ventana.document.write("<h1>Esta es una ventana emergente</h1>");
  ventana.document.write(
    `<h1>bienvenido a mi web ${document.getElementById("Nombre").value}</h1>`,
  );
  ventana.document.write(
    `<h1>bienvenido a mi web ${document.getElementById("Apellido").value}</h1>`,
  );
  ventana.document.write(
    `<h1>bienvenido a mi web ${document.getElementById("Edad").value}</h1>`,
  );
}
function cerrarVentana() {
  ventana.close();
}
function cambiarColor() {
  let color = document.getElementById("Color").value;
  ventana.document.body.style.backgroundColor = color;
}

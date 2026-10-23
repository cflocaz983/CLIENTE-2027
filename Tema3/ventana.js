window.onload = function () {
  document
    .getElementById("AbrirVentana")
    .addEventListener("click", abrirVentana, false);
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
}

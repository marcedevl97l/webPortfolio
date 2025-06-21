function restaurarIdiomaOriginal() {
  const elementosTraducir = document.querySelectorAll("[data-translate]");

  elementosTraducir.forEach((elemento) => {
    const clave = elemento.getAttribute("data-translate");
    // Aquí asumimos que originalmente el texto en español está en el contenido del elemento
    elemento.textContent = clave;
  });
}

document.addEventListener("DOMContentLoaded", function () {
  const menuLink = document.querySelector('a[href="#menu"]');
  const disciplinasLink = document.querySelector('a[href="#disciplinas"]');
  const disciplinas = document.querySelectorAll(".disciplina");
  const tituloDisciplinas = document.querySelector(".disciplinas h1");
  const navBar = document.querySelector("header");
  const experienciaLink = document.querySelector('a[href="#experiencia"]');
  const ciberfisicoLink = document.querySelector('a[href="#ciberfisico"]');
  const logicaLink = document.querySelector('a[href="#logica"]');
  const raciocinioLink = document.querySelector('a[href="#raciocinio"]');
  const filosofiaLink = document.querySelector('a[href="#filosofia"]');

  menuLink.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector("#menu").scrollIntoView({
      behavior: "smooth",
    });
  });

  disciplinasLink.addEventListener("click", function (e) {
    e.preventDefault();

    const navBarHeight = navBar.offsetHeight;
    const targetPosition =
      tituloDisciplinas.getBoundingClientRect().top +
      window.pageYOffset -
      navBarHeight;
    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });
  });

  disciplinas.forEach((disciplina) => {
    const page = disciplina.dataset.page;
    disciplina.addEventListener("click", function () {
      window.location.href = page;
    });
  });

  experienciaLink.addEventListener("click", function (e) {
    e.preventDefault();
    window.location.href = "../html/experiencia.html";
  });

  ciberfisicoLink.addEventListener("click", function (e) {
    e.preventDefault();
    window.location.href = "../html/ciberfisico.html";
  });

  logicaLink.addEventListener("click", function (e) {
    e.preventDefault();
    window.location.href = "../html/logica.html";
  });

  raciocinioLink.addEventListener("click", function (e) {
    e.preventDefault();
    window.location.href = "../html/raciocinio.html";
  });

  filosofiaLink.addEventListener("click", function (e) {
    e.preventDefault();
    window.location.href = "../html/filosofia.html";
  });
});

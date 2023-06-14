document.addEventListener("DOMContentLoaded", function () {
  const menuLink = document.querySelector('a[href="#menu"]');
  const disciplinasLink = document.querySelector('a[href="#disciplinas"]');

  menuLink.addEventListener("click", function (e) {
    e.preventDefault();

    window.location.href = "../index.html#menu";
  });

  disciplinasLink.addEventListener("click", function (e) {
    e.preventDefault();

    window.location.href = "../index.html#disciplinas";
  });
});

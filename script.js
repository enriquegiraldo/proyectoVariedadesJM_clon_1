$(function() {
  $(".btn").click(function() {
    $(".form-signin").toggleClass("form-signin-left");
    $(".form-signup").toggleClass("form-signup-left");
    $(".frame").toggleClass("frame-long");
    $(".signup-inactive").toggleClass("signup-active");
    $(".signin-active").toggleClass("signin-inactive");
    $(".forgot").toggleClass("forgot-left");
    $(this).removeClass("idle").addClass("active");
  });
});

$(function() {
  $(".btn-signup").click(function() {
    $(".nav").toggleClass("nav-up");
    $(".form-signup-left").toggleClass("form-signup-down");
    $(".success").toggleClass("success-left");
    $(".frame").toggleClass("frame-short");
  });
});

$(function() {
  $(".btn-signin").click(function() {
    $(".btn-animate").toggleClass("btn-animate-grow");
    $(".welcome").toggleClass("welcome-left");
    $(".cover-photo").toggleClass("cover-photo-down");
    $(".frame").toggleClass("frame-short");
    $(".profile-photo").toggleClass("profile-photo-down");
    $(".btn-goback").toggleClass("btn-goback-up");
    $(".forgot").toggleClass("forgot-fade");
  });
});
document.querySelectorAll('.photo-item').forEach(item => {
  const img = item.querySelector('.cover');
  const name = item.querySelector('.photo-name');
  name.textContent = img.getAttribute('data-name');
});
document.addEventListener('DOMContentLoaded', function() {
  fetch('tienda.json')
      .then(response => response.json())
      .then(data => {
          const template = Handlebars.compile(document.body.innerHTML);
          document.body.innerHTML = template(data);
          
          // Inicializa los coverflow y otros scripts aquí
          inicializarCoverflow();
      });
});

function inicializarCoverflow() {
  // Tu código para inicializar los coverflow
}
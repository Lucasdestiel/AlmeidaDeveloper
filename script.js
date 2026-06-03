// MENU MOBILE
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("active");
});

// FECHAR MENU AO CLICAR
document.querySelectorAll(".menu a").forEach(link => {
  link.addEventListener("click", () => {
    menu.classList.remove("active");
  });
});

// HEADER SHADOW
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

  if(window.scrollY > 50){
    header.style.background = "rgba(0,0,0,.7)";
    header.style.boxShadow = "0 0 20px rgba(0,0,0,.3)";
  }

  else{
    header.style.background = "rgba(0,0,0,.2)";
    header.style.boxShadow = "none";
  }

});

// ANIMAÇÃO AO ROLAR
const cards = document.querySelectorAll(
  ".about-card, .skill-card, .project-card, .timeline-item"
);

const observer = new IntersectionObserver((entries) => {

  entries.forEach(entry => {

    if(entry.isIntersecting){
      entry.target.classList.add("show");
    }

  });

});

cards.forEach(card => {

  card.classList.add("hidden");
  observer.observe(card);

});

// WHATSAPP BUTTON
const phoneNumber = "5541984283761";
// coloque seu número aqui

const message =
  "Olá! Vi seu portfólio e gostaria de conversar.";

const whatsappLink =
  `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

document
  .getElementById("whatsapp-btn")
  .setAttribute("href", whatsappLink);
// Script para o botão hambúrguer (X) e menu mobile
const hamburgerBtn = document.getElementById("hamburger-btn");
const mobileMenu = document.getElementById("mobile-menu");
const bars = [
  document.getElementById("bar1"),
  document.getElementById("bar2"),
  document.getElementById("bar3"),
];

hamburgerBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("translate-x-full");
  // Animação do X
  bars[0].classList.toggle("rotate-45");
  bars[0].classList.toggle("translate-y-[9px]");
  bars[1].classList.toggle("opacity-0");
  bars[2].classList.toggle("-rotate-45");
  bars[2].classList.toggle("-translate-y-[9px]");
  document.body.classList.toggle("overflow-hidden");
});

// FUNCIONALIDADE DO SUBMENU MOBILE (PRODUTO)
const productBtn = document.getElementById("mobile-product-btn");
const productList = document.getElementById("mobile-product-list");
const mobileArrow = document.getElementById("mobile-arrow");

productBtn.addEventListener("click", () => {
  // Alterna a altura para criar efeito de slide
  if (productList.style.maxHeight) {
    productList.style.maxHeight = null;
    mobileArrow.classList.remove("rotate-180");
  } else {
    productList.style.maxHeight = productList.scrollHeight + "px";
    mobileArrow.classList.add("rotate-180");
  }
});

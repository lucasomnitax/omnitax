// Animação de fade in
document.addEventListener("DOMContentLoaded", () => {
  const observerOptions = {
    threshold: 0.15, // Dispara quando 15% da seção estiver visível
  };

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Ativa a animação
        entry.target.classList.add("active");

        // Para de observar: a animação não reseta ao subir o scroll
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Seleciona todos os elementos que possuem uma das duas classes
  const elementsToReveal = document.querySelectorAll(".reveal, .reveal-right");

  elementsToReveal.forEach((el) => {
    revealObserver.observe(el);
  });
});

// Animação de contagem
const animateCounters = () => {
  const counters = document.querySelectorAll(".counter");
  const speed = 150; // Quanto menor, mais rápido

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const counter = entry.target;
          const target = parseFloat(counter.getAttribute("data-target"));
          const suffix = counter.getAttribute("data-suffix") || "";

          let count = 0;
          const increment = target / speed;

          const updateCount = () => {
            count += increment;
            if (count < target) {
              // Formata para 1 casa decimal se for o 5.5k
              counter.innerText =
                target % 1 !== 0
                  ? count.toFixed(1) + suffix
                  : Math.ceil(count) + suffix;
              setTimeout(updateCount, 20);
            } else {
              counter.innerText = target + suffix;
            }
          };

          updateCount();
          observer.unobserve(counter); // Roda a animação apenas uma vez
        }
      });
    },
    { threshold: 0.5 }
  ); // Inicia quando 50% do elemento estiver visível

  counters.forEach((counter) => observer.observe(counter));
};

document.addEventListener("DOMContentLoaded", animateCounters);

// Faq cards
const cards = document.querySelectorAll(".faq-card");

cards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    // Remove a classe ativa de todos
    cards.forEach((c) => c.classList.remove("active-card"));
    // Adiciona ao card atual
    card.classList.add("active-card");
  });
});

// Navbar transparente
window.addEventListener("scroll", function () {
  const nav = document.getElementById("main-nav");
  if (window.scrollY > 50) {
    // Se rolar mais de 50px
    nav.style.backgroundColor = "#19213A";
    nav.classList.add("py-3", "shadow-lg"); // Deixa a nav um pouco mais fina ao rolar
  } else {
    nav.style.backgroundColor = "rgba(0, 0, 0, 0.0)"; // Volta ao bg-black/20
    nav.classList.add("py-5");
    nav.classList.remove("py-3", "shadow-lg");
  }
});

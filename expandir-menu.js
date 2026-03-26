// Seleção dos Botões
const productBtn = document.getElementById("product-menu-btn");
const devBtn = document.getElementById("dev-menu-btn");
const whyUsBtn = document.getElementById("why-us-btn");

// Seleção dos Menus
const productMega = document.getElementById("mega-menu");
const devMega = document.getElementById("dev-mega-menu");
const whyUsMega = document.getElementById("why-us-mega-menu");

// Seleção das Setas
const productArrow = document.getElementById("product-arrow");
const devArrow = document.getElementById("dev-arrow");
const whyUsArrow = document.getElementById("why-arrow");

// FUNÇÃO PARA RESETAR ESTILOS (VOLTAR PARA BRANCO)
function resetBtnStyles() {
  const btns = [productBtn, devBtn, whyUsBtn];
  const arrows = [productArrow, devArrow, whyUsArrow];

  btns.forEach((btn, index) => {
    if (btn) {
      btn.classList.remove("text-[#e85938]");
      btn.classList.add("text-[#19213A]");
      if (arrows[index]) {
        arrows[index].classList.remove("text-[#e85938]", "rotate-180");
        arrows[index].classList.add("text-[#19213A]");
      }
    }
  });
}

// FUNÇÃO PARA FECHAR TODOS OS MENUS
function closeAllMenus() {
  const allMenus = [productMega, devMega, whyUsMega];

  resetBtnStyles();

  allMenus.forEach((menu) => {
    if (menu && !menu.classList.contains("hidden")) {
      menu.classList.remove("opacity-100", "translate-y-0");
      menu.classList.add("opacity-0", "translate-y-2");

      setTimeout(() => {
        menu.classList.add("hidden");
      }, 300);
    }
  });
}

// FUNÇÃO PARA ABRIR UM MENU ESPECÍFICO
function openMenu(menu, btn, arrow) {
  closeAllMenus();

  menu.classList.remove("hidden");

  // AJUSTE: Só aplica o LARANJA se não for o botão "Por que nós?"
  if (btn) {
    btn.classList.remove("text-[#19213A]");
    btn.classList.add("text-[#e85938]");
    arrow.classList.remove("text-[#19213A]");
    arrow.classList.add("text-[#e85938]");
  }

  // A seta ainda deve girar para todos
  arrow.classList.add("rotate-180");

  setTimeout(() => {
    menu.classList.remove("opacity-0", "translate-y-2");
    menu.classList.add("opacity-100", "translate-y-0");
  }, 10);
}

// EVENTOS DE CLIQUE
productBtn?.addEventListener("click", (e) => {
  e.stopPropagation();
  const isHidden = productMega.classList.contains("hidden");
  isHidden ? openMenu(productMega, productBtn, productArrow) : closeAllMenus();
});

devBtn?.addEventListener("click", (e) => {
  e.stopPropagation();
  const isHidden = devMega.classList.contains("hidden");
  isHidden ? openMenu(devMega, devBtn, devArrow) : closeAllMenus();
});

whyUsBtn?.addEventListener("click", (e) => {
  e.stopPropagation();
  const isHidden = whyUsMega.classList.contains("hidden");
  isHidden ? openMenu(whyUsMega, whyUsBtn, whyUsArrow) : closeAllMenus();
});

// FECHAR AO CLICAR FORA
document.addEventListener("click", (e) => {
  const menus = [productMega, devMega, whyUsMega];
  const btns = [productBtn, devBtn, whyUsBtn];

  const clickedInsideMenu = menus.some((menu) => menu?.contains(e.target));
  const clickedBtn = btns.some((btn) => btn?.contains(e.target));

  if (!clickedInsideMenu && !clickedBtn) {
    closeAllMenus();
  }
});

// --- MOBILE ACORDEÃO (ABRIR UM FECHA O OUTRO) ---
function setupMobileAccordion(btnId, listId, arrowId) {
  const btn = document.getElementById(btnId);
  const list = document.getElementById(listId);
  const arrow = document.getElementById(arrowId);

  const allLists = [
    "mobile-product-list",
    "mobile-dev-list",
    "mobile-why-list",
  ];
  const allArrows = [
    "mobile-product-arrow",
    "mobile-dev-arrow",
    "mobile-why-arrow",
  ];

  if (btn && list) {
    btn.addEventListener("click", () => {
      const isOpen = list.style.maxHeight;

      // Fecha todos os outros primeiro
      allLists.forEach((id, index) => {
        document.getElementById(id).style.maxHeight = null;
        document
          .getElementById(allArrows[index])
          .classList.remove("rotate-180");
      });

      // Se não estava aberto, abre o clicado
      if (!isOpen) {
        list.style.maxHeight = list.scrollHeight + "px";
        arrow.classList.add("rotate-180");
      }
    });
  }
}

// Inicializa os submenus mobile
setupMobileAccordion(
  "mobile-product-btn",
  "mobile-product-list",
  "mobile-product-arrow",
);
setupMobileAccordion("mobile-dev-btn", "mobile-dev-list", "mobile-dev-arrow");
setupMobileAccordion("mobile-why-btn", "mobile-why-list", "mobile-why-arrow");

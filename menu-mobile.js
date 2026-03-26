// Aguarda o carregamento para garantir que os IDs existam
window.onload = () => {
  const hamburgerBtn = document.getElementById("hamburger-btn");
  const closeMobileBtn = document.getElementById("close-mobile-menu");
  const mobileMenu = document.getElementById("mobile-menu");
  const bars = [
    document.getElementById("bar1"),
    document.getElementById("bar2"),
    document.getElementById("bar3"),
  ];

  // 1. ABRIR / FECHAR MENU PRINCIPAL
  const toggleMenu = () => {
    mobileMenu.classList.toggle("translate-x-full");
    bars[0].classList.toggle("rotate-45");
    bars[0].classList.toggle("translate-y-[9px]");
    bars[1].classList.toggle("opacity-0");
    bars[2].classList.toggle("-rotate-45");
    bars[2].classList.toggle("-translate-y-[9px]");
    document.body.classList.toggle("overflow-hidden");
  };

  if (hamburgerBtn) hamburgerBtn.onclick = toggleMenu;
  if (closeMobileBtn) closeMobileBtn.onclick = toggleMenu;

  // 2. LÓGICA DO ACORDEÃO (FECHA UM AO ABRIR OUTRO)
  const submenus = [
    {
      btn: "mobile-product-btn",
      list: "mobile-product-list",
      arrow: "mobile-product-arrow",
    },
    {
      btn: "mobile-dev-btn",
      list: "mobile-dev-list",
      arrow: "mobile-dev-arrow",
    },
    {
      btn: "mobile-why-btn",
      list: "mobile-why-list",
      arrow: "mobile-why-arrow",
    },
  ];

  submenus.forEach((item) => {
    const btn = document.getElementById(item.btn);
    const list = document.getElementById(item.list);
    const arrow = document.getElementById(item.arrow);

    if (btn && list) {
      btn.onclick = (e) => {
        e.preventDefault();
        const isOpen =
          list.style.maxHeight !== "" && list.style.maxHeight !== "0px";

        // FECHA TODOS
        submenus.forEach((s) => {
          const l = document.getElementById(s.list);
          const a = document.getElementById(s.arrow);
          if (l) {
            l.style.maxHeight = "0px";
            l.style.opacity = "0";
          }
          if (a) a.style.transform = "rotate(0deg)";
        });

        // ABRE O CLICADO (se estava fechado)
        if (!isOpen) {
          list.style.maxHeight = list.scrollHeight + "px";
          list.style.opacity = "1";
          if (arrow) arrow.style.transform = "rotate(180deg)";
        }
      };
    }
  });
};

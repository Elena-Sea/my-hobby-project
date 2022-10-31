(() => {
  const menuBtnRef = document.querySelector("[data-menu-button]");
  const mobileMenuRef = document.querySelector("[data-menu]");

  menuBtnRef.addEventListener("click", () => {
    console.log('click in btn');
    const expanded =
      menuBtnRef.getAttribute("aria-expanded") === "true" || false;

    menuBtnRef.classList.toggle("is-open");
    menuBtnRef.setAttribute("aria-expanded", !expanded);

    mobileMenuRef.classList.toggle("is-open");
  });
})();

(() => {
  const regBtnRef = document.querySelector("[data-reg-button]");
  const regFormRef = document.querySelector("[data-reg-form]");

  regBtnRef.addEventListener("click", () => {
    console.log('click in btn');
    const expanded =
      regBtnRef.getAttribute("aria-expanded") === "true" || false;

    regBtnRef.classList.toggle("is-open");
    regBtnRef.setAttribute("aria-expanded", !expanded);

    regFormRef.classList.toggle("is-open");
  });
})();

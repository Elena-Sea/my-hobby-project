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

// scroll-to-top

let btnToTop = document.querySelector("#scroll-to-top");

// When the user scrolls down 200px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    btnToTop.style.display = "block";
  } else {
    btnToTop.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

btnToTop.addEventListener("click", topFunction);
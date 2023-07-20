import { showEmptyCart } from "./menus/cart.js";

const header = document.querySelector("header");
const logoDiv = header.querySelector("#logo");
const cartToggle = document.querySelector("#cart-toggle");
const cartMenu = document.querySelector("#cart-menu");
addLogo();
addCartToggle();
function addLogo() {
  logoDiv.style.backgroundImage = "url('../images/logo/logo-color.png')";
}

function addCartToggle() {
  const icon = '<i class="bi bi-cart-fill"></i>';
  cartToggle.innerHTML = icon;
}
export let isMenuHidden = true;

export function showMenu() {
  isMenuHidden = false;
  cartMenu.style.setProperty("--cart", "94%");
  showEmptyCart();
}
cartToggle.addEventListener("click", () => {
  toggleCartMenu();
});

function toggleCartMenu() {
  if (isMenuHidden) {
    showMenu();
  } else {
    isMenuHidden = true;
    cartMenu.style.setProperty("--cart", "-0.5");
  }
}

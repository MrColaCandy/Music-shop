import { showMenu } from "../header.js";

const addedProducts = [];
let cartBody = document.querySelector("#cart-body");

export const add = ({ product }) => {
  cartBody.innerHTML = "";

  addedProducts.push(product);
  showMenu();
  addedProducts.forEach((p) => {
    const cartItemElement = document.createElement("div");

    cartItemElement.className = "cart-item";
    cartItemElement.innerHTML = `
    <img src=${p.image}>
    <p>${p.name}</p>
    <p>${p.price}</p>
    <button class="delete-btn"  >
        <i data-btn="delete" data-id=${p.id} class="bi bi-x-square"></i>
    </button>
    `;
    cartBody.append(cartItemElement);
  });
  document.querySelector("header").scrollIntoView({ behavior: "smooth" });
  calTotalPrice();
};

window.addEventListener("click", (e) => {
  handelCartEvents(e.target);
});

function handelCartEvents(target) {
  if (target.dataset.btn == "delete") {
    removeItem(target);
  }
}

function removeItem(target) {
  const index = addedProducts.indexOf(
    addedProducts.find((i) => i.id == target.dataset.id)
  );

  const productCardButton = document
    .querySelector("#products-flex")
    .querySelector(`[data-id="${target.dataset.id}"]`);
  productCardButton.disabled = false;
  productCardButton.innerText = "ADD TO CART";
  addedProducts.splice(index, 1);
  target.parentElement.parentElement.remove();
  showEmptyCart();
  calTotalPrice();
}

function calTotalPrice() {
  const totalDiv = document.querySelector("#total-price");
  const initialValue = 0;
  const sum = addedProducts.reduce((a, c) => a + c.price, initialValue);
  totalDiv.innerText = `Total Price: ${+sum}`;
}

export function showEmptyCart() {
  const cartMenu = document.getElementById("cart-menu");
  if (addedProducts.length <= 0) {
    cartMenu.children[0].style.display = "flex";
    cartMenu.children[1].style.display = "none";
  } else {
    cartMenu.children[1].style.display = "flex";
    cartMenu.children[0].style.display = "none";
  }
}

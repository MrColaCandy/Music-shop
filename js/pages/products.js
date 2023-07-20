import { add } from "../menus/cart.js";
export var products = [
  {
    id: 1,
    name: "High girl",
    description: "Lorem ipsum dolor sit amet consectetur.",
    price: 10,
    image: `https://picsum.photos/id/${Math.round(Math.random() * 20)}/200/200`,
  },
  {
    id: 2,
    name: "invisible sounds",
    description: "Lorem ipsum dolor sit amet consectetur.",
    price: 15,
    image: `https://picsum.photos/id/${Math.round(Math.random() * 20)}/200/200`,
  },
  {
    id: 3,
    name: "always Flashback",
    description: "Lorem ipsum dolor sit amet consectetur.",
    price: 16,
    image: `https://picsum.photos/id/${Math.round(Math.random() * 20)}/200/200`,
  },
  {
    id: 4,
    name: "No one needs Selfie",
    description: "Lorem ipsum dolor sit amet consectetur.",
    price: 25,
    image: `https://picsum.photos/id/${Math.round(Math.random() * 20)}/200/200`,
  },
  {
    id: 5,
    name: "function of flow",
    description: "Lorem ipsum dolor sit amet consectetur.",
    price: 12,
    image: `https://picsum.photos/id/${Math.round(Math.random() * 20)}/200/200`,
  },
  {
    id: 6,
    name: "cute Lines",
    description: "Lorem ipsum dolor sit amet consectetur.",
    price: 9,
    image: `https://picsum.photos/id/${Math.round(Math.random() * 20)}/200/200`,
  },
  {
    id: 7,
    name: "carefree YOUTH",
    description: "Lorem ipsum dolor sit amet consectetur.",
    price: 14,
    image: `https://picsum.photos/id/${Math.round(Math.random() * 20)}/200/200`,
  },
  {
    id: 8,
    name: "High girl",
    description: "Lorem ipsum dolor sit amet consectetur.",
    price: 10,
    image: `https://picsum.photos/id/${Math.round(Math.random() * 20)}/200/200`,
  },
  {
    id: 9,
    name: "the light options",
    description: "Lorem ipsum dolor sit amet consectetur.",
    price: 11,
    image: `https://picsum.photos/id/${Math.round(Math.random() * 20)}/200/200`,
  },
  {
    id: 10,
    name: "think about morning sun",
    description: "Lorem ipsum dolor sit amet consectetur.",
    price: 17,
    image: `https://picsum.photos/id/${Math.round(Math.random() * 20)}/200/200`,
  },
  {
    id: 11,
    name: "another Shot",
    description: "Lorem ipsum dolor sit amet consectetur.",
    price: 30,
    image: `https://picsum.photos/id/${Math.round(Math.random() * 20)}/200/200`,
  },
];

const productsFlex = document.getElementById("products-flex");
renderProducts();

productsFlex.addEventListener("click", (e) => {
  handleProductsEvent(e);
});

function renderProducts() {
  products.forEach((p) => {
    const productCard = document.createElement("div");
    productCard.className = "card";
    productCard.innerHTML = `
    <img src=${p.image}/>
    <h4>${p.name}</h4>
    <h5>price: ${p.price}$</h5>
    <p>${p.description}</p>
    <button data-id=${p.id} data-btn="add-btn">ADD TO CART</button>
    `;
    productsFlex.append(productCard);
  });
}

function handleProductsEvent(e) {
  if (e.target.dataset.btn === "add-btn") {
    addProduct(e.target);
  }
}

function addProduct(target) {
  const product = products.find((p) => p.id == target.dataset.id);
  target.innerText = "ADDED!";
  target.disabled = true;

  add({ product });
}

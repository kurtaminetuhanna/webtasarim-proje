function loadCart() {
  return JSON.parse(localStorage.getItem("cart") || "[]");
}

function saveCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function addToCart(product) {
  let cart = loadCart();
  const existing = cart.find(p => p.name === product.name);

  if (existing) {
    existing.quantity += 1;
  } else {
    product.quantity = 1;
    cart.push(product);
  }

  saveCart(cart);
  alert(product.name + " sepete eklendi.");
}

function setupSearch() {
  const searchInput = document.querySelector(".search-input");
  const cards = document.querySelectorAll(".product-card");

  searchInput.addEventListener("input", () => {
    const text = searchInput.value.toLowerCase();

    cards.forEach(card => {
      const name = card.querySelector(".product-name").textContent.toLowerCase();
      card.style.display = name.includes(text) ? "flex" : "none";
    });
  });
}

function setupAddButtons() {
  const buttons = document.querySelectorAll(".add-to-cart-btn");

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      const card = btn.closest(".product-card");

      const name = card.querySelector(".product-name").textContent.trim();

      let priceText = card.querySelector(".product-price").textContent.trim();
      priceText = priceText.replace("TL", "").trim();
      const price = Number(priceText);

      const image = card.querySelector(".product-image").getAttribute("src");

      addToCart({ name, price, image });
    });
  });
}

function showWelcomeUser() {
  const user = JSON.parse(localStorage.getItem("loggedUser"));
  const welcomeEl = document.getElementById("welcomeUser");

  if (user) {
    welcomeEl.textContent = `Hoş geldin, ${user.isim}!`;
  }
}

function setupCartIcon() {
  const cartIcon = document.querySelector(".cart-icon");

  cartIcon.addEventListener("click", () => {
    window.location.href = "sepet.html";
  });
}

document.addEventListener("DOMContentLoaded", () => {
  setupSearch();
  setupAddButtons();
  setupCartIcon();
  showWelcomeUser();
});

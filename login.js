
const form = document.querySelector("form");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

const dogruEmail = "test@gmail.com";
const dogruSifre = "12345";

form.addEventListener("submit", function (event) {
  event.preventDefault(); 

  const girilenEmail = emailInput.value.trim();
  const girilenSifre = passwordInput.value.trim();

  if (girilenEmail === "" || girilenSifre === "") {
    alert("Lütfen tüm alanları doldurunuz!");
    return;
  }

  if (girilenEmail === dogruEmail && girilenSifre === dogruSifre) {
    alert("Giriş başarılı! ");
  } else {
    alert("E-posta veya şifre hatalı! ");
  }

  
  form.reset();
});

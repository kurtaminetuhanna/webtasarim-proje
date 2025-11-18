const form = document.querySelector("form");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

form.addEventListener("submit", async function (event) {
  event.preventDefault();

  const email = emailInput.value.trim();
  const sifre = passwordInput.value.trim();

  
  if (email === "" || sifre === "") {
    alert("Lütfen tüm alanları doldurunuz!");
    return;
  }

  try {
    
    const response = await fetch("http://localhost:3000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, sifre }),
    });

    const result = await response.json();

    
    if (!response.ok) {
      alert(result.message);
      return;
    }

    
    alert("Giriş başarılı!");

    
    console.log("Kullanıcı:", result.user);

    

  } catch (err) {
    console.error("Sunucu hatası:", err);
    alert("Sunucuya bağlanılamadı!");
  }

  
  form.reset();
});
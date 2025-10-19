const form = document.getElementById("signupForm");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = {
    isim: document.getElementById("isim").value.trim(),
    soyisim: document.getElementById("soyisim").value.trim(),
    email: document.getElementById("email").value.trim(),
    telefon: document.getElementById("telefon").value.trim(),
    sifre: document.getElementById("sifre").value.trim(),
    sifreTekrar: document.getElementById("sifreTekrar").value.trim(),
  };

  if (formData.sifre !== formData.sifreTekrar) {
    alert("Şifreler eşleşmiyor!");
    return;
  }

  try {
    const res = await fetch("http://localhost:3000/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        isim: formData.isim,
        soyisim: formData.soyisim,
        email: formData.email,
        telefon: formData.telefon,
        sifre: formData.sifre
      }),
    });

    const data = await res.json();
    alert(data.message);
    if (res.ok) form.reset();
  } catch (err) {
    alert("Sunucuya bağlanırken hata oluştu!");
    console.error(err);
  }
});

// Festa: 31/10/2026 às 12:00 (horário de Brasília)
const PARTY = new Date("2026-10-31T12:00:00-03:00");
const LOCATION = "https://share.google/wN4BCI0VTGkkzVwts";

const cd = document.getElementById("countdown");
const units = Object.fromEntries([...cd.querySelectorAll("[data-u]")].map(el => [el.dataset.u, el]));
const pad = n => String(n).padStart(2, "0");

function tick() {
  const diff = PARTY - Date.now();
  if (diff <= 0) {
    cd.classList.add("done");
    cd.textContent = "É hoje! 🎉 Vem pra festa da Ana!";
    return false;
  }
  const s = Math.floor(diff / 1000);
  units.d.textContent = Math.floor(s / 86400);
  units.h.textContent = pad(Math.floor(s / 3600) % 24);
  units.m.textContent = pad(Math.floor(s / 60) % 60);
  units.s.textContent = pad(s % 60);
  return true;
}
if (tick()) {
  const timer = setInterval(() => { if (!tick()) clearInterval(timer); }, 1000);
}

// Link "Salvar na agenda" (Google Agenda), 12:00–17:00 BRT
const params = new URLSearchParams({
  action: "TEMPLATE",
  text: "Aniversário da Ana Hortência – 5 anos 🎀",
  dates: "20261031T150000Z/20261031T200000Z",
  details: "A Casa Mágica da Ana! Tem piscina: leve roupa de banho, boia/colete, protetor solar e roupinha de troca.\nLocal: " + LOCATION,
  location: LOCATION,
});
document.getElementById("add-cal").href = "https://calendar.google.com/calendar/render?" + params;

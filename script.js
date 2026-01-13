function updateCountdown() {
	const targetDate = new Date('2026-1-1T00:00:01')
  const now = new Date();
	let diff = targetdate - now;
  const countdownEl = document.getElementById("countdown");

  if (diff <= 0) {
    countdownEl.innerText = "Gelukkig Nieuwjaar! 🎆";
    return;
  }

  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30.44); // ruwe maandschatting

  const remainingDays = Math.floor(days - months * 30.44);
  const remainingHours = hours % 24;
  const remainingMinutes = minutes % 60;
  const remainingSeconds = seconds % 60;

  let parts = [];

  if (months > 0)
    parts.push(`<span class="unit"><span class="number">${months}</span> maand${months !== 1 ? 'en' : ''}</span>`);

  if (days > 0 || months > 0)
    parts.push(`<span class="unit"><span class="number">${remainingDays}</span> dag${remainingDays !== 1 ? 'en' : ''}</span>`);

  if (hours > 0 || days > 0 || months > 0)
    parts.push(`<span class="unit"><span class="number">${remainingHours}</span> uur</span>`);

  if (minutes > 0 || hours > 0 || days > 0 || months > 0)
    parts.push(`<span class="unit"><span class="number">${remainingMinutes}</span> min</span>`);

  parts.push(`<span class="unit"><span class="number">${remainingSeconds}</span> sec</span>`);

  countdownEl.innerHTML = parts.join(' ');
}

updateCountdown();
setInterval(updateCountdown, 1000);

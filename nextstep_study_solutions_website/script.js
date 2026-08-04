const TEAM_EMAIL = "info@nextstepstudysolutions.co.zw";

document.getElementById('menuBtn').addEventListener('click', () => {
  document.getElementById('navLinks').classList.toggle('open');
});

document.getElementById('applyBoardBtn').addEventListener('click', () => {
  document.getElementById('applyboard-intake').scrollIntoView({ behavior: 'smooth' });
});

const applyBoardIframe = document.getElementById('ab-student-intake-form');

window.addEventListener('message', (event) => {
  if (event.origin !== 'https://www.applyboard.com' || !applyBoardIframe) return;

  const height = Number(event.data?.height);
  if (!Number.isFinite(height) || height <= 0) return;

  applyBoardIframe.style.height = `${Math.min(Math.max(height * 1.12, 720), 5000)}px`;
});

document.getElementById('leadForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(e.target).entries());
  const subject = encodeURIComponent(`Free Student Assessment - ${data.name}`);
  const body = encodeURIComponent(`Hello Next Step Study Solutions,\n\nI want help with my study abroad application.\n\nName: ${data.name}\nEmail: ${data.email}\nWhatsApp: ${data.phone}\nCountry of residence: ${data.residence}\nPreferred destination: ${data.destination}\nPreferred course: ${data.course}\n\nPlease guide me and link me to the right application process for email updates.\n`);
  window.location.href = `mailto:${TEAM_EMAIL}?subject=${subject}&body=${body}`;
});
const portalToast = document.getElementById('portalToast');
const portalUpdateText = document.getElementById('portalUpdateText');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const portalUpdates = [
  'Document checklist approved',
  'Application sent to school',
  'New message from your advisor',
  'Email progress update delivered'
];

if (portalToast && portalUpdateText && !reduceMotion) {
  let updateIndex = 0;

  window.setInterval(() => {
    portalToast.classList.add('is-changing');

    window.setTimeout(() => {
      updateIndex = (updateIndex + 1) % portalUpdates.length;
      portalUpdateText.textContent = portalUpdates[updateIndex];
      portalToast.classList.remove('is-changing');
    }, 260);
  }, 3200);
}

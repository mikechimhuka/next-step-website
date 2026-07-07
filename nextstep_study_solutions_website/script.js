const APPLYBOARD_RECRUITER_LINK = "https://www.applyboard.com/"; // Replace with your official ApplyBoard recruiter/student invitation link.
const TEAM_EMAIL = "info@nextstepstudysolutions.co.zw";

document.getElementById('menuBtn').addEventListener('click', () => {
  document.getElementById('navLinks').classList.toggle('open');
});

document.getElementById('applyBoardBtn').addEventListener('click', () => {
  window.open(APPLYBOARD_RECRUITER_LINK, '_blank');
});

document.getElementById('leadForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(e.target).entries());
  const subject = encodeURIComponent(`Free Student Assessment - ${data.name}`);
  const body = encodeURIComponent(`Hello Next Step Study Solutions,\n\nI want help with my study abroad application.\n\nName: ${data.name}\nEmail: ${data.email}\nWhatsApp: ${data.phone}\nCountry of residence: ${data.residence}\nPreferred destination: ${data.destination}\nPreferred course: ${data.course}\n\nPlease guide me and link me to the right application process for email updates.\n`);
  window.location.href = `mailto:${TEAM_EMAIL}?subject=${subject}&body=${body}`;
});

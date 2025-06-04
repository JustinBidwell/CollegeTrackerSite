/* ---------- element cache ---------- */
const pages = [...document.querySelectorAll('[data-page]')];

/* ---------- view helpers ----------- */
const show = (id) =>
    pages.forEach((p) => p.classList.toggle('hidden', p.id !== id));

function router() {
    const route = location.pathname.slice(1) || 'home'; // "/login" → "login"
    if (!document.getElementById(route)) return show('home');
    show(route);
}

/* ---------- navigation handling ---- */
document.addEventListener('click', (e) => {
    const link = e.target.closest('[data-link]');
    if (!link) return;
    e.preventDefault();
    history.pushState(null, '', link.href);
    router();
});
window.addEventListener('popstate', router);
window.addEventListener('DOMContentLoaded', router);

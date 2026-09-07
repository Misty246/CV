document.addEventListener('DOMContentLoaded', () => {
  const popup = document.getElementById('desktop-popup');
  const closeBtn = document.getElementById('closePopupBtn');

  // Vérifie si l'utilisateur a déjà vu le pop-up pendant cette session
  const hasSeenPopup = sessionStorage.getItem('popupShown');

  if (popup) {
    if (!hasSeenPopup) {
      // Si sur PC (largeur > 668px) et pas encore vu
      if (window.innerWidth >= 669) {
        popup.style.display = 'flex';
      }

      // Gestion de la fermeture
      if (closeBtn) {
        closeBtn.addEventListener('click', () => {
          popup.style.display = 'none';
          sessionStorage.setItem('popupShown', 'true'); // Enregistre la fermeture
        });
      }
    } else {
      // Masque le pop-up si déjà vu dans la session
      popup.style.display = 'none';
    }
  }
});
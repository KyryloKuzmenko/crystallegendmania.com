document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.querySelector('.burger-menu');
  const closeMenu = document.querySelector('.close-menu');
  const backdrop = document.querySelector('.backdrop');
  const links = document.querySelectorAll('.backdrop-list-item');

  menuBtn?.addEventListener('click', () => {
    backdrop.classList.add('show');
    menuBtn.classList.add('hidden');
    closeMenu.classList.remove('hidden');
  });

  closeMenu?.addEventListener('click', () => {
    backdrop.classList.remove('show');
    menuBtn.classList.remove('hidden');
    closeMenu.classList.add('hidden');
  });

  backdrop?.addEventListener('click', e => {
    if (e.target === backdrop) {
      backdrop.classList.remove('show');
      menuBtn.classList.remove('hidden');
      closeMenu.classList.add('hidden');
    }
  });

  links.forEach(link => {
    link.addEventListener('click', () => {
      backdrop.classList.remove('show');
      menuBtn.classList.remove('hidden');
      closeMenu.classList.add('hidden');
    });
  });
});

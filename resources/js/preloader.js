document.addEventListener('DOMContentLoaded', () => {
  document.body.style.overflow = 'hidden';
  function hidePreloader() {
    const preloader = document.getElementById('preloader');
    preloader.style.display = 'none';
    document.body.style.overflow = null;
  }
  setTimeout(hidePreloader, 500);
});

import LazyLoad from 'vanilla-lazyload';

document.addEventListener('DOMContentLoaded', () => {
  const lazyLoadInstance = new LazyLoad();
  window.addEventListener('pageshow', () => {
    lazyLoadInstance.update();
  });
});

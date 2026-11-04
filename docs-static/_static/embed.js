// Inside the site, the site's own header is shown, so the theme's header is hidden.
if (window.self !== window.top) {
  document.documentElement.classList.add('embedded');
  document.addEventListener('click', function (event) {
    var link = event.target.closest && event.target.closest('a[href]');
    if (!link) return;
    var url = new URL(link.href, location.href);
    if (url.origin === location.origin && !url.pathname.startsWith('/docs-static')) link.target = '_top';
  }, true);
}

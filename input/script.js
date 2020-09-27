/**
 * DARK MODE TOGGLE
 */
function checkDarkMode() {
  if (document.cookie.includes('mode')) {
    return document.cookie.match('(mode=)([^\\s]+)')[2] === 'dark';
  }

  return window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches;
}
if (checkDarkMode()) {
  document.documentElement.classList.add('mode-dark');
  handleModeChange(true);
} else {
  document.documentElement.classList.remove('mode-dark')
  handleModeChange(false);
}

document.getElementById('modeToggle').addEventListener('click', function(){
  const isDark = document.documentElement.classList.toggle('mode-dark');
  handleModeChange(isDark);
});

function handleModeChange(isDark) {
  document.cookie = "mode=" + (isDark ? "dark" : "light") + "; path=/;";
  const content = document.getElementById('modeToggle').querySelector('span');
  content.innerHTML = isDark ? content.getAttribute('data-icon-dark') : content.getAttribute('data-icon-light');
}
/** END DARK MODE TOGGLE **/

/**
 * HAMBURGER
 **/
document.getElementById('openMenu').addEventListener('click', onMenuClick);
document.getElementById('closeMenu').addEventListener('click', onMenuClick);
document.getElementById('menuOutsideClick').addEventListener('click', onMenuClick);

function onMenuClick() {
  document.getElementById('menu').classList.toggle('invisible');
  document.getElementById('openMenu').classList.toggle('hidden');
  document.getElementById('closeMenu').classList.toggle('hidden');
  document.getElementById('menuOutsideClick').classList.toggle('hidden');
}
/** END HAMBURGER **/

/**
  * GALLERY
  **/
window.addEventListener('load', function() {
  const result = baguetteBox.run('.gallery');
});
/** END GALLERY **/


/**
  * GOOGLE ANALYTICS
  **/
if(true) {
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
}
if (typeof ga === "function") {
  ga('create', 'UA-114536758-1', 'auto', {});
}
/** END GOOGLE ANALYTICS **/

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
} else {
  document.documentElement.classList.remove('mode-dark')
}

document.getElementById('modeToggle').addEventListener('click', function(){
  const isDark = document.documentElement.classList.toggle('mode-dark');
  document.cookie = "mode=" + (isDark ? "dark" : "light") + "; path=/;";
  const content = document.getElementById('modeToggle').querySelector('span');
  content.innerHTML = isDark ? content.getAttribute('data-icon-dark') : content.getAttribute('data-icon-light');
});
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

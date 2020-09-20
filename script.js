/**
 * DARK MODE TOGGLE
 */
function checkDarkMode() {
  if (
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
  ) {
    return true
  }
  return false
}
if (checkDarkMode()) {
  document.documentElement.classList.add('mode-dark')
} else {
  document.documentElement.classList.remove('mode-dark')
}

document.getElementById('modeToggle').addEventListener('click', function(){
  const isDark = document.documentElement.classList.toggle('mode-dark');
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

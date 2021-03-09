export async function applyTheme(theme) {
  const response = await fetch(`themes/${theme}.css`);
  const cssFile = await response.text();
  const styleBlock = document.querySelector('[data-style]');
  styleBlock.innerHTML = '';
  styleBlock.innerHTML = cssFile;
}

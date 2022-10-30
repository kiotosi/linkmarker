export default function escapeText(text: string): string {
  const p = document.createElement('p');
  p.innerHTML = text;
  return p.innerText;
}

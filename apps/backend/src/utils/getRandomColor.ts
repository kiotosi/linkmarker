import randomColor from '../data/randomColor.define';

export default function getRandomColor(): string {
  return randomColor[Math.floor(Math.random() * randomColor.length)];
}

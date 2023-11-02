
import { firstCapital, innerRightJoinWith } from '../modules/js-awe.min.js'

export function libraryLoadedDiv() {
  const newDiv = document.createElement('div');
  newDiv.innerText = firstCapital('library is loaded correctly...');
  document.body.appendChild(newDiv);
}
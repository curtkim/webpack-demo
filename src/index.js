//import {join} from 'lodash';
import {join} from './utils';
import printMe from './print';
import './style.css';

function component() {
  const element = document.createElement('div');

  element.innerHTML = join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  const btn = document.createElement('button');
  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;
  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());
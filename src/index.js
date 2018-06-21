import _ from 'lodash';
import printMe from './print.js';
import './style.css';
import lanlan from './我知道問題出在哪了.png';

function component() {
  var element = document.createElement('div');
  var btn = document.createElement('button');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;
  element.appendChild(btn);
  
  element.classList.add('hello');

  const myIcon = new Image();
  myIcon.src = lanlan;

  element.appendChild(myIcon);

  return element;
}

document.body.appendChild(component());
import './style.css';

console.log('webpack is working');

function component() {
  const element = document.createElement('div');
  // element.innerHTML = '';
  // element.classList.add('test');

  return element;
}

document.body.appendChild(component());

import menuGelato from './imgs/menu-gelato.jpg';

function buildMenu() {
  const menu = document.createElement('div');
  menu.classList.add('menu');
  const menuTitle = document.createElement('p');
  menuTitle.textContent = 'Gelato Menu';
  const menuImg = document.createElement('img');
  menuImg.src = menuGelato;
  menuImg.alt = 'menu-gelato';
  const menuTable = document.createElement('table');
  menuTable.innerHTML =
    '<tr><th colspan="4">M-Size 8$ / L-Size 12$</th></tr><tr><td>Vanilla</td><td>Salt</td><td>Greentea</td><td>Rum Raisin</td></tr><tr><td>Chocolate</td><td>Raspberry</td><td>Adzuki Bean</td><td>Butter Caramel</td></tr><tr><td>Strawberry</td><td>Pine Apple</td><td>Hokkaido Milk</td><td>Cookies and Cream</td></tr>';
  menu.appendChild(menuTitle);
  menu.appendChild(menuImg);
  menu.appendChild(menuTable);

  return menu;
}

export default function loadMenu() {
  const main = document.getElementById('main');
  main.textContent = '';
  main.appendChild(buildMenu());
}

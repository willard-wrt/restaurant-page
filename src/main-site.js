function buildHeader() {
  const header = document.createElement('header');
  header.classList.add('header');

  const topLogo = document.createElement('div');
  topLogo.classList.add('top-logo');

  const shopName = document.createElement('h1');
  shopName.classList.add('shop-name');
  shopName.textContent = 'Grendel-Gelateria';
  const nameJp = document.createElement('p');
  nameJp.classList.add('shop-name');
  nameJp.textContent = 'グレンデル・ジェラテリア';

  topLogo.appendChild(shopName);
  topLogo.appendChild(nameJp);
  header.appendChild(topLogo);
  header.appendChild(buildNav());

  return header;
}

function buildNav() {
  const nav = document.createElement('nav');
  nav.classList.add('tabs');

  const homeButton = document.createElement('div');
  homeButton.classList.add('button-nav');
  homeButton.textContent = 'Home';

  const menuButton = document.createElement('div');
  menuButton.classList.add('button-nav');
  menuButton.textContent = 'Menu';

  const contactButton = document.createElement('div');
  contactButton.classList.add('button-nav');
  contactButton.textContent = 'Contact';

  nav.appendChild(homeButton);
  nav.appendChild(menuButton);
  nav.appendChild(contactButton);

  return nav;
}

function buildMain() {
  const main = document.createElement('main');
  main.classList.add('main');
  main.setAttribute('id', 'main');

  return main;
}

function buildFooter() {
  const footer = document.createElement('footer');
  footer.classList.add('footer');

  const copyright = document.createElement('p');
  copyright.textContent = `Copyright © ${new Date().getFullYear()} willard-wrt`;

  const githubLink = document.createElement('a');
  githubLink.href = 'https://github.com/willard-wrt/';

  const githubIcon = document.createElement('i');
  githubIcon.classList.add('fa', 'fa-github', 'fa-2x');

  githubLink.appendChild(githubIcon);
  footer.appendChild(copyright);
  footer.appendChild(githubLink);

  return footer;
}

export default function buildWebsite() {
  const content = document.getElementById('content');
  content.appendChild(buildHeader());
  // content.appendChild(buildMain());
  content.appendChild(buildFooter());
}

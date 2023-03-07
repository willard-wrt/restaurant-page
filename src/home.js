import homeDessert from './imgs/home-dessert.jpg';

function buildHome() {
  const home = document.createElement('div');
  home.classList.add('home');

  const dessertImg = document.createElement('img');
  dessertImg.src = homeDessert;
  dessertImg.alt = 'home-dessert';

  home.appendChild(
    buildParagraph(
      'At our shop, gelato and desserts are served every day with passion.'
    )
  );
  home.appendChild(
    buildParagraph(
      'We use specially selected ingredients from across Japan since 2003.'
    )
  );
  home.appendChild(dessertImg);
  home.appendChild(
    buildParagraph(
      '<b>Visit us</b> or <b>order online</b> to enjoy our desserts today.'
    )
  );

  return home;
}

function buildParagraph(text) {
  const paragraph = document.createElement('p');
  paragraph.innerHTML = text;
  return paragraph;
}

export default function loadHome() {
  const main = document.getElementById('main');
  main.textContent = '';
  main.appendChild(buildHome());
}

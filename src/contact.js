function buildContact() {
  const contact = document.createElement('div');
  contact.classList.add('contact');
  const contactBg = document.createElement('img');
  contactBg.setAttribute('id', 'contact-bg');
  contactBg.src = '/src/imgs/contact-gelato.jpg';
  contactBg.alt = 'gelato-background';
  const contactMap = document.createElement('img');
  contactMap.setAttribute('id', 'chicago-map');
  contactMap.src = '/src/imgs/chicago-map.jpg';
  contactMap.alt = 'chicago-map';
  contact.appendChild(contactBg);
  contact.appendChild(buildParagraph('Tel : 312 123 4567', 'tel'));
  contact.appendChild(buildParagraph('Grendel Gelateria', 'address'));
  contact.appendChild(contactMap);

  return contact;
}

function buildParagraph(text, pClass) {
  const paragraph = document.createElement('p');
  paragraph.innerText = text;
  paragraph.classList.add(pClass);
  return paragraph;
}

export default function loadContact() {
  const main = document.getElementById('main');
  main.textContent = '';
  main.appendChild(buildContact());
}

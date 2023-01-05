function main() {
  const roadmaps = [
    {
      linkHref: 'https://www.roadmap.sh/javascript',
      linkText: 'Javascript Roadmap',
      inputId: 'Javascript'
    },
    {
      linkHref: 'https://www.roadmap.sh/frontend',
      linkText: 'Frontend Roadmap',
      inputId: 'Frontend'
    },
  ]
  const listOfRoadmapsInHTML = document.querySelector('#roadmap-list-js');

  roadmaps.forEach(roadmap => listOfRoadmapsInHTML.appendChild(createLiElements(roadmap.linkHref, roadmap.linkText, roadmap.inputId)));
};

function createLiElements(linkHref, linkText, inputId) {
  const li = document.createElement('li');

  const h2 = createHeadingElement(2);
  const link = createLinkElement(linkHref, linkText);
  
  h2.appendChild(link);
  
  const div = createDivElement();
  
  const h3 = createHeadingElement(3);
  h3.innerText = "have you done this roadmap's tasks?";

  const input = createInputElement(inputId);
  
  div.appendChild(h3)
  div.appendChild(input)
  
  li.appendChild(h2);
  li.appendChild(div);

  return li;
}

function createHeadingElement(headingNum) {
  if(headingNum > 0 && headingNum < 7) {
    const heading = document.createElement(`h${headingNum}`);

    return heading;
  }

  return 'heading num given is invalid';
}

function createLinkElement(link, linkText) {
  const linkTag = document.createElement('a')
  linkTag.setAttribute('target', 'blank')
  linkTag.setAttribute('href', link);
  linkTag.innerText = linkText;

  return linkTag;
}

function createDivElement() {
  const div = document.createElement('div');
  div.setAttribute('class', 'question');

  return div;
}

function createInputElement(inputId) {
  const input = document.createElement('input');
  input.setAttribute('type', 'checkbox');
  input.setAttribute('id', 'is-task-done');

  const checkboxKeyInStorage = inputId;
  const checkboxValueInStorage = localStorage.getItem(checkboxKeyInStorage);

  input.checked = checkboxValueInStorage === 'true' ? true : false;

  input.addEventListener('change', () => localStorage.setItem(checkboxKeyInStorage, input.checked));

  return input;
};

main();
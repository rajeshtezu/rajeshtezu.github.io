import { leftIcons, rightIcons, addressData, aboutMeText, edContent } from './home-page-data.js';

const headerLeftElm = document.getElementById('header-left');
const headerRightElm = document.getElementById('header-right');
const addressElm = document.getElementById('address');
const aboutMeElm = document.getElementById('about-me');
const edLinksElm = document.getElementById('ed-links');

function addIconsToHeader(element, header) {
  element.innerHTML = header;
}

function addAddress() {
  addressElm.innerHTML = `
    <a class="address__line email-text" href="mailto:${addressData.email}" rel="noopener noreferrer">
      <i class="fas fa-envelope"></i>
      ${addressData.email}
    </a>
    <a
      class="address__line bg-linkedin"
      href="https://linkedin.com/in/${addressData.linkedin}"
      target="_blank"
      rel="noopener noreferrer"
    >
      <i class="fab fa-linkedin"></i> Linkedin
    </a>
    <a
      class="address__line bg-github"
      href="https://github.com/${addressData.github}"
      target="_blank"
      rel="noopener noreferrer"
    >
      <i class="fab fa-github-square"></i> Github
    </a>
    <a
      class="address__line bg-resume"
      href="${addressData.resume}"
      target="_blank"
      rel="noopener noreferrer"
    >
      <i class="fas fa-file"></i> Resume
    </a>
  `;
}

function addAboutMe() {
  aboutMeElm.innerHTML = aboutMeText;
}

function addEdLinks() {
  edLinksElm.innerHTML = `
    ${edContent.reduce((acc, item) => {
      acc += `
        <li>
          <a href="${item.link}" target="_blank" style="color: #0969da">${item.text}</a>
        </li>
      `;

      return acc;
    }, '')}      
  `;
}

function main() {
  addIconsToHeader(headerLeftElm, leftIcons);
  addIconsToHeader(headerRightElm, rightIcons);

  addAddress();
  addAboutMe();
  addEdLinks();
}

(() => {
  main();
})();

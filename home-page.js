import { leftIcons, rightIcons, addressData, aboutMeText } from './home-page-data.js';
import { environment } from './environment.js';

const headerLeftElm = document.getElementById('header-left');
const headerRightElm = document.getElementById('header-right');
const addressElm = document.getElementById('address');
const aboutMeElm = document.getElementById('about-me');
const techEdLinksElm = document.getElementById('tech-ed-links');
const otherEdLinksElm = document.getElementById('other-ed-links');
const subscriptionFormElm = document.getElementById('subscription-form');

function addIconsToHeader(element, header) {
  try {
    element.innerHTML = header;
  } catch (error) {
    // Fail silently
    console.error(error);
  }
}

function addAddress() {
  try {
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
  } catch (error) {
    // Fail silently
    console.error(error);
  }
}

function addAboutMe() {
  try {
    aboutMeElm.innerHTML = aboutMeText;
  } catch (error) {
    // Fail silently
    console.error(error);
  }
}

async function fetchLinks(url) {
  try {
    const response = await fetch(url);

    return response.json();
  } catch (error) {
    console.error(error);
    // Fail silently
  }
}

function addEdLinks(linkList, elm) {
  elm.innerHTML = `
    ${linkList.reduce((acc, item) => {
      acc += `
        <li>
          <a href="${item.link}" target="_blank" style="color: #0969da">${item.text}</a>
        </li>
      `;

      return acc;
    }, '')}      
  `;
}

async function addTechEdLinks() {
  const techEdUrl = environment.techEdLinkUrl;
  const techEdLinks = await fetchLinks(techEdUrl);
  addEdLinks(techEdLinks, techEdLinksElm);
}

async function addOtherEdLinks() {
  const otherEdUrl = environment.otherEdLinkUrl;
  const otherEdLinks = await fetchLinks(otherEdUrl);
  addEdLinks(otherEdLinks, otherEdLinksElm);
}

async function main() {
  addIconsToHeader(headerLeftElm, leftIcons);
  addIconsToHeader(headerRightElm, rightIcons);

  addAddress();
  addAboutMe();
  await addTechEdLinks();
  await addOtherEdLinks();
}

// Subscription
async function subscribe(email, mobile) {
  try {
    const response = await fetch(environment.subscriptionUrl, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, mobile }),
    });

    console.log('Response: ', response);
  } catch (err) {
    console.error(err);
  }
}

// Subscription
subscriptionFormElm.addEventListener('submit', handleSubscription);

async function handleSubscription(e) {
  e.preventDefault();

  const formData = new FormData(subscriptionFormElm);
  const email = formData.get('email');

  await subscribe(email, 'NA');
  subscriptionFormElm.reset();
  alert('Subscribed successfully.');
  e.stopPropagation();
}

(async () => {
  await main();
})();

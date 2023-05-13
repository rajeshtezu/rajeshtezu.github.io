import { addressData, aboutMeText } from './home-page-data.js';
import { environment } from './environment.js';

const addressElm = document.getElementById('address');
const aboutMeElm = document.getElementById('about-me');
const techEdLinksElm = document.getElementById('tech-ed-links');
const otherEdLinksElm = document.getElementById('other-ed-links');
const subscriptionFormElm = document.getElementById('subscription-form');
const successModal = document.getElementById('success');
const alreadySubscribedModal = document.getElementById('already-subscribed');

function addAddress() {
  try {
    addressElm.innerHTML = `
    <a class="address__line email-text" href="mailto:${addressData.email}" rel="noopener noreferrer">
      <i class="fas fa-at"></i>
    </a>
    <a
      class="address__line bg-linkedin"
      href="https://linkedin.com/in/${addressData.linkedin}"
      target="_blank"
      rel="noopener noreferrer"
    >
      <i class="fab fa-linkedin"></i>
    </a>
    <a
      class="address__line bg-github"
      href="https://github.com/${addressData.github}"
      target="_blank"
      rel="noopener noreferrer"
    >
      <i class="fab fa-github-square"></i>
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
  addAddress();
  addAboutMe();
  await addTechEdLinks();
  await addOtherEdLinks();
}

// Subscription
async function subscribe(email, mobile) {
  const trimmedEmail = email?.trim();
  let subscribedEmails = JSON.parse(localStorage.getItem('subscription')) || [];

  if (subscribedEmails.includes(trimmedEmail)) {
    alreadySubscribedModal.showModal();

    setTimeout(() => alreadySubscribedModal.close(), 2000);

    return;
  }

  try {
    const response = await fetch(environment.subscriptionUrl, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ trimmedEmail, mobile }),
    });

    subscribedEmails = [...subscribedEmails, trimmedEmail];
    localStorage.setItem('subscription', JSON.stringify(subscribedEmails));

    successModal.showModal();
    setTimeout(() => successModal.close(), 1000);
    console.log('Response: ', response);
  } catch (err) {
    console.error(err);
  }
}

// Subscription
if (subscriptionFormElm) {
  subscriptionFormElm.addEventListener('submit', handleSubscription);

  async function handleSubscription(e) {
    try {
      e.preventDefault();
      const formData = new FormData(subscriptionFormElm);
      const email = formData.get('email');

      await subscribe(email, 'NA');
      subscriptionFormElm.reset();
    } catch (error) {
      console.error('Subscription Error: ', error);
    } finally {
      e.stopPropagation();
    }
  }
}

(async () => {
  await main();
})();

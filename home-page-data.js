export const leftIcons = `
  <i class="devicon-git-plain colored header--icon"></i>
  <i class="devicon-javascript-plain colored header--icon"></i>
  <i class="devicon-react-original colored header--icon"></i>
  <i class="devicon-html5-plain-wordmark colored header--icon"></i>
  <i class="devicon-css3-plain colored header--icon"></i>
  <i class="devicon-less-plain-wordmark colored header--icon"></i>
  <i class="devicon-typescript-plain colored header--icon"></i>
  <i class="devicon-angularjs-plain colored header--icon"></i>
`;

export const rightIcons = `
  <i class="devicon-github-original-wordmark colored header--icon"></i>
  <i class="devicon-nodejs-plain colored header--icon bg-text-color"></i>
  <i class="devicon-amazonwebservices-original colored header--icon"></i>
  <i class="devicon-express-original-wordmark header--icon bg-black"></i>
  <i class="devicon-graphql-plain-wordmark colored header--icon"></i>
  <i class="devicon-jira-plain-wordmark colored header--icon"></i>
  <i class="devicon-mongodb-plain-wordmark colored header--icon"></i>
  <i class="devicon-postgresql-plain-wordmark colored header--icon"></i>
`;

export const addressData = {
  email: 'rajeshtezu90@gmail.com',
  github: 'rajeshtezu90',
  linkedin: 'rajeshtezu90',
  resume: './resume/index.html',
};

export const aboutMeText = `
  <p> 
    I'm a Software Engineer by profession, currently working at "Cisco | WebEx" where I am contributing to webex-js-sdk and its helper libraries.
  </p>

  <p style="margin-top: 2rem;">
    <span class="emoji">&#128591;</span> Thank you for visiting.
  </p>

  <p>
    <span class="emoji">&#128336;</span> Stay tuned for awesome contents.
  </p>
`;

function getClockEmojis() {
  return [...Array(23).keys()].map((item) => 128335 + item);
}

export const edContent = [
  {
    text: 'Python | Automate the boring stuff',
    link: 'http://github.com/rajeshtezu90/automateboringstuff',
  },
  {
    text: 'WebRTC - Coming soon...',
    link: '#',
  },
];
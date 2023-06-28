export const addressData = {
  email: 'rajeshtezu90@gmail.com',
  github: 'rajeshtezu',
  linkedin: 'rajeshtezu',
  resume: './resume',
};

export const projects = [
  {
    text: 'Word Power Made Easy - Quiz',
    link: '/wpme'
  },
  {
    text: 'Chess Clock',
    link: '/chess-clock',
  },
  {
    text: 'Tic Tac Toe',
    link: '/tic-tac-toe',
  },
  {
    text: 'Drink Water (Chrome extension)',
    link: 'https://chrome.google.com/webstore/detail/drink-water/jagglpaaohcbjhbdgdjinoiaeegbnmeg',
  },
];

export const aboutMeText = `
  <p> 
    I'm a Software Engineer by profession. I enjoy exploring new technologies and building something out of it. 
  </p>

  <p>
    I have worked as a full stack web developer for most of my career and from past couple of years I have been working mostly on frontend web development.
  </p>

  <p>
    Feel free to reach out for any help or to discuss about building something cool <span class="emoji">&#128526;</span>
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

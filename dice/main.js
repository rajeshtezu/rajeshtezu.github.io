const dice = document.getElementById('dice');

const one = `
  <tr>
  <td id="00"><span></span></td>
  <td id="01"><span></span></td>
  <td id="02"><span></span></td>
  </tr>

  <tr>
  <td id="10"><span></span></td>
  <td id="11"><span class="dot"></span></td>
  <td id="12"><span></span></td>
  </tr>

  <tr>
  <td id="20"><span></span></td>
  <td id="21"><span></span></td>
  <td id="22"><span></span></td>
  </tr>
`;

const two = `
  <tr>
  <td id="00"><span></span></td>
  <td id="01"><span></span></td>
  <td id="02"><span class="dot"></span></td>
  </tr>

  <tr>
  <td id="10"><span></span></td>
  <td id="11"><span></span></td>
  <td id="12"><span></span></td>
  </tr>

  <tr>
  <td id="20"><span class="dot"></span></td>
  <td id="21"><span></span></td>
  <td id="22"><span></span></td>
  </tr>
`;

const three = `
  <tr>
  <td id="00"><span></span></td>
  <td id="01"><span></span></td>
  <td id="02"><span class="dot"></span></td>
  </tr>

  <tr>
  <td id="10"><span></span></td>
  <td id="11"><span class="dot"></span></td>
  <td id="12"><span></span></td>
  </tr>

  <tr>
  <td id="20"><span class="dot"></span></td>
  <td id="21"><span></span></td>
  <td id="22"><span></span></td>
  </tr>
`;

const four = `
  <tr>
  <td id="00"><span class="dot"></span></td>
  <td id="01"><span></span></td>
  <td id="02"><span class="dot"></span></td>
  </tr>

  <tr>
  <td id="10"><span ></span></td>
  <td id="11"><span></span></td>
  <td id="12"><span ></span></td>
  </tr>

  <tr>
  <td id="20"><span class="dot"></span></td>
  <td id="21"><span></span></td>
  <td id="22"><span class="dot"></span></td>
  </tr>
`;

const five = `
  <tr>
  <td id="00"><span class="dot"></span></td>
  <td id="01"><span></span></td>
  <td id="02"><span class="dot"></span></td>
  </tr>

  <tr>
  <td id="10"><span></span></td>
  <td id="11"><span class="dot"></span></td>
  <td id="12"><span></span></td>
  </tr>

  <tr>
  <td id="20"><span class="dot"></span></td>
  <td id="21"><span></span></td>
  <td id="22"><span class="dot"></span></td>
  </tr>
`;

const six = `
  <tr>
  <td id="00"><span class="dot"></span></td>
  <td id="01"><span></span></td>
  <td id="02"><span class="dot"></span></td>
  </tr>

  <tr>
  <td id="10"><span class="dot"></span></td>
  <td id="11"><span></span></td>
  <td id="12"><span class="dot"></span></td>
  </tr>

  <tr>
  <td id="20"><span class="dot"></span></td>
  <td id="21"><span></span></td>
  <td id="22"><span class="dot"></span></td>
  </tr>
`;

const diceMap = [0, one, two, three, four, five, six];
const audio = new Audio('../assets/dice-roll.mp3');

dice.addEventListener('click', (event) => {
  event.preventDefault();

  const randomNumber = Math.floor(Math.random() * 6) + 1;
  dice.classList.add('rotate');
  audio.play();

  setTimeout(() => {
    dice.innerHTML = diceMap[randomNumber];
    dice.classList.remove('rotate');
  }, 1100);

  event.stopPropagation();
});

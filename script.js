123

const wh = document.querySelector('.score--0')


const player1 = document.querySelector('.player--0');
const player2 = document.querySelector('.player--1');
const Cscore = document.querySelector('#current--0');
const Cscore1 = document.querySelector('#current--1');
const score1 = document.querySelector('#score--0');
const score2 = document.getElementById('score--1');
const diceE = document.querySelector('.dice');
const rolling = document.querySelector('.btn--roll');
const NewG = document.querySelector('.btn--new');
const btnH = document.querySelector('.btn--hold');


let score, Aplayer, currS, playing;

const init = function () {
   score1.textContent = 0;
   score2.textContent = 0;
   score = [0, 0];
   diceE.classList.add('hidden');
   Aplayer = 0
   currS = 0
   playing = true;

   Cscore.textContent = 0;
   Cscore1.textContent = 0;
   score2.textContent = 0;
   score1.textContent = 0;
   player1.classList.remove('player--winner');
   player2.classList.remove('player--winner');
   player1.classList.add('player--active')
   player2.classList.remove('player--active');
}

init()

const SwichP = function () {
   document.getElementById(`current--${Aplayer}`).textContent = 0;
   currS = 0
   Aplayer = Aplayer === 0 ? 1 : 0;
   player1.classList.toggle('player--active');
   player2.classList.toggle('player--active');
}

rolling.addEventListener('click', function () {
   if (playing) {
      const Role = Math.trunc(Math.random() * 6) + 1
      console.log(Role);
      diceE.classList.remove('hidden')
      const imag = diceE.src = `dice-${Role}.png`
      console.log(imag);

      if (Role !== 1) {
         currS = currS + Role;
         document.getElementById(`current--${Aplayer}`).textContent = currS
         // Cscore.textContent = currS;
      } else {
         SwichP()
      }
   }

})

btnH.addEventListener('click', function () {
   if (playing) {
      score[Aplayer] += currS 
      console.log(score[Aplayer]);
      document.getElementById(`score--${Aplayer}`).textContent =
         score[Aplayer];
      if (score[Aplayer] >= 100) {
         playing = false;
         diceE.classList.add('hidden');
         document.querySelector(`.player--${Aplayer}`)
            .classList.add('player--winner');
         document.querySelector(`.player--${Aplayer}`)
            .classList.remove('player--active');

      }
      SwichP()
   }

});
NewG.addEventListener('click', init);









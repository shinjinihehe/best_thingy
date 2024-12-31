const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");


yesBtn.addEventListener("click", () => {
    
    question.innerHTML = "Yay! I knew you'd say yes! 🥰";
    gif.src = "https://media.giphy.com/media/108M7gCS1JSoO4/giphy.gif"; 
  
  createConfetti();
  
  noBtn.style.display = 'none';
});


noBtn.addEventListener("mouseover", () => {
  const wrapper = document.querySelector(".wrapper");
  const wrapperRect = wrapper.getBoundingClientRect();
  const noBtnRect = noBtn.getBoundingClientRect();

  const maxX = wrapperRect.width - noBtnRect.width;
  const maxY = wrapperRect.height - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
  
  
  const randomScale = 0.5 + Math.random() * 0.5; 
  noBtn.style.transform = `scale(${randomScale})`;
  
  
  question.innerHTML = teasingMessages[Math.floor(Math.random() * teasingMessages.length)];
  
  
  yesButtonSize += 0.1;
  yesBtn.style.transform = `scale(${yesButtonSize})`;
});

const teasingMessages = [
  "Nice try! 😏",
  "You know you want to say yes! 💖",
  "Not gonna heppen bih! 😅",
  "Too slow for a 6ft dude! 🏃‍♂️",
  "Playing hard to get, baby boy? 😘"
];

let yesButtonSize = 1;

function createConfetti() {
  for (let i = 0; i < 50; i++) {
    const confetti = document.createElement('div');
    confetti.className = 'confetti';
    confetti.style.left = Math.random() * 100 + 'vw';
    confetti.style.animationDuration = (2 + Math.random() * 3) + 's';
    confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    document.body.appendChild(confetti);
    
   
    setTimeout(() => confetti.remove(), 5000);
  }
}

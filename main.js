const keys = [
  { letter: "C",
    keycode: 67,
    sound: "sounds/boom.wav",
    class: "fuchsia-background",
  },
  { letter: "L",
    keycode: 76,
    sound: "sounds/clap.wav",
    class: "fuchsia-background",
  },
  { letter: "A",
    keycode: 65,
    sound: "sounds/hihat.wav",
    class: "fuchsia-background",
  },
  { letter: "R",
    keycode: 82,
    sound: "sounds/kick.wav",
    class: "fuchsia-background",
  },
  { letter: "A",
    keycode: 65,
    sound: "sounds/hihat.wav",
    class: "fuchsia-background",
  },
  { letter: "Y",
    keycode: 89,
    sound: "sounds/ride.wav",
    class: "white-background",
  },
  { letter: "E",
    keycode: 69,
    sound: "sounds/snare.wav",
    class: "fuchsia-background",
  },
  { letter: "M",
    keycode: 77,
    sound: "sounds/tink.wav",
    class: "fuchsia-background",
  },
  { letter: "A",
    keycode: 65,
    sound: "sounds/hihat.wav",
    class: "fuchsia-background",
  }
];

const keyset = document.getElementsByClassName("key_container");
console.log(keyset);
let acc = "";

const impresionTeclas = keys.forEach(key => {
  acc += `<div data-key="${key.keycode}" class="key ${key.class}">
  <div class="letter">${key.letter}</div>
  <audio data-key="${key.keycode}" src="${key.sound}">
  </audio>
  </div>`  
});

keyset[0].innerHTML = acc;

window.addEventListener("keydown", function(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if(!audio) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.add("playing");
  
});

function removeTransition(e) {
  if(e.propertyName !== "transform") return;
  this.classList.remove("playing");
}; 

const keyNotes = document.querySelectorAll(".key");
keyNotes.forEach(key => key.addEventListener("transitionend", removeTransition));



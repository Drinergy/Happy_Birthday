// tsParticle Configuration
tsParticles.load("confetti", {
"fullScreen": {
    "zIndex": 1
  },
  "particles": {
    "number": {
      "value": 0
    },
    "color": {
      "value": [
        "#00FFFC",
        "#FC00FF",
        "#fffc00"
      ]
    },
    "shape": {
      "type": [
        "circle",
        "square"
      ],
      "options": {}
    },
    "opacity": {
      "value": 1,
      "animation": {
        "enable": true,
        "minimumValue": 0,
        "speed": 2,
        "startValue": "max",
        "destroy": "min"
      }
    },
    "size": {
      "value": 4,
      "random": {
        "enable": true,
        "minimumValue": 2
      }
    },
    "links": {
      "enable": false
    },
    "life": {
      "duration": {
        "sync": true,
        "value": 5
      },
      "count": 1
    },
    "move": {
      "enable": true,
      "gravity": {
        "enable": true,
        "acceleration": 10
      },
      "speed": {
        "min": 10,
        "max": 20
      },
      "decay": 0.1,
      "direction": "none",
      "straight": false,
      "outModes": {
        "default": "destroy",
        "top": "none"
      }
    },
    "rotate": {
      "value": {
        "min": 0,
        "max": 360
      },
      "direction": "random",
      "move": true,
      "animation": {
        "enable": true,
        "speed": 60
      }
    },
    "tilt": {
      "direction": "random",
      "enable": true,
      "move": true,
      "value": {
        "min": 0,
        "max": 360
      },
      "animation": {
        "enable": true,
        "speed": 60
      }
    },
    "roll": {
      "darken": {
        "enable": true,
        "value": 25
      },
      "enable": true,
      "speed": {
        "min": 15,
        "max": 25
      }
    },
    "wobble": {
      "distance": 30,
      "enable": true,
      "move": true,
      "speed": {
        "min": -15,
        "max": 15
      }
    }
  },
  "emitters": {
    "life": {
      "count": 0,
      "duration": 0.1,
      "delay": 0.4
    },
    "rate": {
      "delay": 0.1,
      "quantity": 150
    },
    "size": {
      "width": 0,
      "height": 0
    }
  }
}).then( (particles) => {

  confetti = particles;

});

// entrance animation for greet
const header = document.querySelectorAll('.greet');

// add entrance animation on windows load
window.onload = function() {

  for (let i = 0; i < header.length; i++) {
      setTimeout(function () {
          header[i].classList.add('slide-in-blurred-top');
      }, i); //delay in ms
  }

};

// for my message 
const next = document.getElementById('next');
const greet = document.getElementById('hbd');
const babi = document.getElementById('babi');
const nxtCont = document.getElementById('next_btn');
const toSpecial = document.getElementById('to_special');

const bdayMessage = document.getElementById('birthday_message');
const specialMessage = document.getElementById('special');

const close = document.getElementById('close');

// bg sound
const mahika = new Audio("assets/music/music.mp3");
mahika.loop = true;

next.addEventListener('click', () => {
  mahika.currentTime = 0;
  mahika.play();
  confetti.stop();

  tsParticles.load("tsparticles", {
  "fullScreen": {
    "zIndex": 1
  },
  "particles": {
    "color": {
      "value": [
        "#865DFF",
        "#FFA3FD"
      ]
    },
    "move": {
      "direction": "bottom",
      "enable": true,
      "outModes": {
        "default": "out"
      },
      "size": true,
      "speed": {
        "min": 1,
        "max": 3
      }
    },
    "number": {
      "value": 500,
      "density": {
        "enable": true,
        "area": 800
      }
    },
    "opacity": {
      "value": 1,
      "animation": {
        "enable": false,
        "startValue": "max",
        "destroy": "min",
        "speed": 0.3,
        "sync": true
      }
    },
    "rotate": {
      "value": {
        "min": 0,
        "max": 360
      },
      "direction": "random",
      "move": true,
      "animation": {
        "enable": true,
        "speed": 60
      }
    },
    "tilt": {
      "direction": "random",
      "enable": true,
      "move": true,
      "value": {
        "min": 0,
        "max": 360
      },
      "animation": {
        "enable": true,
        "speed": 60
      }
    },
    "shape": {
      "type": [
        "circle",
        "square"
      ],
      "options": {}
    },
    "size": {
      "value": {
        "min": 2,
        "max": 4
      }
    },
    "roll": {
      "darken": {
        "enable": true,
        "value": 30
      },
      "enlighten": {
        "enable": true,
        "value": 30
      },
      "enable": true,
      "speed": {
        "min": 15,
        "max": 25
      }
    },
    "wobble": {
      "distance": 30,
      "enable": true,
      "move": true,
      "speed": {
        "min": -15,
        "max": 15
      }
    }
  }
}).then( (particles) => {

  falling = particles;

});

// hide bday greet and btn
greet.classList.add('hide');
babi.classList.add('hide');
nxtCont.classList.add('hide');

// add animation and remove hide
bdayMessage.classList.add('slide-in-blurred-top');
bdayMessage.classList.remove('hide');

})

toSpecial.addEventListener('click', () => {

  // remove animation and hide bday message
  bdayMessage.classList.remove('slide-in-blurred-top');
  bdayMessage.classList.add('hide');


  // add animation and remove hide special message
  specialMessage.classList.add('slide-in-blurred-top');
  specialMessage.classList.remove('hide');

})

close.addEventListener('click', () => {
    // remove animation and add hide special message
    specialMessage.classList.remove('slide-in-blurred-top');
    specialMessage.classList.add('hide');

    falling.stop();
    mahika.pause();
    confetti.start();

    // hide bday greet and btn
    greet.classList.remove('hide');
    babi.classList.remove('hide');
    nxtCont.classList.remove('hide');

    greet.classList.add('slide-in-blurred-top');
    babi.classList.add('slide-in-blurred-top');
    nxtCont.classList.add('slide-in-blurred-top');
})
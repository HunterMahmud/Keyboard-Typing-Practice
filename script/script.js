// Developed by Hasan Al Mahmud

addEventListener('keyup',enter);
function enter(e){
    let hidden = [...document.getElementById('home').classList];
    if(e.key === "Enter" && !hidden.includes('hidden')){
        play();
    }
}


function play() {
    document.getElementById('current-score').innerText = 0;
    document.getElementById("life").innerText = 5;
  addClass("home", "hidden");
  addClass("score", "hidden");
  removeClass("playground", "hidden");
  game();
}

function game() {
  let alphabet = getRandomLetter();
  addClass(alphabet, "bg-red-500");
  document.getElementById("target-letter").innerText = alphabet;
  addEventListener('keyup',typing);
}

function typing(e){
    let alphabet = document.getElementById("target-letter").innerText.toLowerCase();
    if(e.key.toLowerCase() === 'escape'){
        showScore(alphabet);
    }
    else if(e.key===alphabet){
        removeClass(alphabet, "bg-red-500");
        setScore('current-score');
        game();
    }else{
        let life = document.getElementById("life");
        life.innerText = parseInt(life.innerText)-1;
        if(parseInt(life.innerText) <= 0){
            showScore(alphabet);
        }
    }
}


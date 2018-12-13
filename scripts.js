let time = 1500000;
let status = "paused";
let currentStage = "work";


let playButton = document.querySelector("#play");
let resetButton = document.querySelector("#reset");
let pauseButton = document.querySelector("#pause");
let changeButton = document.querySelector("#change");
let stageButton = document.querySelector("#current-stage");
let statusButton = document.querySelector("#current-status");

let checkmarkOne = document.querySelector(".mark-1");
let checkmarkTwo = document.querySelector(".mark-2");
let checkmarkThree = document.querySelector(".mark-3");
let checkmarkFour = document.querySelector(".mark-4");

checkmarkOne.checked = false;
checkmarkTwo.checked = false; checkmarkTwo.disabled = true;
checkmarkThree.checked = false; checkmarkThree.disabled = true;
checkmarkFour.checked = false;

statusButton.textContent = status;
stageButton.textContent = currentStage;

pauseButton.disabled = true;
resetButton.disabled = true;

change.addEventListener('click',() => {
  if (currentStage == "work") {
    currentStage = "break"
    stageButton.textContent = currentStage;
    document.querySelector('#minutes').textContent = 5;
    document.querySelector('#seconds').textContent = "00";
    time = 300000;
  }
  else {
    currentStage = "work"
    stageButton.textContent = currentStage;

    document.querySelector('#minutes').textContent = 25;
    document.querySelector('#seconds').textContent = "00";
    time = 1500000;
  }
});




const pomoTimer = (() => {
  let x;
  let start = () => {
    playButton.disabled = true;
    stageButton.disabled = true;
    pauseButton.disabled = false;
    resetButton.disabled = false;
    checkmarkOne.disabled = true;
    checkmarkTwo.disabled = true;
    checkmarkThree.disabled = true;
    x = 
    setInterval(()=>{
      time = time - 1000
      if (time < 0 && currentStage=="work") {
        currentStage = "break"
        time = 300000;
        if (checkmarkThree.checked=="checked"){
          checkmarkFour.checked=true;
          clearInterval(x);
          console.log("Congratulations! You have completed the Pomodoro cycle.")
        }
        else if (checkmarkTwo.checked=="checked"){
          checkmarkThree.checked="checked"
        }
        else if (checkmarkOne.checked=="checked"){
          checkmarkTwo.checked="checked"
          checkmarkThree.disabled = false;
        }
        else {
          checkmarkOne.checked="checked"
          checkmarkTwo.disabled = false;
        }
        ;
        
        
      }
      else if (time < 0 && currentStage=="break"){
        currentStage = "work";
        time = 1500000;
      }
      status = "running";
      statusButton.textContent = status;
      let minutes = Math.floor((time % (1000*60*60))/(1000*60));
      let seconds = Math.floor((time % (1000*60))/ 1000);
      document.querySelector('#minutes').textContent = minutes;
      if (seconds < 10){
        document.querySelector('#seconds').textContent = "0"+ seconds;
        }
        else {
        document.querySelector('#seconds').textContent = seconds;
        };
      },1000)
    };

  let pause = () => {
    if (status == "running"){
      clearInterval(x);
      status = "paused"
      statusButton.textContent = status;
      }
    playButton.disabled = false;
    pauseButton.disabled = true;
    };
    
  let reset = () => {
    if (status == "running"){
      clearInterval(x);
      status = "paused";
      statusButton.textContent = status;
      }
    document.querySelector('#minutes').textContent = 25;
    document.querySelector('#seconds').textContent = "00";
    time = 1500000;
    currentStage = "work"
    stageButton.textContent = currentStage;
    playButton.disabled = false;
    pauseButton.disabled = true;
    resetButton.disabled = true;
    stageButton.disabled = false;
    checkmarkOne.checked = false; checkmarkOne.disabled = false;
    checkmarkTwo.checked = false; checkmarkTwo.disabled = true;
    checkmarkThree.checked = false; checkmarkThree.disabled = true;
    checkmarkFour.checked = false;
    };
    
    
  
  return {
    start,
    pause,
    reset,
  };
})();



playButton.addEventListener('click',pomoTimer.start);
pauseButton.addEventListener('click',pomoTimer.pause);
resetButton.addEventListener('click',pomoTimer.reset);
checkmarkOne.addEventListener('click',()=>{checkmarkOne.checked="checked";checkmarkOne.disabled=true;checkmarkTwo.disabled=false;});
checkmarkTwo.addEventListener('click',()=>{checkmarkTwo.checked="checked";checkmarkTwo.disabled=true;checkmarkThree.disabled=false;});
checkmarkThree.addEventListener('click',()=>{checkmarkThree.checked="checked";checkmarkThree.disabled=true;});

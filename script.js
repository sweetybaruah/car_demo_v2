var tab = document.querySelector('.tab')
var slide1 = document.querySelector('.slide1')
var slide2 = document.querySelector('.slide2')
var whiteCar = document.querySelector('.c_one')
var redCar = document.querySelector('.c_two')
var blueCar = document.querySelector('.c_three')
var bcarone = document.querySelector('.bcarone')
var bcartwo = document.querySelector('.bcartwo')
var bcarthree = document.querySelector('.bcarthree')
var close = document.querySelector('.close')



var videoContainer = document.querySelector('.videoContainer')
var video = videoContainer.querySelector('.video')
var toggle = videoContainer.querySelector('.toggle')
var sound = videoContainer.querySelector('.sound')
mute = true;



var playIcon = `<i class="material-icons">play_arrow</i>`;
var pauseIcon = `<i class="material-icons">pause</i>`;
var volumeUp = `<i class="material-icons">volume_up</i>`;
var volumeOff = `<i class="material-icons">volume_off</i>`;
var replayIcon = `<i class="material-icons">replay</i>`;
// c_one.addEventListener('click', slidechange, false)
// c_two.addEventListener('click', slidechange, false)
// c_three.addEventListener('click', slidechange, false)



tab.addEventListener('click', ()=>{
    console.log("kk")
    slide1.classList.add('hidden')
    setTimeout(()=>{
        video.volume = 0
        slide2.classList.remove('hidden')
        slide2.classList.add('flash')
        bcarone.classList.remove('hidden')
    },100)
})


function toviewRedcar(){
    redCar.classList.remove('fadeIn')
    redCar.classList.add('fadeOut')
    whiteCar.classList.add('fadeIn')
    blueCar.classList.add('fadeIn')
}
function toviewBluecar(){
    blueCar.classList.remove('fadeIn')
    blueCar.classList.add('fadeOut')
    whiteCar.classList.add('fadeIn')
    redCar.classList.add('fadeIn')
}
function toviewWhitecar(){
    whiteCar.classList.remove('fadeIn')
    whiteCar.classList.add('fadeOut')
    redCar.classList.add('fadeIn')
    blueCar.classList.add('fadeIn')
}

whiteCar.addEventListener('click', ()=>{
    toviewWhitecar();
    bcartwo.classList.add('hidden')
    bcarthree.classList.add('hidden')
    bcarone.classList.remove('hidden')
    bcarone.classList.add('lefttorightanimation')
})

redCar.addEventListener('click', ()=>{
    toviewRedcar();
    bcarone.classList.add('hidden')
    bcarthree.classList.add('hidden')
    bcartwo.classList.remove('hidden')
    bcartwo.classList.add('lefttorightanimation')
})

blueCar.addEventListener('click', ()=>{
    toviewBluecar();
    bcarone.classList.add('hidden')
    bcartwo.classList.add('hidden')
    bcarthree.classList.remove('hidden')
    bcarthree.classList.add('lefttorightanimation')
})
close.addEventListener('click', ()=>{
    console.log("kk")
    slide2.classList.add('hidden')
    slide1.classList.add('flash')
})


if (!mute) {
    video.muted = false;
    sound.innerHTML = volumeUp;
  } else {
    video.muted = true;
    sound.innerHTML = volumeOff;
  }
  
  toggle.innerHTML = video.paused ? playIcon : pauseIcon;
  function togglePlay(e) {
    // e.stopPropagation();
    var playOrPause = video.paused ? 'play' : 'pause';
    video[playOrPause]();
  }
  
  function updatePlayPause(e) {
    e.stopPropagation();
    var playPauseIcon = this.paused ? playIcon : pauseIcon;
    toggle.innerHTML = playPauseIcon;
  }
  
  function toggleSound(e) {
    e.stopPropagation();
    if (video.muted) {
        video.muted = false;
      sound.innerHTML = volumeUp;
      mute = 0;
    } else {
        video.muted = true;
      sound.innerHTML = volumeOff;
      mute = 1;
    }
  }
  
  video.addEventListener('play', updatePlayPause);
  video.addEventListener('pause', updatePlayPause);
  toggle.addEventListener('click', togglePlay);
  sound.addEventListener('click', toggleSound);
  
  function playMute() {
  
    if (!mute) {
        video.muted = false;
      sound.innerHTML = volumeUp;
    } else {
        video.muted = true;
      sound.innerHTML = volumeOff;
    }
    // console.log(video.paused);
  
  }
  playMute();
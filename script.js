//Checkboxes
function changeLabel(checkbox) {
  //get the label that belong to the checkbox
  var checkboxLabel = document.querySelector('[for=' + checkbox.name + '] span');

  if(checkbox.checked) {
    checkboxLabel.innerHTML = 'selected'
  } else {
    checkboxLabel.innerHTML= 'unselected'
  }
}

var checkboxes = document.querySelectorAll('.checkbox');
checkboxes.forEach(checkbox => {
  checkbox.onclick = function() {changeLabel(checkbox)};
});

//YouTube integration
//Load the IFrame Player API code
var tag = document.createElement('script');
  
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

//Create an <iframe> (and YouTube player) after the API code downloads
var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '390',
    width: '640',
    videoId: 'zTL4T_NVGhY',
    playerVars: {
      'controls': 0, 
      'rel' : 0
    }
  });
}

function startVideo() {
  player.playVideo();
}

function pauseVideo() {
  player.pauseVideo();
}

//When user clicks custom play button, start video
var playButton = document.getElementById('play-button');
playButton.onclick = function() {startVideo()};

//When user clicks custom pause button, pause video
var pauseButton = document.getElementById('pause-button');
pauseButton.onclick = function() {pauseVideo()};



const player = videojs('video');


function playVideo() {
  player.play();
}


function pauseVideo() {
  player.pause();
}


function stopVideo() {
  player.pause();
  player.currentTime(0);
}


function forward() {
  player.currentTime(player.currentTime() + 5);
}


function backward() {
  player.currentTime(player.currentTime() - 5);
}
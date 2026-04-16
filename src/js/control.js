let player;

document.addEventListener("DOMContentLoaded", function () {
  player = videojs('video');
});

// ▶ Play
function playVideo() {
  if (!player) return;
  player.play();
}

// ⏸ Pause
function pauseVideo() {
  if (!player) return;
  player.pause();
}

// ⏹ Stop
function stopVideo() {
  if (!player) return;
  player.pause();
  player.currentTime(0);
}

// +5 sec
function forward() {
  if (!player) return;
  player.currentTime(player.currentTime() + 5);
}

// -5 sec
function backward() {
  if (!player) return;
  player.currentTime(player.currentTime() - 5);
}
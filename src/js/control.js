<script>
const player = videojs('video');

// ▶ Play
function playVideo() {
  player.play();
}

// ⏸ Pause
function pauseVideo() {
  player.pause();
}

// ⏹ Stop
function stopVideo() {
  player.pause();
  player.currentTime(0);
}

// ⏩ +5 sec
function forward() {
  player.currentTime(player.currentTime() + 5);
}

// ⏪ -5 sec
function backward() {
  player.currentTime(player.currentTime() - 5);
}
</script>
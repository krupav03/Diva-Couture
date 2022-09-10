let videoEl = document.getElementById("videoShop");
let watchNow = document.getElementById("buttonWatch");
watchNow.addEventListener("click", function () {
  videoEl.muted = false;
});

function muteSound() {
  videoEl.muted = true;
  // videoEl.autoplay = false;
  // videoEl.loop = false;
}

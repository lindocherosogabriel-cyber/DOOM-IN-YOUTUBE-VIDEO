const ytVideoPlayer = document.querySelector(".ytd-watch-flexy");

const IFRAME = document.createElement("iframe");

IFRAME.src = "https://js-dos.com/DOOM/";
IFRAME.allowFullscreen = true;
IFRAME.style.width = ytVideoPlayer.style.width;
IFRAME.style.height = ytVideoPlayer.style.height;


ytVideoPlayer.replaceWith(IFRAME);

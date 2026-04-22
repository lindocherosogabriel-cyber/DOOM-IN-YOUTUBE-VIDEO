const escapePolicy = window.trustedTypes.createPolicy("default", {
  createHTML: (string) => string // Aqui você poderia filtrar o HTML, mas vamos passar direto
});

const ytVideoPlayer = document.querySelector(".video-stream");

const IFRAME = document.createElement("iframe");
IFRAME.src = "https://js-dos.com/DOOM/"
IFRAME.allowFullscreen = true;
IFRAME.style.width = "2000px";
IFRAME.style.height = "1000px";


ytVideoPlayer.replaceWith(IFRAME);

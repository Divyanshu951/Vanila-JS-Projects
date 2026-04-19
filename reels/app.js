// Make sure files have correct casing matching the filesystem
const playlist = [
    { src: "video/Video-0.mp4", desc: "45 SEC" },
    { src: "video/Video-1.mp4", desc: "Setting the tone for an amazing day. Let's get up and go! 🌅 #morning" },
    { src: "video/Video-2.mp4", desc: "Consistency is key. Focus and stay hydrated. Drink your water! 💧 #health" },
    { src: "video/Video-3.mp4", desc: "ISKA liya tho kar bhai" },
    { src: "video/Video-4.mp4", desc: "There is no better time than now. Time to crush those weekly goals! 🚀 #motivation" },
    { src: "video/Video-5.mp4", desc: "Setting the tone for an amazing day. Let's get up and go! 🌅 #morning" },
    { src: "video/Video-6.mp4", desc: "Consistency is key. Focus and stay hydrated. Drink your water! 💧 #health" },
    { src: "video/Video-9.mp4", desc: "ISKA liya tho kar bhai" },
    { src: "video/Video-10.mp4", desc: "There is no better time than now. Time to crush those weekly goals! 🚀 #motivation" },
    { src: "video/Video-11.mp4", desc: "Consistency is key. Focus and stay hydrated. Drink your water! 💧 #health" },
    { src: "video/Video-12.mp4", desc: "ISKA liya tho kar bhai" },
    { src: "video/Video-13.mp4", desc: "There is no better time than now. Time to crush those weekly goals! 🚀 #motivation" },
    { src: "video/Video-14.mp4", desc: "Consistency is key. Focus and stay hydrated. Drink your water! 💧 #health" },
    { src: "video/Video-15.mp4", desc: "ISKA liya tho kar bhai" },
    { src: "video/Video-16.mp4", desc: "There is no better time than now. Time to crush those weekly goals! 🚀 #motivation" }
];

const videoContainer = document.getElementById("video-container");
const player = document.getElementById("player");
const playOverlay = document.getElementById("play-overlay");
const startText = document.getElementById("start-text");
const infoOverlay = document.getElementById("info-overlay");
const actionsContainer = document.getElementById("actions-container");
const videoDesc = document.getElementById("video-desc");
const progressBar = document.getElementById("progress-bar");
const reelCount = document.getElementById("reel-count");
const successScreen = document.getElementById("success-screen");
const restartBtn = document.getElementById("restart-btn");
const btnShort = document.getElementById("btn-short");
const btnFull = document.getElementById("btn-full");
const startupScreen = document.getElementById("startup-screen");

let currentPlaylist = [];
let currentIndex = 0;
let isPlaying = false;
let hasStarted = false;

function updateUI() {
    reelCount.innerText = `${currentIndex + 1} / ${currentPlaylist.length}`;
    if (currentPlaylist[currentIndex]) {
        videoDesc.innerText = currentPlaylist[currentIndex].desc;
    }
}

function setupVideo(index) {
    if (currentPlaylist[index]) {
        player.src = currentPlaylist[index].src;
        updateUI();
    }
}

function playVideo(index) {
    if (index >= currentPlaylist.length) {
        successScreen.classList.add("show");
        player.classList.remove("playing");
        infoOverlay.classList.remove("show");
        actionsContainer.classList.remove("show");
        return;
    }

    // Setup next video
    player.classList.remove("playing");
    infoOverlay.classList.remove("show");
    actionsContainer.classList.remove("show");

    setTimeout(() => {
        setupVideo(index);

        player.play().then(() => {
            player.classList.add("playing");
            infoOverlay.classList.add("show");
            actionsContainer.classList.add("show");
            isPlaying = true;
            playOverlay.classList.add("hidden");
        }).catch(err => {
            console.error("Playback failed", err);
            // Show play button if auto-play fails
            playOverlay.classList.remove("hidden");
            startText.innerText = "Tap to resume";
            startText.style.display = "block";
            isPlaying = false;
        });
    }, 400); // Transition time
}

// Progress bar update
player.addEventListener("timeupdate", () => {
    if (player.duration) {
        const progress = (player.currentTime / player.duration) * 100;
        progressBar.style.width = `${progress}%`;
    }
});

// Video ending
player.addEventListener("ended", () => {
    currentIndex++;
    playVideo(currentIndex);
});

// Click to pause/play
videoContainer.addEventListener("click", () => {
    if (!hasStarted) {
        hasStarted = true;
        startText.style.display = "none";
        playOverlay.style.background = "transparent";
        playOverlay.querySelector('.play-btn').style.transform = "scale(0.8)";

        setTimeout(() => {
            playVideo(currentIndex);
        }, 200);
        return;
    }

    if (isPlaying) {
        player.pause();
        playOverlay.classList.remove("hidden");
        startText.style.display = "none"; // Keep text hidden on pause, only show big icon
    } else {
        player.play();
        playOverlay.classList.add("hidden");
    }
    isPlaying = !isPlaying;
});

// Restart
restartBtn.addEventListener("click", () => {
    successScreen.classList.remove("show");
    currentIndex = 0;
    playVideo(currentIndex);
});

// Mode Selection
btnShort.addEventListener("click", () => {
    currentPlaylist = playlist.slice(0, 10);
    startupScreen.classList.add("hidden");
    setupVideo(currentIndex);
});

btnFull.addEventListener("click", () => {
    currentPlaylist = playlist;
    startupScreen.classList.add("hidden");
    setupVideo(currentIndex);
});     
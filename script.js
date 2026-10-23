// ==========================================================================
// BOYFRIEND'S DAY WEBSITE SCRIPT
// ==========================================================================

// Exact 20 reasons provided
const reasons = [
  "I love how you can make me laugh even when I’m genuinely annoyed at you.",
  "I love how you ragebait me on purpose just because you know exactly how I’ll react.",
  "I love our late-night calls, even when they absolutely destroy my sleep schedule.",
  "I love how you push me to focus on my studies and my future instead of letting me get too comfortable.",
  "I love that you want me to have my own life, friends, goals, and dreams instead of making everything about us.",
  "I love how you somehow know when I’m overthinking before I even properly say what’s wrong.",
  "I love that I can tell you the most random things about my day and you’ll actually listen.",
  "I love how easily we can go from having a serious conversation to laughing like complete idiots.",
  "I love that you know how to annoy me in a way that somehow makes me love you even more.",
  "I love how hearing your voice can instantly make a bad day feel a little less horrible.",
  "I love that you’ve seen my dramatic, clingy, overthinking side and still choose me.",
  "I love how you challenge me instead of just agreeing with everything I say.",
  "I love that you make me want to become better, not because you think I’m not enough, but because you know I’m capable of more.",
  "I love the stupid little inside jokes that probably wouldn’t make sense to anyone else.",
  "I love how comfortable I am being completely weird around you.",
  "I love that sometimes we literally do nothing special, just talk, laugh, and somehow those become some of my favourite moments.",
  "I love how you can make me feel missed and wanted without needing some huge romantic gesture.",
  "I love that when something happens, you’re one of the first people I want to tell.",
  "I love that you’re not just someone I’m in love with, you’re someone I genuinely enjoy being around.",
  "And I love you because somehow, out of all the people in the world, you became my person."
];

// ==========================================================================
// ==========================================================================
// SECTION 2: SONGS & AUDIO CONFIGURATION
// Exactly mapped to the 6 songs in audio/ folder
// ==========================================================================
const songs = [
  {
    id: "sailor-song",
    title: "Sailor Song",
    artist: "Gigi Perez",
    audioSrc: "audio/sailor-song.mp3",
    fallbackSrc: "audio/sailor-song.mp3.mp3",
    lyrics: "I sleep so I can see you, 'cause I hate to wait so long",
    coverSvg: `<svg viewBox="0 0 100 100" fill="#EEDCC8"><rect width="100" height="100" fill="#440402"/><circle cx="50" cy="50" r="34" fill="#EEDCC8" opacity="0.85"/><circle cx="50" cy="50" r="14" fill="#440402"/><path d="M50 25 Q65 40 50 75" stroke="#440402" stroke-width="4.5" fill="none"/></svg>`
  },
  {
    id: "those-eyes",
    title: "Those Eyes",
    artist: "New West",
    audioSrc: "audio/those-eyes.mp3",
    fallbackSrc: "audio/those-eyes.mp3.mp3",
    lyrics: "And when we're apart, and I'm missing you,\nI close my eyes and all I see is you",
    coverSvg: `<svg viewBox="0 0 100 100" fill="#EEDCC8"><rect width="100" height="100" fill="#4a0502"/><circle cx="50" cy="50" r="30" stroke="#EEDCC8" stroke-width="3" fill="none"/><path d="M35 50 Q50 35 65 50 Q50 65 35 50" fill="#EEDCC8"/></svg>`
  },
  {
    id: "love-me-not",
    title: "Love Me Not",
    artist: "Ravyn Lenae",
    audioSrc: "audio/love-me-not.mp3",
    fallbackSrc: "audio/love-me-not.mp3.mp3",
    lyrics: "Oh, it's hard to see you, but I wish you were right here\nOh, it's hard to leave you when I get you everywhere",
    coverSvg: `<svg viewBox="0 0 100 100" fill="#EEDCC8"><rect width="100" height="100" fill="#3b0301"/><path d="M50 20 L60 40 L82 43 L66 58 L70 80 L50 69 L30 80 L34 58 L18 43 L40 40 Z" fill="#EEDCC8" opacity="0.9"/></svg>`
  },
  {
    id: "i-thought-i-saw-your-face-today",
    title: "I Thought I Saw Your Face Today",
    artist: "She & Him",
    audioSrc: "audio/i-thought-i-saw-your-face-today.mp3",
    fallbackSrc: "audio/i-thought-i-saw-your-face-today.mp3.mp3",
    lyrics: "And I couldn't help but fall in love again\nNo, I couldn't help but fall in love again",
    coverSvg: `<svg viewBox="0 0 100 100" fill="#EEDCC8"><rect width="100" height="100" fill="#4e0603"/><circle cx="50" cy="50" r="28" fill="#EEDCC8" opacity="0.3"/><circle cx="50" cy="50" r="18" fill="#EEDCC8" opacity="0.6"/><circle cx="50" cy="50" r="8" fill="#EEDCC8"/></svg>`
  },
  {
    id: "sparks",
    title: "Sparks",
    artist: "Coldplay",
    audioSrc: "audio/sparks.mp3",
    fallbackSrc: "audio/sparks.mp3.mp3",
    lyrics: "My heart is yours\nIt's you that I hold on to\nYeah, that's what I do",
    coverSvg: `<svg viewBox="0 0 100 100" fill="#EEDCC8"><rect width="100" height="100" fill="#440402"/><path d="M50 15 Q55 45 85 50 Q55 55 50 85 Q45 55 15 50 Q45 45 50 15" fill="#EEDCC8"/></svg>`
  },
  {
    id: "here-with-me",
    title: "Here With Me",
    artist: "d4vd",
    audioSrc: "audio/here-with-me.mp3",
    fallbackSrc: "audio/here-with-me.mp3.mp3",
    lyrics: "I don't care how long it takes\nAs long as I'm with you\nI've got a smile on my face",
    coverSvg: `<svg viewBox="0 0 100 100" fill="#EEDCC8"><rect width="100" height="100" fill="#520704"/><circle cx="50" cy="35" r="15" fill="#EEDCC8"/><path d="M25 80 Q50 55 75 80" fill="#EEDCC8"/></svg>`
  }
];

// Track opened / highlighted cards
const openedCards = new Set();
let currentSongIndex = 0;
const audioPlayer = new Audio();
audioPlayer.preload = "metadata";
let isFallbackAttempt = false;

document.addEventListener("DOMContentLoaded", () => {
  initPageTransitions();
  initAmbientHearts();
  initReasonMachine();
  setupNavigation();
  initMusicSection();
  initCouponSection();
  initQuizSection();
  initLettersSection();
  initQuestionSection();
  initFinaleSection();
  initSecretHeart();
  initSecretUnlock();
  initSecretThings();
  initSameSkySection();
  initFinalPageSection();
});

// ==========================================================================
// 1. AMBIENT BACKGROUND HEARTS
// ==========================================================================
function initAmbientHearts() {
  const container = document.getElementById("ambientHearts");
  if (!container) return;

  const heartIcons = [
    `<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>`,
    `<svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>`,
    `<svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>`
  ];

  if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const totalHearts = window.innerWidth <= 480 ? 7 : window.innerWidth <= 820 ? 10 : 16;
  for (let i = 0; i < totalHearts; i++) {
    const heartEl = document.createElement("div");
    heartEl.className = "ambient-heart";
    heartEl.innerHTML = heartIcons[Math.floor(Math.random() * heartIcons.length)];
    
    // Randomize initial position and timing
    heartEl.style.left = `${Math.random() * 100}%`;
    const duration = 12 + Math.random() * 16; // 12s - 28s
    const delay = Math.random() * 14;
    heartEl.style.animationDuration = `${duration}s`;
    heartEl.style.animationDelay = `-${delay}s`;
    heartEl.style.opacity = `${0.08 + Math.random() * 0.12}`;
    
    container.appendChild(heartEl);
  }
}

// ==========================================================================
// 2. NAVIGATION / TRANSITION
// ==========================================================================
function setupNavigation() {
  const transitionLinks = document.querySelectorAll(".next-section-btn, .page-nav-back, .kiss-continue-btn, .quiz-continue-btn");
  transitionLinks.forEach((link) => {
    link.addEventListener("click", () => {
      triggerHeartExplosion(window.innerWidth / 2, window.innerHeight / 2, 12);
    });
  });
}

// ==========================================================================
// 3. RANDOM REASON I LOVE YOU MACHINE
// ==========================================================================
let reasonClickIndex = 0;
let isDiceRolling = false;

function initReasonMachine() {
  const diceBtn = document.getElementById("diceBtn");
  const diceIcon = document.getElementById("diceIcon");
  const reasonText = document.getElementById("reasonText");

  if (!diceBtn) return;

  diceBtn.addEventListener("click", (e) => {
    if (isDiceRolling) return;
    isDiceRolling = true;
    diceBtn.disabled = true;
    diceBtn.classList.add("rolling");

    // Fade out current reason text during roll
    if (reasonText) {
      reasonText.classList.remove("fade-in");
      reasonText.classList.add("fade-out");
    }

    // Determine origin for heart bursts
    const rect = diceBtn.getBoundingClientRect();
    const originX = (e && e.clientX) ? e.clientX : (rect.left + rect.width / 2);
    const originY = (e && e.clientY) ? e.clientY : (rect.top + rect.height / 2);

    triggerHeartExplosion(originX, originY, 8);

    // Roll animation duration ~700ms
    setTimeout(() => {
      diceBtn.classList.remove("rolling");

      let nextText = "";
      if (reasonClickIndex < reasons.length) {
        // Clicks 1 through 20 (indexes 0 through 19)
        nextText = reasons[reasonClickIndex];
        reasonClickIndex++;
      } else {
        // Clicks 21 onwards
        nextText = "Okay okay, I could keep going forever. ❤️";
      }

      // Update text and reveal with smooth fade-in
      if (reasonText) {
        reasonText.textContent = nextText;
        reasonText.classList.remove("fade-out");
        void reasonText.offsetWidth; // Force reflow
        reasonText.classList.add("fade-in");
      }

      // Burst playful hearts near the reason box
      triggerHeartExplosion(originX, originY + 120, 10);

      diceBtn.disabled = false;
      isDiceRolling = false;
    }, 700);
  });
}

// ==========================================================================
// 5. HEART EXPLOSION EFFECT
// ==========================================================================
function triggerHeartExplosion(x, y, count = 10) {
  if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  if (window.innerWidth <= 480) count = Math.min(count, 8);
  const heartSvg = `<svg viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>`;

  for (let i = 0; i < count; i++) {
    const heart = document.createElement("div");
    heart.className = "burst-heart";
    heart.innerHTML = heartSvg;

    // Size variation
    const size = Math.floor(14 + Math.random() * 16);
    heart.style.width = `${size}px`;
    heart.style.height = `${size}px`;

    // Position at click coordinate
    heart.style.left = `${x - size / 2}px`;
    heart.style.top = `${y - size / 2}px`;

    // Calculate trajectory angle & distance
    const angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.5;
    const distance = 45 + Math.random() * 65;
    const tx = Math.cos(angle) * distance;
    const ty = Math.sin(angle) * distance - 25; // Slight upward bias
    const rot = (Math.random() - 0.5) * 80;

    heart.style.setProperty("--tx", `${tx}px`);
    heart.style.setProperty("--ty", `${ty}px`);
    heart.style.setProperty("--rot", `${rot}deg`);

    document.body.appendChild(heart);

    // Remove element after animation completes
    setTimeout(() => {
      if (heart.parentNode) {
        heart.parentNode.removeChild(heart);
      }
    }, 950);
  }
}

// ==========================================================================
// 6. PROGRESS BAR UPDATE
// ==========================================================================
function updateProgress() {
  const countEl = document.getElementById("unlockedCount");
  const fillEl = document.getElementById("progressFill");
  if (!countEl || !fillEl) return;

  const count = openedCards.size;
  const percentage = (count / reasons.length) * 100;

  countEl.textContent = count;
  fillEl.style.width = `${percentage}%`;
}

// ==========================================================================
// 7. KISSING EMOJI CELEBRATION
// ==========================================================================
function showKissCelebration() {
  const modal = document.getElementById("kissModal");
  const closeBtn = document.getElementById("kissCloseBtn");
  const backdrop = document.getElementById("kissModalBackdrop");

  if (!modal) return;

  modal.classList.add("active");
  modal.setAttribute("aria-hidden", "false");

  // Grand burst of hearts from the center
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;
  triggerHeartExplosion(centerX, centerY - 60, 24);
  setTimeout(() => triggerHeartExplosion(centerX, centerY - 60, 18), 350);

  const closeModal = () => {
    modal.classList.remove("active");
    modal.setAttribute("aria-hidden", "true");
  };

  if (closeBtn) closeBtn.onclick = closeModal;
  if (backdrop) backdrop.onclick = closeModal;

  const continueBtn = document.getElementById("kissContinueBtn");
  if (continueBtn) {
    continueBtn.onclick = () => {
      closeModal();
    };
  }
}

// ==========================================================================
// 8. SECTION 2: MUSIC PLAYER & AUDIO LOGIC
// ==========================================================================
function initMusicSection() {
  const tabsList = document.getElementById("songTabsList");
  const playBtn = document.getElementById("audioPlayBtn");
  const progressContainer = document.getElementById("audioProgressContainer");

  // Setup Audio Event Listeners
  setupAudioEventListeners();

  if (playBtn) {
    playBtn.addEventListener("click", togglePlayPause);
  }

  if (progressContainer) {
    progressContainer.addEventListener("click", seekAudio);
  }

  if (!tabsList) return;

  tabsList.innerHTML = "";

  // Render song selector buttons in exact order
  songs.forEach((song, index) => {
    const btn = document.createElement("button");
    btn.className = `song-tab-btn ${index === 0 ? "active" : ""}`;
    btn.setAttribute("type", "button");
    btn.setAttribute("role", "tab");
    btn.setAttribute("aria-selected", index === 0 ? "true" : "false");
    btn.innerHTML = `
      <div class="song-card-thumb">${song.coverSvg}</div>
      <div class="song-card-info">
        <span class="song-card-title">${song.title}</span>
        <span class="song-card-artist">${song.artist}</span>
      </div>
    `;

    btn.addEventListener("click", (e) => {
      // User explicitly clicked a song: select and play it!
      selectSong(index, e, true);
    });

    tabsList.appendChild(btn);
  });

  // Autoplay default selected song (Song 0: Sailor Song) immediately
  selectSong(0, null, true);

  // Fallback for browser autoplay policy
  const handleFirstInteraction = () => {
    if (audioPlayer.paused && audioPlayer.src) {
      audioPlayer.play().catch(() => {});
    }
    document.removeEventListener("click", handleFirstInteraction);
    document.removeEventListener("keydown", handleFirstInteraction);
    document.removeEventListener("touchstart", handleFirstInteraction);
  };
  document.addEventListener("click", handleFirstInteraction);
  document.addEventListener("keydown", handleFirstInteraction);
  document.addEventListener("touchstart", handleFirstInteraction);
}

// Setup audio listeners for time tracking, duration, play/pause and errors
function setupAudioEventListeners() {
  const progressFill = document.getElementById("audioProgressFill");
  const semicircleProgressFill = document.getElementById("semicircleProgressFill");
  const semicircleProgressDot = document.getElementById("semicircleProgressDot");
  const currentTimeEl = document.getElementById("audioCurrentTime");
  const durationEl = document.getElementById("audioDuration");
  const errorEl = document.getElementById("audioErrorMessage");

  // Track playback time
  audioPlayer.addEventListener("timeupdate", () => {
    if (!audioPlayer.duration || isNaN(audioPlayer.duration)) return;
    const ratio = Math.max(0, Math.min(1, audioPlayer.currentTime / audioPlayer.duration));
    const progress = ratio * 100;

    if (progressFill) progressFill.style.width = `${progress}%`;
    if (currentTimeEl) currentTimeEl.textContent = formatTime(audioPlayer.currentTime);

    // Update semicircular progress arc outlining vinyl semicircle inside the screen
    if (semicircleProgressFill) {
      const arcLength = 622.04; // PI * 198
      const offset = arcLength * (1 - ratio);
      semicircleProgressFill.style.strokeDashoffset = offset;
    }

    // Update semicircular scrubber indicator dot
    if (semicircleProgressDot) {
      const angle = -Math.PI / 2 + ratio * Math.PI; // -90deg (top) to +90deg (bottom)
      const cx = 198 * Math.cos(angle);
      const cy = 210 + 198 * Math.sin(angle);
      semicircleProgressDot.setAttribute("cx", cx.toFixed(2));
      semicircleProgressDot.setAttribute("cy", cy.toFixed(2));
    }
  });

  // Load duration metadata
  audioPlayer.addEventListener("loadedmetadata", () => {
    if (durationEl && !isNaN(audioPlayer.duration)) {
      durationEl.textContent = formatTime(audioPlayer.duration);
    }
  });

  audioPlayer.addEventListener("durationchange", () => {
    if (durationEl && !isNaN(audioPlayer.duration)) {
      durationEl.textContent = formatTime(audioPlayer.duration);
    }
  });

  // State changes
  audioPlayer.addEventListener("play", () => {
    updateAudioPlayerUIState(true);
    if (errorEl) errorEl.style.display = "none";
  });

  audioPlayer.addEventListener("pause", () => {
    updateAudioPlayerUIState(false);
  });

  audioPlayer.addEventListener("ended", () => {
    updateAudioPlayerUIState(false);
    if (progressFill) progressFill.style.width = "0%";
    if (currentTimeEl) currentTimeEl.textContent = "0:00";
  });

  // Error handling & fallback support
  audioPlayer.addEventListener("error", () => {
    const currentSong = songs[currentSongIndex];
    if (currentSong && currentSong.fallbackSrc && !isFallbackAttempt) {
      isFallbackAttempt = true;
      audioPlayer.src = currentSong.fallbackSrc;
      audioPlayer.play().catch(() => {
        showAudioError();
      });
    } else {
      showAudioError();
    }
  });
}

function showAudioError() {
  const errorEl = document.getElementById("audioErrorMessage");
  if (errorEl) {
    errorEl.style.display = "block";
  }
  updateAudioPlayerUIState(false);
}

// Select a song and optionally start playback
function selectSong(index, event, shouldPlay = true) {
  const isSameSong = index === currentSongIndex;
  currentSongIndex = index;
  isFallbackAttempt = false;

  const currentSong = songs[index];
  if (!currentSong) return;

  // Update tab buttons state
  const tabButtons = document.querySelectorAll(".song-tab-btn");
  tabButtons.forEach((btn, idx) => {
    const isActive = idx === index;
    btn.classList.toggle("active", isActive);
    btn.setAttribute("aria-selected", isActive ? "true" : "false");
  });

  if (event) {
    triggerHeartExplosion(event.clientX, event.clientY, 10);
  }

  // Update lyric card content
  updateSpotifyCard(index, true);

  // Reset time display & hide previous error
  const errorEl = document.getElementById("audioErrorMessage");
  if (errorEl) errorEl.style.display = "none";

  const progressFill = document.getElementById("audioProgressFill");
  const currentTimeEl = document.getElementById("audioCurrentTime");
  const durationEl = document.getElementById("audioDuration");

  if (!isSameSong) {
    if (progressFill) progressFill.style.width = "0%";
    if (currentTimeEl) currentTimeEl.textContent = "0:00";
    if (durationEl) durationEl.textContent = "0:00";
  }

  // Stop previous audio and load new song
  audioPlayer.src = currentSong.audioSrc;
  audioPlayer.load();

  if (shouldPlay) {
    const playPromise = audioPlayer.play();
    if (playPromise !== undefined) {
      playPromise.catch((err) => {
        // Handled gracefully via error event or browser policy
      });
    }
  }
}

// Toggle play / pause for current active song
function togglePlayPause() {
  const currentSong = songs[currentSongIndex];
  if (!currentSong) return;

  const errorEl = document.getElementById("audioErrorMessage");
  if (errorEl) errorEl.style.display = "none";

  // If player doesn't have src set yet, set it
  if (!audioPlayer.src || audioPlayer.src === "") {
    audioPlayer.src = currentSong.audioSrc;
  }

  if (audioPlayer.paused) {
    const playPromise = audioPlayer.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        // Handled by error listener
      });
    }
  } else {
    audioPlayer.pause();
  }
}

// Seek when clicking or dragging progress bar
function seekAudio(e) {
  const container = document.getElementById("audioProgressContainer");
  if (!container || !audioPlayer.duration || isNaN(audioPlayer.duration)) return;

  const rect = container.getBoundingClientRect();
  const clickX = (e.clientX || (e.touches && e.touches[0].clientX)) - rect.left;
  const percentage = Math.max(0, Math.min(1, clickX / rect.width));

  audioPlayer.currentTime = percentage * audioPlayer.duration;

  const progressFill = document.getElementById("audioProgressFill");
  if (progressFill) {
    progressFill.style.width = `${percentage * 100}%`;
  }
}

// Update Play/Pause Button Icon, Equalizer state, and Vinyl Record spinning state
function updateAudioPlayerUIState(isPlaying) {
  const playIcon = document.getElementById("playIconSvg");
  const pauseIcon = document.getElementById("pauseIconSvg");
  const equalizer = document.querySelector(".equalizer-bars");
  const vinylDiscSpin = document.getElementById("vinylDiscSpin");

  if (playIcon && pauseIcon) {
    if (isPlaying) {
      playIcon.style.display = "none";
      pauseIcon.style.display = "block";
    } else {
      playIcon.style.display = "block";
      pauseIcon.style.display = "none";
    }
  }

  if (equalizer) {
    equalizer.classList.toggle("paused", !isPlaying);
  }

  if (vinylDiscSpin) {
    vinylDiscSpin.classList.toggle("playing", isPlaying);
  }
}

function updateSpotifyCard(index, animate = true) {
  const song = songs[index];
  if (!song) return;

  const titleEl = document.getElementById("spotifySongTitle");
  const artistEl = document.getElementById("spotifyArtist");
  const lyricTextEl = document.getElementById("spotifyLyricText");
  const artBoxEl = document.getElementById("spotifyArtBox");

  if (!titleEl || !artistEl || !lyricTextEl || !artBoxEl) return;

  const lyricQuote = song.lyrics.startsWith('"') ? song.lyrics : `"${song.lyrics}"`;

  if (animate) {
    lyricTextEl.classList.add("fading");
    setTimeout(() => {
      titleEl.textContent = song.title;
      artistEl.textContent = song.artist;
      lyricTextEl.textContent = lyricQuote;
      artBoxEl.innerHTML = song.coverSvg;
      lyricTextEl.classList.remove("fading");
    }, 200);
  } else {
    titleEl.textContent = song.title;
    artistEl.textContent = song.artist;
    lyricTextEl.textContent = lyricQuote;
    artBoxEl.innerHTML = song.coverSvg;
  }
}

// Format seconds into MM:SS
function formatTime(seconds) {
  if (isNaN(seconds) || seconds < 0) return "0:00";
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
}

function scrollToMusicSection() {
  const musicSection = document.getElementById("musicScreen");
  if (musicSection) {
    musicSection.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

// ==========================================================================
// 9. SECTION 3: VINTAGE COUPON LOGIC & REDEMPTION
// ==========================================================================
let isCouponRedeemed = false;

function initCouponSection() {
  const vintageCoupon = document.getElementById("vintageCoupon");
  const redeemBtn = document.getElementById("couponRedeemBtn");

  if (vintageCoupon) {
    vintageCoupon.addEventListener("click", (e) => {
      // If clicking button specifically, let button handler deal with it
      if (e.target.closest("#couponRedeemBtn")) return;
      handleCouponRedemption(e);
    });

    vintageCoupon.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        handleCouponRedemption(e);
      }
    });
  }

  if (redeemBtn) {
    redeemBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      handleCouponRedemption(e);
    });
  }
}

function handleCouponRedemption(event) {
  const coupon = document.getElementById("vintageCoupon");
  const redeemBanner = document.getElementById("couponRedeemedBanner");
  const redeemBtn = document.getElementById("couponRedeemBtn");

  if (!coupon) return;

  // Pulse & lift animation
  coupon.classList.remove("redeemed-state");
  void coupon.offsetWidth; // Force reflow
  coupon.classList.add("redeemed-state");

  // Determine origin for heart bursts
  let originX, originY;
  if (event && event.clientX && event.clientY) {
    originX = event.clientX;
    originY = event.clientY;
  } else {
    const rect = coupon.getBoundingClientRect();
    originX = rect.left + rect.width / 2;
    originY = rect.top + rect.height / 2;
  }

  // Release burgundy hearts burst
  triggerHeartExplosion(originX, originY, 16);

  // Reveal redemption message and update button state
  if (!isCouponRedeemed) {
    isCouponRedeemed = true;

    if (redeemBanner) {
      redeemBanner.style.display = "block";
    }

    if (redeemBtn) {
      redeemBtn.classList.add("redeemed");
      const span = redeemBtn.querySelector("span");
      if (span) span.textContent = "REDEEMED ♡";
    }
  } else {
    // Secondary celebratory sparkles if already redeemed
    setTimeout(() => {
      triggerHeartExplosion(originX, originY - 30, 10);
    }, 200);
  }
}

function scrollToCouponSection() {
  const couponSection = document.getElementById("couponScreen");
  if (couponSection) {
    couponSection.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

// ==========================================================================
// 10. SECTION 4: BOYFRIEND TEST (QUIZ ENGINE)
// ==========================================================================
const quizQuestions = [
  {
    question: "What's my fav colour?",
    options: ["Red", "Blue", "Pink", "Brown"],
    correctIndex: 2 // C (Pink)
  },
  {
    question: "What is my biggest pet peeve?",
    options: ["Being ignored", "Being interrupted", "Being lied to", "Being late"],
    correctIndex: 3 // D (Being late)
  },
  {
    question: "What usually makes me upset the fastest?",
    options: ["Slow replies", "Arguments", "Feeling ignored", "Someone cancelling plans"],
    correctIndex: 3 // D (Someone cancelling plans)
  },
  {
    question: "What kind of date would I prefer?",
    options: ["Movie night", "Going somewhere fancy", "Day out", "Staying home and talking"],
    correctIndex: 2 // C (Day out)
  },
  {
    question: "When I'm upset, what do I usually want?",
    options: ["Space", "Gifts", "To talk it out", "Distraction"],
    correctIndex: 2 // C (To talk it out)
  },
  {
    question: "What is something I could talk about for hours?",
    options: ["Philosophy", "Movies/TV", "Random gossip", "My interests/hobbies"],
    correctIndex: 0 // A (Philosophy)
  },
  {
    question: "What kind of affection do I like most?",
    options: ["Words", "Quality time", "Small gifts", "Little thoughtful gestures"],
    correctIndex: 1 // B (Quality time)
  },
  {
    question: "What is my favorite thing about you?",
    options: ["Your face", "Your voice", "Your personality", "All of the above, idiot"],
    correctIndex: 3 // D (All of the above, idiot)
  },
  {
    question: "How well do you think you actually know me?",
    options: ["100% — I know everything", "Pretty well", "I know the basics", "I'm still figuring you out 😭"],
    correctIndex: 0 // A (100% — I know everything)
  }
];

let currentQuizIndex = 0;
let quizScore = 0;
let isAnswerLocked = false;

function initQuizSection() {
  const goToQuizBtn = document.getElementById("goToQuizBtn");
  const retakeBtn = document.getElementById("quizRetakeBtn");

  if (goToQuizBtn) {
    goToQuizBtn.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      triggerHeartExplosion(window.innerWidth / 2, window.innerHeight / 2, 12);
      triggerTypewriterTransition("quiz.html");
    });
  }

  if (retakeBtn) {
    retakeBtn.addEventListener("click", resetQuiz);
  }

  renderQuizQuestion();
}

function renderQuizQuestion() {
  const questionCard = document.getElementById("quizQuestionCard");
  const resultCard = document.getElementById("quizResultCard");
  const counterEl = document.getElementById("quizCounter");
  const fillEl = document.getElementById("quizMiniFill");
  const titleEl = document.getElementById("quizQuestionTitle");
  const optionsGrid = document.getElementById("quizOptionsGrid");

  if (!questionCard || !resultCard || !counterEl || !fillEl || !titleEl || !optionsGrid) return;

  document.body.classList.remove("quiz-result-active");
  const quizScreen = document.getElementById("quizScreen");
  if (quizScreen) quizScreen.classList.remove("result-mode");

  questionCard.style.display = "flex";
  resultCard.style.display = "none";
  isAnswerLocked = false;

  const currentQ = quizQuestions[currentQuizIndex];
  const totalQ = quizQuestions.length;

  counterEl.textContent = `Question ${currentQuizIndex + 1} / ${totalQ}`;
  fillEl.style.width = `${((currentQuizIndex + 1) / totalQ) * 100}%`;
  titleEl.textContent = currentQ.question;

  optionsGrid.innerHTML = "";
  const letters = ["A", "B", "C", "D"];

  currentQ.options.forEach((optText, optIndex) => {
    const btn = document.createElement("button");
    btn.className = "quiz-option-btn";
    btn.type = "button";
    btn.setAttribute("role", "radio");
    btn.setAttribute("aria-checked", "false");

    btn.innerHTML = `
      <span class="quiz-option-letter">${letters[optIndex]}</span>
      <span class="quiz-option-text">${optText}</span>
    `;

    btn.addEventListener("click", (e) => {
      handleOptionSelect(optIndex, btn, e);
    });

    optionsGrid.appendChild(btn);
  });
}

function handleOptionSelect(selectedIndex, buttonEl, event) {
  if (isAnswerLocked) return;
  isAnswerLocked = true;

  // Highlight selected option
  buttonEl.classList.add("selected");
  buttonEl.setAttribute("aria-checked", "true");

  const currentQ = quizQuestions[currentQuizIndex];
  if (selectedIndex === currentQ.correctIndex) {
    quizScore += 1;
  }

  // Small heart burst on click
  if (event) {
    triggerHeartExplosion(event.clientX, event.clientY, 8);
  }

  const questionCard = document.getElementById("quizQuestionCard");

  setTimeout(() => {
    if (questionCard) questionCard.classList.add("fading-out");

    setTimeout(() => {
      if (questionCard) questionCard.classList.remove("fading-out");

      if (currentQuizIndex < quizQuestions.length - 1) {
        currentQuizIndex++;
        renderQuizQuestion();
      } else {
        showQuizResults();
      }
    }, 280);
  }, 420);
}

function showQuizResults() {
  const questionCard = document.getElementById("quizQuestionCard");
  const resultCard = document.getElementById("quizResultCard");
  const iconEl = document.getElementById("resultReactionIcon");
  const scoreDisplayEl = document.getElementById("resultScoreDisplay");
  const messageEl = document.getElementById("resultMessageText");
  const quizScreen = document.getElementById("quizScreen");

  if (!questionCard || !resultCard || !iconEl || !scoreDisplayEl || !messageEl) return;

  document.body.classList.add("quiz-result-active");
  if (quizScreen) quizScreen.classList.add("result-mode");

  questionCard.style.display = "none";
  resultCard.style.display = "flex";

  scoreDisplayEl.textContent = `${quizScore} / ${quizQuestions.length}`;

  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;

  // Exact Score Logic & Messages
  if (quizScore >= 7) {
    // 7–9 / 9
    iconEl.textContent = "💋";
    messageEl.textContent = "Congratulations...!!!!\nYou know your bby pretty well~\nReward unlocked: 💋💋";
    triggerHeartExplosion(centerX, centerY - 40, 22);
    setTimeout(() => triggerHeartExplosion(centerX, centerY - 40, 16), 350);
  } else if (quizScore >= 4) {
    // 4–6 / 9
    iconEl.textContent = "😏";
    messageEl.textContent = "Not bad but NOT GOOD!\nstill I love my baby tho";
    triggerHeartExplosion(centerX, centerY - 40, 12);
  } else if (quizScore >= 1) {
    // 1–3 / 9
    iconEl.textContent = "🥺";
    messageEl.textContent = "🥺😔💔🥀";
    triggerHeartExplosion(centerX, centerY - 40, 6);
  } else {
    // 0 / 9
    iconEl.textContent = "🤨";
    messageEl.textContent = "wtf";
  }
}

function resetQuiz() {
  currentQuizIndex = 0;
  quizScore = 0;
  isAnswerLocked = false;
  document.body.classList.remove("quiz-result-active");
  const quizScreen = document.getElementById("quizScreen");
  if (quizScreen) quizScreen.classList.remove("result-mode");
  renderQuizQuestion();
}

function scrollToQuizSection() {
  const quizSection = document.getElementById("quizScreen");
  if (quizSection) {
    quizSection.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

// ==========================================================================
// 11. SECTION 5: OPEN WHEN... (LETTERS DATA & ENGINE)
// Paste your letter text inside the content fields below!
// ==========================================================================
const openWhenLetters = [
  {
    id: "missing-me",
    title: "Open when you're missing me",
    content: `My babee..

If you're reading this, I know your heart feels a little heavy right now. Mine does too, whenever the space between us starts to ache. I miss you just as much...the way you look at me, the sound of your voice, the quiet comfort of simply knowing you're near.

I wish I could be there to wrap my arms around you, rest my head on your chest, and remind you that this missing is only temporary. You’re not alone in it. Every time you feel that pull, know that I’m feeling it too, thinking of you, carrying you with me in every ordinary moment.

Remember the little things that are ours- the inside jokes, the way your hand finds mine without thinking, the way the world feels softer when you’re in it. Those aren’t gone. They’re just waiting for us to step back into them. Until then, hold onto this: you are deeply loved, completely wanted, and never far from my thoughts.

Close your eyes for a second. Picture me smiling at you the way I always do when you walk into a room. That’s still true. I’m still yours. And the next time we’re together, I’ll make sure you feel every bit of how much I’ve missed you too.

I love you.
Come back to me soon.`
  },
  {
    id: "bad-day",
    title: "Open when you're having a bad day",
    content: `My love,

I know today feels heavy. Whatever went wrong, whatever is weighing on you, I wish I could take it all away and hold you until it eases. Since I can’t be there right now, I’m sending this instead.

You don’t have to be strong every second. It’s okay to feel tired, frustrated, or just done with the day. I’m still here, still proud of you, still completely on your side. Nothing about this bad day changes how much I love you or how much you mean to me.

You’ve gotten through hard days before, and you’ll get through this one too. Take a deep breath. Let yourself rest. And know that when you’re ready, I’m waiting to listen, to comfort you, and to remind you that even on the worst days, you are never alone.

I love you through every bad day, every quiet struggle, and every moment in between.

Come back to me when you can. I’ll be right here.`
  },
  {
    id: "need-motivation",
    title: "Open when you need motivation",
    content: `Ponneyyy,

I know some days the fire feels low and everything seems harder than it should. If you’re reading this, it’s because you need a little push...and I’m here to give it to you.

You are capable of more than you give yourself credit for. I’ve watched you keep going when things got tough, show up even when you were tired, and still care deeply about the people and goals that matter to you. That strength doesn’t disappear just because today feels heavy.

You don’t have to do everything at once. Just take the next small step. That’s enough. And every time you do, remember I’m cheering for you, believing in you, and so proud of the man you are.

You’ve got this. I believe in you completely.

Now go show the day what you’re made of.

I love you, always.`
  },
  {
    id: "annoyed-at-me",
    title: "Open when you're annoyed at me",
    content: `My love,

I know you’re frustrated with me right now, and that’s okay. I don’t expect you to pretend everything is fine when it’s not. Whatever I did or said that upset you, I’m sorry it landed that way. I never want to be the reason your day feels heavier.

I’m not perfect, and sometimes I mess up. But please know that even when you’re annoyed, my love for you doesn’t change. I’m still on your side. I still care about how you feel. And I’m willing to listen, to understand, and to do better.

Take whatever time you need. When you’re ready, I’m here..ready to talk, ready to fix it, ready to hold you again. You’re allowed to be mad. Just don’t forget that under all of it, I still choose you.

I love you, even on the days you’re annoyed with me.
Especially then.`
  },
  {
    id: "how-much-i-love-you",
    title: "Open when you want to know how much I love you",
    content: `My love,

If you’re holding this letter, it means you need to feel it again-so let me say it clearly.

I love you more than the quiet moments, more than the easy days, more than the way my heart settles when you’re near. I love the way you think, the way you care, the way you make ordinary things feel special just by being in them. I love you in the soft hours and the hard ones. I love the version of you the world sees and the one only I get to know.

There is no version of my life that feels complete without you in it. You are my favorite person, my safest place, and the reason so many of my best memories exist.

So if you ever wonder how much-know that it’s deeper than words, steadier than moods, and still growing. I choose you. Again and again.

I love you completely.`
  }
];

const openedLetters = new Set();
let hasShownAllLettersModal = false;

function initLettersSection() {
  const letterBackBtn = document.getElementById("letterBackBtn");
  const allLettersCloseBtn = document.getElementById("allLettersCloseBtn");
  const allLettersBackdrop = document.getElementById("allLettersBackdrop");

  if (letterBackBtn) {
    letterBackBtn.addEventListener("click", closeFullscreenLetter);
  }

  if (allLettersCloseBtn) {
    allLettersCloseBtn.addEventListener("click", closeAllLettersModal);
  }

  if (allLettersBackdrop) {
    allLettersBackdrop.addEventListener("click", closeAllLettersModal);
  }

  // Close on Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      const overlay = document.getElementById("heartZoomOverlay");
      if (overlay && overlay.classList.contains("active")) {
        closeFullscreenLetter();
      }
      const allModal = document.getElementById("allLettersModal");
      if (allModal && allModal.classList.contains("active")) {
        closeAllLettersModal();
      }
    }
  });

  // Wire each of the 5 interactive heart buttons
  openWhenLetters.forEach((letter, index) => {
    const col = document.getElementById(`heartCol${index}`);
    const btn = document.getElementById(`heartBtn${index}`);

    if (btn && col) {
      const handleOpen = (e) => {
        openFullscreenLetter(index, col, btn, e);
      };

      btn.addEventListener("click", handleOpen);
      col.addEventListener("click", (e) => {
        if (e.target !== btn && !btn.contains(e.target)) {
          handleOpen(e);
        }
      });
      btn.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          handleOpen(e);
        }
      });
    }
  });
}

function openFullscreenLetter(index, colEl, btnEl, event) {
  const letter = openWhenLetters[index];
  if (!letter) return;

  // Track opened letter
  openedLetters.add(index);
  if (colEl) {
    colEl.classList.add("opened");
    colEl.classList.add("zooming");
  }

  // Fade out other four hearts
  const allCols = document.querySelectorAll(".heart-col-item");
  allCols.forEach((item) => {
    if (item !== colEl) {
      item.classList.add("faded");
    }
  });

  // Calculate coordinates for expanding animation
  let originX = window.innerWidth / 2;
  let originY = window.innerHeight / 2;
  let btnRect = null;

  if (btnEl) {
    btnRect = btnEl.getBoundingClientRect();
    originX = btnRect.left + btnRect.width / 2;
    originY = btnRect.top + btnRect.height / 2;
  } else if (event && event.clientX && event.clientY) {
    originX = event.clientX;
    originY = event.clientY;
  }

  // Floating heart burst at click origin
  triggerHeartExplosion(originX, originY, 14);

  // Zooming heart element animation
  const zoomer = document.getElementById("expandingHeartZoomer");
  if (zoomer && btnRect) {
    const zoomSize = 54;
    const startLeft = btnRect.left + (btnRect.width - zoomSize) / 2;
    const startTop = btnRect.top + (btnRect.height - zoomSize) / 2;
    const targetLeft = (window.innerWidth - zoomSize) / 2;
    const targetTop = (window.innerHeight - zoomSize) / 2;

    // Reset position instantly
    zoomer.style.transition = "none";
    zoomer.style.transform = `translate(${startLeft}px, ${startTop}px) scale(1)`;
    zoomer.classList.add("active");

    // Smoothly zoom toward center and expand to fill screen
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        zoomer.style.transition = "transform 0.75s cubic-bezier(0.2, 0.8, 0.2, 1), opacity 0.35s ease";
        zoomer.style.transform = `translate(${targetLeft}px, ${targetTop}px) scale(60)`;
      });
    });
  }

  // Populate letter modal
  const overlay = document.getElementById("heartZoomOverlay");
  const titleEl = document.getElementById("fullscreenLetterTitle");
  const textEl = document.getElementById("fullscreenLetterText");
  const tagEl = document.getElementById("letterReadTag");
  const scrollEl = document.querySelector(".fullscreen-letter-scroll");

  if (titleEl) titleEl.textContent = letter.title;
  if (textEl) textEl.textContent = letter.content;
  if (tagEl) tagEl.textContent = `Letter 0${index + 1} ♡`;
  if (scrollEl) scrollEl.scrollTop = 0;

  // Reveal Burgundy Fullscreen Overlay
  setTimeout(() => {
    if (overlay) {
      overlay.classList.add("active");
      overlay.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
    }
  }, 250);
}

function closeFullscreenLetter() {
  const overlay = document.getElementById("heartZoomOverlay");
  const zoomer = document.getElementById("expandingHeartZoomer");

  if (overlay) {
    overlay.classList.remove("active");
    overlay.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  if (zoomer) {
    zoomer.classList.remove("active");
    setTimeout(() => {
      zoomer.style.transform = "none";
      zoomer.style.transition = "none";
    }, 450);
  }

  // Restore all hearts
  const allCols = document.querySelectorAll(".heart-col-item");
  allCols.forEach((item) => {
    item.classList.remove("faded");
    item.classList.remove("zooming");
  });

  // Check if all letters opened
  if (openedLetters.size === openWhenLetters.length && !hasShownAllLettersModal) {
    hasShownAllLettersModal = true;
    setTimeout(() => {
      openAllLettersModal();
    }, 600);
  }
}

function openAllLettersModal() {
  const modal = document.getElementById("allLettersModal");
  if (modal) {
    modal.classList.add("active");
    modal.setAttribute("aria-hidden", "false");
    triggerHeartExplosion(window.innerWidth / 2, window.innerHeight / 2, 22);
    setTimeout(() => {
      triggerHeartExplosion(window.innerWidth / 2, window.innerHeight / 2, 14);
    }, 300);
  }
}

function closeAllLettersModal() {
  const modal = document.getElementById("allLettersModal");
  if (modal) {
    modal.classList.remove("active");
    modal.setAttribute("aria-hidden", "true");
  }
}

function scrollToLettersSection() {
  const lettersSection = document.getElementById("lettersScreen");
  if (lettersSection) {
    lettersSection.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

// ==========================================================================
// 12. PAGE: THE QUESTION LOGIC
// ==========================================================================
let thinkClickCount = 0;

function initQuestionSection() {
  const yesBtn = document.getElementById("yesBtn");
  const thinkBtn = document.getElementById("thinkBtn");
  const promptBox = document.getElementById("questionPromptBox");
  const successBox = document.getElementById("questionSuccessBox");
  const subtitleEl = document.getElementById("questionSubtitle");
  const continueBtn = document.getElementById("continueAfterYesBtn");

  if (!yesBtn || !thinkBtn) return;

  // Setup Background Music for Question Page
  setupQuestionAudio();

  // YES Button Click
  yesBtn.addEventListener("click", (e) => {
    // Grand celebration explosion of hearts
    const rect = yesBtn.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    
    triggerHeartExplosion(x, y, 25);
    setTimeout(() => triggerHeartExplosion(window.innerWidth / 2, window.innerHeight / 2 - 60, 20), 250);
    setTimeout(() => triggerHeartExplosion(window.innerWidth / 2, window.innerHeight / 2, 24), 500);

    // Fade away question prompt
    if (promptBox) {
      promptBox.style.opacity = "0";
      promptBox.style.transform = "scale(0.95)";
      promptBox.style.transition = "opacity 0.45s ease, transform 0.45s ease";
      
      setTimeout(() => {
        promptBox.style.display = "none";
        if (successBox) {
          successBox.style.display = "flex";
        }
      }, 450);
    }
  });

  // "Hmm... let me think" Button Click
  thinkBtn.addEventListener("click", (e) => {
    thinkClickCount++;
    const rect = thinkBtn.getBoundingClientRect();
    triggerHeartExplosion(rect.left + rect.width / 2, rect.top + rect.height / 2, 8);

    const thinkMessages = [
      "EXCUSE ME??? 😭",
      "There's only one correct answer here... ♡",
      "Don't test my patience mister... 😤♡",
      "Okay fine... take your time. 🙄♡"
    ];

    // Update playful response message
    if (subtitleEl) {
      subtitleEl.style.opacity = "0";
      setTimeout(() => {
        const msgIndex = Math.min(thinkClickCount - 1, thinkMessages.length - 1);
        subtitleEl.textContent = thinkMessages[msgIndex];
        subtitleEl.style.opacity = "1";
      }, 150);
    }

    // Playfully dodge / move nearby within screen bounds
    if (thinkClickCount < 4) {
      const angle = Math.random() * Math.PI * 2;
      const distance = 40 + Math.random() * 35;
      const moveX = Math.cos(angle) * distance;
      const moveY = (Math.sin(angle) * distance) * 0.7;
      thinkBtn.style.transform = `translate(${moveX}px, ${moveY}px) scale(0.96)`;
    } else {
      // Settle down after several clicks
      thinkBtn.style.transform = "translate(0, 0) scale(1)";
    }
  });

  if (continueBtn) {
    continueBtn.addEventListener("click", (e) => {
      triggerHeartExplosion(window.innerWidth / 2, window.innerHeight / 2, 14);
    });
  }
}

function setupQuestionAudio() {
  const musicWidget = document.getElementById("questionMusicWidget");
  const musicBtn = document.getElementById("questionMusicBtn");
  const tapPrompt = document.getElementById("musicTapPrompt");
  const equalizer = document.getElementById("questionEqualizer");

  if (!musicWidget) return;

  // Single audio instance with exact local MP3 path requested
  const primarySrc = "assets/audio/boyfriend-final.mp3";
  questionBgAudio = new Audio(primarySrc);
  questionBgAudio.preload = "metadata";
  questionBgAudio.loop = true;
  questionBgAudio.volume = 0.50; // ~50% volume

  // Error fallback handler for secondary local path if needed
  questionBgAudio.addEventListener("error", () => {
    if (questionBgAudio && questionBgAudio.src.includes("assets/")) {
      questionBgAudio.src = "audio/boyfriend-final.mp3";
      questionBgAudio.load();
      tryAutoplay();
    }
  });

  const setPlayingState = (isPlaying) => {
    if (musicBtn) {
      musicBtn.classList.toggle("playing", isPlaying);
    }
    if (equalizer) {
      equalizer.classList.toggle("paused", !isPlaying);
    }
    if (tapPrompt && isPlaying) {
      tapPrompt.style.display = "none";
    }
  };

  const tryAutoplay = () => {
    if (!questionBgAudio) return;
    const playPromise = questionBgAudio.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setPlayingState(true);
        })
        .catch(() => {
          // Autoplay was blocked by browser policy: reveal "♫ Tap for music"
          setPlayingState(false);
          if (tapPrompt) {
            tapPrompt.style.display = "inline-flex";
          }
        });
    }
  };

  // Play audio on tap/click if blocked
  const playFromInteraction = () => {
    if (questionBgAudio && questionBgAudio.paused) {
      questionBgAudio.play()
        .then(() => setPlayingState(true))
        .catch(() => {});
    }
  };

  if (tapPrompt) {
    tapPrompt.addEventListener("click", (e) => {
      e.stopPropagation();
      playFromInteraction();
    });
  }

  if (musicBtn) {
    musicBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      if (!questionBgAudio) return;
      if (questionBgAudio.paused) {
        questionBgAudio.play()
          .then(() => setPlayingState(true))
          .catch(() => {});
      } else {
        questionBgAudio.pause();
        setPlayingState(false);
      }
    });
  }

  // Attempt initial autoplay
  tryAutoplay();

  // Screen click fallback if blocked
  const onScreenClick = () => {
    if (questionBgAudio && questionBgAudio.paused) {
      playFromInteraction();
    }
    window.removeEventListener("click", onScreenClick);
    window.removeEventListener("touchstart", onScreenClick);
  };
  window.addEventListener("click", onScreenClick, { once: true });
  window.addEventListener("touchstart", onScreenClick, { once: true });

  // Clean shutdown when leaving page
  const stopAudioCleanly = () => {
    if (questionBgAudio) {
      questionBgAudio.pause();
      questionBgAudio.currentTime = 0;
      questionBgAudio = null;
    }
  };

  window.addEventListener("pagehide", stopAudioCleanly);
  window.addEventListener("beforeunload", stopAudioCleanly);

  // Stop audio on explicit page navigation link clicks
  const navLinks = document.querySelectorAll("a, .page-nav-back");
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      stopAudioCleanly();
    });
  });
}

// ==========================================================================
// 13. PAGE: ONE MORE THING... & CINEMATIC FINALE TRANSITION LOGIC
// ==========================================================================
function initFinaleSection() {
  const startBtn = document.getElementById("startFinaleBtn");
  const startBox = document.getElementById("finaleStartBox");
  const overlay = document.getElementById("finaleOverlay");
  const heartCenter = document.getElementById("finaleHeartCenter");
  const topNav = document.getElementById("topNav");
  const flashScreen = document.getElementById("finaleFlashScreen");
  const particlesContainer = document.getElementById("finaleParticles");

  const text1 = document.getElementById("finaleText1");
  const text2 = document.getElementById("finaleText2");
  const text3 = document.getElementById("finaleText3");
  const text4 = document.getElementById("finaleText4");

  if (!startBtn || !overlay) return;

  // Populate subtle ambient edge particles for Step 5
  if (particlesContainer) {
    particlesContainer.innerHTML = "";
    const particleSvg = `<svg viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>`;
    const positions = [
      { left: "8%", top: "15%" },
      { left: "88%", top: "20%" },
      { left: "12%", top: "75%" },
      { left: "85%", top: "80%" },
      { left: "5%", top: "45%" },
      { left: "92%", top: "50%" }
    ];

    positions.forEach((pos, i) => {
      const p = document.createElement("div");
      p.className = "finale-particle";
      p.innerHTML = particleSvg;
      p.style.left = pos.left;
      p.style.top = pos.top;
      p.style.animationDelay = `${i * 1.2}s`;
      particlesContainer.appendChild(p);
    });
  }

  let isFinaleStarted = false;

  startBtn.addEventListener("click", (e) => {
    if (isFinaleStarted) return;
    isFinaleStarted = true;

    // Small heart explosion at button click
    const rect = startBtn.getBoundingClientRect();
    triggerHeartExplosion(rect.left + rect.width / 2, rect.top + rect.height / 2, 12);

    // Lock screen scrolling to prevent skipping
    document.body.style.overflow = "hidden";

    // Hide top navigation back button
    if (topNav) {
      topNav.style.opacity = "0";
      topNav.style.transition = "opacity 0.8s ease";
      topNav.style.pointerEvents = "none";
    }

    // STEP 1 — EVERYTHING FADES (0s - 1.5s)
    if (startBox) {
      startBox.style.opacity = "0";
      startBox.style.transform = "scale(0.95)";
    }

    // Activate dark overlay
    overlay.classList.add("active");

    // STEP 2 — SILENCE / PAUSE (Hold dark screen until 2.4s)

    // STEP 3 — TINY HEART (2.4s - 3.7s)
    setTimeout(() => {
      if (heartCenter) {
        heartCenter.classList.add("visible");
      }
    }, 2400);

    // STEP 4 — MESSAGE: "Wait..." -> pause -> "I have one last question for you."
    setTimeout(() => {
      if (heartCenter) {
        heartCenter.classList.add("dimmed");
      }

      if (text1) {
        text1.style.display = "block";
        requestAnimationFrame(() => {
          text1.classList.add("fade-in");
        });
      }
    }, 3700);

    // Transition from Text 1 ("Wait...") to Text 2 ("I have one last question for you.") - Extended +1s
    setTimeout(() => {
      if (text1) {
        text1.classList.remove("fade-in");
        text1.classList.add("fade-out");
      }

      setTimeout(() => {
        if (text1) text1.style.display = "none";
        if (text2) {
          text2.style.display = "block";
          requestAnimationFrame(() => {
            text2.classList.add("fade-in");
          });
        }
      }, 700);
    }, 5700); // 4700ms -> 5700ms (+1s)

    // STEP 5 — BUILD ANTICIPATION: Transition from Text 2 to Text 3 ("Okay...") - Extended +1s
    setTimeout(() => {
      if (text2) {
        text2.classList.remove("fade-in");
        text2.classList.add("fade-out");
      }

      // Subtly brighten screen background & reveal edge particles
      overlay.classList.add("brighten");
      if (particlesContainer) {
        particlesContainer.classList.add("visible");
      }

      setTimeout(() => {
        if (text2) text2.style.display = "none";
        if (text3) {
          text3.style.display = "block";
          requestAnimationFrame(() => {
            text3.classList.add("fade-in");
          });
        }
      }, 700);
    }, 7800); // 5800ms -> 7800ms (+2s cumulative)

    // Transition from Text 3 ("Okay...") to Text 4 ("Here goes...") - Extended +1s
    setTimeout(() => {
      if (text3) {
        text3.classList.remove("fade-in");
        text3.classList.add("fade-out");
      }

      setTimeout(() => {
        if (text3) text3.style.display = "none";
        if (text4) {
          text4.style.display = "block";
          requestAnimationFrame(() => {
            text4.classList.add("fade-in");
          });
        }
      }, 650);
    }, 9800); // 6800ms -> 9800ms (+3s cumulative)

    // STEP 6 — FINAL TRANSITION: Fade completely to #EEDCC8 & Navigate - Extended +1s
    setTimeout(() => {
      if (text4) {
        text4.classList.remove("fade-in");
        text4.classList.add("fade-out");
      }

      if (flashScreen) {
        flashScreen.classList.add("active");
      }

      // Smooth navigation to question.html when solid cream flash finishes
      setTimeout(() => {
        window.location.href = "question.html";
      }, 850);

    }, 11800);
  });
}

// ==========================================================================
// 14. SECRET PATHWAY & EASTER EGG LOGIC
// ==========================================================================

// 1. Secret Heart on Homepage
function initSecretHeart() {
  const heartBtn = document.getElementById("secretHeart");
  if (!heartBtn) return;

  const handleSecretHeartClick = (e) => {
    // Pulse animation & spark
    heartBtn.classList.remove("clicked-pulse");
    void heartBtn.offsetWidth;
    heartBtn.classList.add("clicked-pulse");

    // Trigger heart explosion
    const rect = heartBtn.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    triggerHeartExplosion(x, y, 14);

    // Save unlock flag in localStorage
    localStorage.setItem("secretHeartUnlocked", "true");

    // Smoothly redirect to password unlock screen
    setTimeout(() => {
      window.location.href = "secret-unlock.html";
    }, 650);
  };

  heartBtn.addEventListener("click", handleSecretHeartClick);
  heartBtn.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleSecretHeartClick(e);
    }
  });
}

// 2. Password Unlock Form Handler
function initSecretUnlock() {
  const form = document.getElementById("secretPasswordForm");
  const input = document.getElementById("secretPassInput");
  const errorMsg = document.getElementById("secretErrorMsg");
  const submitBtn = document.getElementById("secretSubmitBtn");

  if (!form || !input) return;

  const checkPassword = () => {
    const val = input.value.trim().toLowerCase();
    if (!val) {
      if (errorMsg) {
        errorMsg.textContent = "Please enter the date ♡";
        errorMsg.style.display = "block";
      }
      return;
    }

    // Flexible answer validation
    // Accepted: 03 September, September 03, 03/09, 03-09, September 3, 3 September, etc.
    const isSept3 =
      val === "03 september" ||
      val === "september 03" ||
      val === "september 3" ||
      val === "3 september" ||
      val === "03/09" ||
      val === "03-09" ||
      val === "3/9" ||
      val === "3-9" ||
      val === "03/9" ||
      val === "3/09" ||
      val === "sept 3" ||
      val === "3 sept" ||
      val === "03 sept" ||
      val === "sept 03" ||
      val.includes("september 3") ||
      val.includes("3 september") ||
      val.includes("03 september") ||
      val.includes("september 03") ||
      val.includes("03/09") ||
      val.includes("03-09") ||
      val.includes("3/9") ||
      val.includes("3-9");

    if (isSept3) {
      if (errorMsg) errorMsg.style.display = "none";
      sessionStorage.setItem("secretAuthenticated", "true");

      // Celebration burst
      const rect = submitBtn ? submitBtn.getBoundingClientRect() : { left: window.innerWidth / 2, top: window.innerHeight / 2, width: 0, height: 0 };
      triggerHeartExplosion(rect.left + rect.width / 2, rect.top + rect.height / 2, 20);

      setTimeout(() => {
        window.location.href = "secret-coupon.html";
      }, 500);
    } else {
      if (errorMsg) {
        errorMsg.textContent = "Nope 😭 Try again...";
        errorMsg.style.display = "block";
        errorMsg.classList.remove("shakeError");
        void errorMsg.offsetWidth;
      }
    }
  };

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkPassword();
  });

  if (submitBtn) {
    submitBtn.addEventListener("click", (e) => {
      e.preventDefault();
      checkPassword();
    });
  }
}

// 3. Secret Page 3: Things I Don't Tell You Enough (Sequential sentence reveal)
const thingsSentences = [
  "I'm proud of you.",
  "I notice the little things you do.",
  "Your voice makes bad days feel better.",
  "I love listening to you talk about random things.",
  "I'm really glad I met you.",
  "And I'm really glad the person I fell in love with became my person. ♡"
];
let currentThingIndex = 0;

function initSecretThings() {
  const card = document.getElementById("thingsCard");
  const textEl = document.getElementById("thingsMessageText");
  const counterEl = document.getElementById("thingsCounter");
  const hintEl = document.getElementById("thingsTapHint");
  const continueBox = document.getElementById("thingsContinueBox");

  if (!card || !textEl) return;

  const updateThing = (e) => {
    currentThingIndex = (currentThingIndex + 1) % thingsSentences.length;

    // Pulse & particle explosion
    const rect = card.getBoundingClientRect();
    const x = e && e.clientX ? e.clientX : rect.left + rect.width / 2;
    const y = e && e.clientY ? e.clientY : rect.top + rect.height / 2;
    triggerHeartExplosion(x, y, 10);

    textEl.classList.add("anim-out");

    setTimeout(() => {
      textEl.textContent = thingsSentences[currentThingIndex];
      if (counterEl) {
        counterEl.textContent = `${currentThingIndex + 1} / ${thingsSentences.length}`;
      }
      if (hintEl) {
        if (currentThingIndex === thingsSentences.length - 1) {
          hintEl.textContent = "Always yours ♡";
          if (continueBox) {
            continueBox.style.opacity = "1";
            continueBox.style.pointerEvents = "auto";
          }
        } else {
          hintEl.textContent = "Tap anywhere to reveal next... ♡";
        }
      }
      textEl.classList.remove("anim-out");
      textEl.classList.add("anim-in");
    }, 220);
  };

  card.addEventListener("click", updateThing);
  card.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      updateThing(e);
    }
  });
}

// ==========================================================================
// 15. PAGE: UNDER THE SAME SKY (CONSTELLATION & STAR MESSAGES)
// ==========================================================================
const skyMessages = [
  {
    id: "star-1",
    title: "Star 01 ♡",
    body: `<p>You’re my yellow- my source of sunshine, happiness, and pure joy.</p>
<p>You’re my favourite person, my hero, my safe place. Being with you feels like standing in warm light: soft, steady, and full of quiet optimism.</p>
<p>You bring warmth when everything else feels cold, light when the days get heavy, and a kind of unconditional support that lets me be completely myself.</p>
<p>Like the colour yellow itself, you make ordinary moments brighter just by being there.</p>
<p>You’re the one I reach for, the one who feels like home and happiness at the same time.</p>`
  },
  {
    id: "star-2",
    title: "Star 02 ♡",
    body: `<p>Because at the end of the day you're the person I want to come home to.</p>
<p>You're the person I want to tell how my day went.</p>
<p>You're the person I want to share my happiness, sadness, frustration, and success with.</p>`
  },
  {
    id: "star-3",
    title: "Star 03 ♡",
    body: `<p>for as long<br>as the sun sets<br>and the moon rises<br>it is you<br>that i want<br>in all of my tomorrows.</p>
<div class="star-attribution">— ida banks</div>`
  },
  {
    id: "star-4",
    title: "Star 04 ♡",
    body: `<p>How could I ever get tired of looking at you?</p>
<p>You are so beautiful to me, but it's never only about the way you look. It's the way you make me laugh, the way you care, the way you make ordinary moments feel special.</p>
<p>I love you, and somehow I still feel lucky every time I remember that I get to.</p>
<p>Out of all the people I could have met, somehow I found you.</p>
<p>And I really, really like my choice. ♡</p>`
  },
  {
    id: "star-5",
    title: "Star 05 ♡",
    body: `<p>I never realized how much you felt like home to me until I found myself thinking about how much I wish you were with me right now, thinking about how I want to experience every adventure of life I go through with you by my side.</p>
<p>The saying “home is whenever I am with you” has never been more clear to me. You are my home and I am homesick without you.</p>`
  },
  {
    id: "star-6",
    title: "Star 06 ♡",
    body: `<p>You were an unexpected surprise, the defining moment. The collision of stars that slammed into me hard and sent my neat little world plummeting into the ocean.</p>
<p>I never expected it to be you, you know? But it is you. It’s all you. And now there’s no looking back.</p>`
  },
  {
    id: "star-7",
    title: "Star 07 ♡",
    isCinematicLarge: true,
    body: `<div class="cinematic-large-quote">And I'll meet you where the sky ends,<br>where eternity begins.</div>`
  },
  {
    id: "star-8",
    title: "Star 08 ♡",
    isCinematicLarge: true,
    body: `<div class="cinematic-large-quote">It'd be INSANE not to love you.</div>`
  },
  {
    id: "star-9",
    title: "Star 09 — The Special One ♡",
    isSpecial: true,
    body: `<p>And I’d choose you;</p>
<p>in a hundred lifetimes,<br>in a hundred worlds,<br>In any version of reality,</p>
<p>I’d find you and<br>I’d choose you.</p>
<div class="special-final-emphasis">I'D CHOOSE YOU.</div>`
  }
];

const openedSkyStars = new Set();
let nightSkyBgAudio = null;
let userManuallyPausedNightSkyBgm = false;

function initSameSkySection() {
  const container = document.getElementById("constellationContainer");
  const overlay = document.getElementById("starMessageOverlay");
  const backBtn = document.getElementById("starBackBtn");

  if (!container) return;

  // Handle smooth white flash entrance when navigating from Boyfriend Test star click
  let fromWhiteFlash = false;
  try {
    fromWhiteFlash = sessionStorage.getItem("fromStarWhiteFlash") === "true";
    sessionStorage.removeItem("fromStarWhiteFlash");
  } catch(e){}

  if (fromWhiteFlash) {
    const entrance = document.createElement("div");
    entrance.className = "same-sky-white-entrance";
    document.body.appendChild(entrance);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        entrance.classList.add("fade-out");
        setTimeout(() => {
          if (entrance.parentNode) entrance.parentNode.removeChild(entrance);
        }, 750);
      });
    });
  }

  // Initialize or configure Night Sky Background Audio
  const musicBtn = document.getElementById("skyMusicBtn");
  const musicLabel = document.getElementById("skyMusicLabel");
  const musicIcon = document.getElementById("skyMusicIcon");

  if (!nightSkyBgAudio) {
    const primarySrc = "assets/audio/night-sky-bgm.mp3";
    nightSkyBgAudio = new Audio(primarySrc);
    nightSkyBgAudio.preload = "metadata";
    nightSkyBgAudio.loop = true;
    nightSkyBgAudio.volume = 0.85; // Set volume to 85%

    // Error fallback handler for secondary local path if needed
    nightSkyBgAudio.addEventListener("error", () => {
      if (nightSkyBgAudio && nightSkyBgAudio.src.includes("assets/")) {
        nightSkyBgAudio.src = "audio/night-sky-bgm.mp3";
        nightSkyBgAudio.load();
        tryAutoplay();
      }
    });
  } else {
    nightSkyBgAudio.loop = true;
    nightSkyBgAudio.volume = 0.85;
  }

  const setMusicPlayingState = (isPlaying) => {
    if (musicBtn) {
      musicBtn.classList.toggle("playing", isPlaying);
    }
    if (musicLabel) {
      musicLabel.textContent = isPlaying ? "Music" : "Paused";
    }
  };

  const tryAutoplay = () => {
    if (!nightSkyBgAudio || userManuallyPausedNightSkyBgm) return;
    const playPromise = nightSkyBgAudio.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setMusicPlayingState(true);
        })
        .catch(() => {
          setMusicPlayingState(false);
        });
    }
  };

  const playFromInteraction = () => {
    if (nightSkyBgAudio && nightSkyBgAudio.paused && !userManuallyPausedNightSkyBgm) {
      nightSkyBgAudio.play()
        .then(() => {
          setMusicPlayingState(true);
        })
        .catch(() => {});
    }
  };

  if (musicBtn) {
    musicBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      if (!nightSkyBgAudio) return;
      if (nightSkyBgAudio.paused) {
        userManuallyPausedNightSkyBgm = false;
        nightSkyBgAudio.play()
          .then(() => setMusicPlayingState(true))
          .catch(() => {});
      } else {
        userManuallyPausedNightSkyBgm = true;
        nightSkyBgAudio.pause();
        setMusicPlayingState(false);
      }
    });
  }

  // Attempt initial autoplay on section init
  tryAutoplay();

  // Screen click/touch fallback if autoplay was blocked
  const onScreenFirstClick = () => {
    playFromInteraction();
    window.removeEventListener("click", onScreenFirstClick);
    window.removeEventListener("touchstart", onScreenFirstClick);
  };
  window.addEventListener("click", onScreenFirstClick, { once: true });
  window.addEventListener("touchstart", onScreenFirstClick, { once: true });

  // Attach star click listeners
  for (let i = 0; i < 9; i++) {
    const starBtn = document.getElementById(`starBtn${i}`);
    if (starBtn) {
      starBtn.addEventListener("click", (e) => {
        onStarClick(i, starBtn, e);
      });
    }
  }

  // Back button event listener inside message screen
  if (backBtn) {
    backBtn.addEventListener("click", () => {
      closeStarMessageOverlay();
    });
  }

  // Stop BGM cleanly ONLY when user clicks the final envelope / continue button to navigate away
  const continueBtn = document.querySelector(".sky-continue-btn, .sky-envelope-nav-btn");
  if (continueBtn) {
    continueBtn.addEventListener("click", () => {
      if (nightSkyBgAudio) {
        nightSkyBgAudio.pause();
        nightSkyBgAudio.currentTime = 0;
      }
    });
  }

  // Stop BGM if user clicks the top nav "← Boyfriend Test" back button
  const topBackBtn = document.getElementById("skyBackNavBtn");
  if (topBackBtn) {
    topBackBtn.addEventListener("click", () => {
      if (nightSkyBgAudio) {
        nightSkyBgAudio.pause();
        nightSkyBgAudio.currentTime = 0;
      }
    });
  }

  // Allow closing overlay on Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && overlay && overlay.classList.contains("active")) {
      closeStarMessageOverlay();
    }
  });
}

function initBackgroundTwinkleStars() {
  const container = document.getElementById("bgStarsTwinkleLayer");
  if (!container) return;

  container.innerHTML = "";

  // Coordinates of visible background stars in the uploaded image
  const starCoords = [
    { x: 14.0, y: 22.0, lg: true },
    { x: 36.5, y: 42.5, lg: true },
    { x: 32.0, y: 71.5, lg: true },
    { x: 88.5, y: 27.5, lg: true },
    { x: 74.0, y: 55.5, lg: true },
    { x: 7.0,  y: 15.0, lg: false },
    { x: 92.5, y: 12.0, lg: false },
    { x: 55.5, y: 16.0, lg: false },
    { x: 72.0, y: 10.5, lg: false },
    { x: 22.5, y: 32.0, lg: false },
    { x: 27.0, y: 50.0, lg: false },
    { x: 81.0, y: 52.5, lg: false },
    { x: 67.5, y: 85.5, lg: false },
    { x: 28.0, y: 15.0, lg: false },
    { x: 79.0, y: 20.0, lg: false },
    { x: 44.0, y: 18.0, lg: false },
    { x: 63.0, y: 14.0, lg: false },
    { x: 18.0, y: 45.0, lg: false },
    { x: 85.0, y: 38.0, lg: false }
  ];

  starCoords.forEach((st, i) => {
    const starEl = document.createElement("div");
    starEl.className = `bg-twinkle-star ${st.lg ? "lg" : ""}`;
    starEl.style.left = `${st.x}%`;
    starEl.style.top = `${st.y}%`;
    starEl.style.animationDuration = `${3.2 + (i % 5) * 0.9}s`;
    starEl.style.animationDelay = `${(i % 7) * 0.6}s`;
    container.appendChild(starEl);
  });
}

function onStarClick(index, starBtn, event) {
  const data = skyMessages[index];
  if (!data) return;

  // Track opened star
  openedSkyStars.add(index);

  // Determine origin coordinates for zoomer
  const btnRect = starBtn.getBoundingClientRect();
  const originX = btnRect.left + btnRect.width / 2;
  const originY = btnRect.top + btnRect.height / 2;

  // Trigger floating heart explosion at star location
  triggerHeartExplosion(originX, originY, index === 8 ? 16 : 10);

  // STEP 1 — CLICK (~0.5s): Star gently glows brighter & other stars dim
  starBtn.classList.add("active-glowing");
  const allStars = document.querySelectorAll(".sky-star-btn");
  allStars.forEach((btn, i) => {
    if (i !== index) {
      btn.classList.add("dimmed");
    }
  });

  // If Star 9 (Special center star)
  const container = document.getElementById("constellationContainer");
  if (index === 8 && container) {
    container.classList.add("pulse-special");
  }

  const zoomer = document.getElementById("expandingStarZoomer");
  const zoomerDot = zoomer ? zoomer.querySelector(".zoomer-star-dot") : null;

  if (zoomer && zoomerDot) {
    const zoomSize = index === 8 ? 48 : 36;
    const startLeft = btnRect.left + (btnRect.width - zoomSize) / 2;
    const startTop = btnRect.top + (btnRect.height - zoomSize) / 2;
    const targetLeft = (window.innerWidth - zoomSize) / 2;
    const targetTop = (window.innerHeight - zoomSize) / 2;

    // Initial state: white #ffffff star origin
    zoomer.style.transition = "none";
    zoomer.style.transform = `translate(${startLeft}px, ${startTop}px) scale(1)`;
    zoomerDot.style.transition = "none";
    zoomerDot.style.backgroundColor = "#ffffff";
    zoomerDot.style.boxShadow = "0 0 30px 10px rgba(255, 255, 255, 0.95)";
    zoomer.classList.add("active");

    // Quick Zoom & White Flash (~0.55s)
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        const scaleVal = index === 8 ? 75 : 65;
        zoomer.style.transition = "transform 0.55s cubic-bezier(0.2, 0.8, 0.2, 1), opacity 0.3s ease";
        zoomer.style.transform = `translate(${targetLeft}px, ${targetTop}px) scale(${scaleVal})`;
      });
    });

    // Smooth transition to Cream backdrop (~0.35s)
    setTimeout(() => {
      zoomerDot.style.transition = "background-color 0.35s ease, box-shadow 0.35s ease";
      zoomerDot.style.backgroundColor = "#EEDCC8";
      zoomerDot.style.boxShadow = "0 0 80px 40px rgba(238, 220, 200, 1)";
    }, 450);
  }

  // Populate overlay content
  const tagEl = document.getElementById("starNumberTag");
  const bodyEl = document.getElementById("starMessageBody");
  const iconEl = document.getElementById("starCardIcon");
  const messageCard = document.getElementById("starMessageCard");

  if (tagEl) tagEl.textContent = data.title;
  if (bodyEl) bodyEl.innerHTML = data.body;
  if (iconEl) iconEl.textContent = index === 8 ? "💖" : "✨";

  if (messageCard) {
    messageCard.classList.toggle("cinematic-card", !!data.isCinematicLarge);
    messageCard.classList.toggle("special-card", !!data.isSpecial);
  }

  // Quick message reveal at t=0.85s
  const overlay = document.getElementById("starMessageOverlay");
  setTimeout(() => {
    if (overlay) {
      overlay.classList.add("active");
      overlay.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
    }
  }, 850);
}

function closeStarMessageOverlay() {
  const overlay = document.getElementById("starMessageOverlay");
  const zoomer = document.getElementById("expandingStarZoomer");
  const zoomerDot = zoomer ? zoomer.querySelector(".zoomer-star-dot") : null;
  const container = document.getElementById("constellationContainer");

  if (overlay) {
    overlay.classList.remove("active");
    overlay.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  if (zoomer) {
    zoomer.classList.remove("active");
    setTimeout(() => {
      zoomer.style.transform = "none";
      zoomer.style.transition = "none";
      if (zoomerDot) {
        zoomerDot.style.backgroundColor = "#ffffff";
        zoomerDot.style.boxShadow = "0 0 30px 10px rgba(255, 255, 255, 0.95)";
      }
    }, 450);
  }

  // Reset star glowing and dimming states
  const allStars = document.querySelectorAll(".sky-star-btn");
  allStars.forEach((btn) => {
    btn.classList.remove("dimmed");
    btn.classList.remove("active-glowing");
  });

  if (container) {
    container.classList.remove("pulse-special");
  }

  // Check if all 9 stars have been opened!
  checkConstellationCompletion();
}

function checkConstellationCompletion() {
  if (openedSkyStars.size === 9) {
    const container = document.getElementById("constellationContainer");
    const banner = document.getElementById("skyCompletionBanner");

    if (container) {
      container.classList.add("constellation-completed");
    }

    if (banner && banner.style.display === "none") {
      banner.style.display = "block";
      requestAnimationFrame(() => {
        banner.classList.add("visible");
      });

      // Celebration burst of hearts
      triggerHeartExplosion(window.innerWidth / 2, window.innerHeight / 3, 20);
    }
  }
}

/* ==========================================================================
   PAGE TRANSITION HANDLERS
   ========================================================================== */

function initPageTransitions() {
  // Inject default transition overlay if missing
  if (!document.getElementById("pageTransitionOverlay")) {
    const overlay = document.createElement("div");
    overlay.className = "page-transition-overlay";
    overlay.id = "pageTransitionOverlay";
    document.body.appendChild(overlay);
  }

  // Handle page entrance animation
  const currentPathName = window.location.pathname;


  if (currentPathName.includes("reasons.html")) {
    document.body.classList.add("reasons-page-entrance-start");
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        document.body.classList.remove("reasons-page-entrance-start");
        document.body.classList.add("reasons-page-entrance-active");
      });
    });
  } else if (currentPathName.includes("quiz.html")) {
    let showIntro = false;
    try {
      showIntro = sessionStorage.getItem("showQuizIntroOverlay") === "true";
      sessionStorage.removeItem("showQuizIntroOverlay");
    } catch(e){}

    if (showIntro) {
      createQuizIntroOverlay();
    } else {
      document.body.classList.add("page-entering-start");
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          document.body.classList.remove("page-entering-start");
          document.body.classList.add("page-entering-active");
        });
      });
    }
  } else if (currentPathName.includes("open-when.html")) {
    let fromPaperZoom = false;
    try {
      fromPaperZoom = sessionStorage.getItem("fromEnvelopeZoom") === "true";
      sessionStorage.removeItem("fromEnvelopeZoom");
    } catch(e){}

    if (fromPaperZoom) {
      const entrance = document.createElement("div");
      entrance.className = "open-when-paper-entrance";
      document.body.appendChild(entrance);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          entrance.classList.add("fade-out");
          setTimeout(() => {
            if (entrance.parentNode) entrance.parentNode.removeChild(entrance);
          }, 700);
        });
      });
    } else {
      document.body.classList.add("page-entering-start");
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          document.body.classList.remove("page-entering-start");
          document.body.classList.add("page-entering-active");
        });
      });
    }
  } else if (currentPathName.includes("same-sky.html")) {
    let fromWhiteFlash = false;
    try {
      fromWhiteFlash = sessionStorage.getItem("fromStarWhiteFlash") === "true";
    } catch(e){}

    if (!fromWhiteFlash) {
      document.body.classList.add("page-entering-start");
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          document.body.classList.remove("page-entering-start");
          document.body.classList.add("page-entering-active");
        });
      });
    }
  } else {
    document.body.classList.add("page-entering-start");
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        document.body.classList.remove("page-entering-start");
        document.body.classList.add("page-entering-active");
      });
    });
  }

  // Intercept links for smooth transitions
  document.addEventListener("click", (e) => {
    const link = e.target.closest("a");
    if (!link || !link.href) return;

    const href = link.getAttribute("href");
    if (!href || href.startsWith("#") || href.startsWith("javascript:") || link.target === "_blank") {
      return;
    }

    const currentPath = window.location.pathname;
    const targetUrl = link.href;

    // 0: Homepage -> Reasons (Pure Fade)
    const isHomePage = currentPath.endsWith("index.html") || currentPath.endsWith("/") || currentPath === "" || link.id === "enterBtn";
    if (isHomePage && href.includes("reasons.html")) {
      e.preventDefault();
      triggerHomeToReasonsTransition(targetUrl);
      return;
    }

    // A: Reasons -> Songs (Page-Turn)
    if (currentPath.includes("reasons.html") && href.includes("songs.html")) {
      e.preventDefault();
      triggerPageTurnTransition(targetUrl);
      return;
    }

    // B: Songs -> Boyfriend Test (Typewriter)
    if (currentPath.includes("songs.html") && href.includes("quiz.html")) {
      e.preventDefault();
      triggerTypewriterTransition(targetUrl);
      return;
    }

    // C: Under The Same Sky -> Open When (Envelope)
    if (currentPath.includes("same-sky.html") && href.includes("open-when.html")) {
      e.preventDefault();
      triggerEnvelopeTransition(targetUrl);
      return;
    }

    // D: Boyfriend Test -> Under The Same Sky (Four-Pointed Star Expansion)
    if (currentPath.includes("quiz.html") && href.includes("same-sky.html")) {
      e.preventDefault();
      triggerStarToSkyTransition(targetUrl);
      return;
    }

    // E: Congratulations Page (!) -> Final Page (Cinematic Dark Fade)
    if (href.includes("final-page.html")) {
      e.preventDefault();
      triggerCongratsToFinalTransition(targetUrl);
      return;
    }

    // F: Ignore links with custom/special JS modals
    if (link.id === "continueAfterYesBtn" || link.classList.contains("no-default-transition")) {
      return;
    }

    // G: Default Zoom + Fade transition
    e.preventDefault();
    triggerDefaultPageTransition(targetUrl);
  });

  // Attach 4-pointed star click handler on quiz.html
  const starToSkyBtn = document.getElementById("starToSkyBtn");
  if (starToSkyBtn) {
    starToSkyBtn.addEventListener("click", (e) => {
      e.preventDefault();
      triggerStarToSkyTransition("same-sky.html");
    });
  }
}

// Preload vine overlay DOM element on songs.html
function preloadTypewriterOverlay() {
  let twOverlay = document.getElementById("typewriterTransitionOverlay");
  if (!twOverlay) {
    twOverlay = document.createElement("div");
    twOverlay.className = "typewriter-transition-overlay";
    twOverlay.id = "typewriterTransitionOverlay";
    twOverlay.innerHTML = `
      <svg class="typewriter-vine-accent typewriter-vine-top-left" viewBox="0 0 100 100" fill="currentColor">
        <path d="M10 90 Q 30 50, 70 30 Q 90 20, 85 10 Q 75 10, 60 25 Q 40 45, 20 80 Z"/>
        <circle cx="75" cy="25" r="4" fill="currentColor"/>
        <circle cx="55" cy="40" r="3" fill="currentColor"/>
        <circle cx="35" cy="60" r="3" fill="currentColor"/>
      </svg>
      <svg class="typewriter-vine-accent typewriter-vine-bottom-right" viewBox="0 0 100 100" fill="currentColor">
        <path d="M10 90 Q 30 50, 70 30 Q 90 20, 85 10 Q 75 10, 60 25 Q 40 45, 20 80 Z"/>
        <circle cx="75" cy="25" r="4" fill="currentColor"/>
        <circle cx="55" cy="40" r="3" fill="currentColor"/>
        <circle cx="35" cy="60" r="3" fill="currentColor"/>
      </svg>
      <div class="typewriter-box">
        <p class="typewriter-full-text" id="twFullText">Let's see how much you know about me~</p>
      </div>
    `;
    document.body.appendChild(twOverlay);
  }
}

// 0. Homepage -> Reasons: Pure Fade Transition (No zoom, no graphics, clean #EEDCC8 cream backdrop)
function triggerHomeToReasonsTransition(targetUrl) {
  document.body.classList.add("home-to-reasons-fade-out");
  setTimeout(() => {
    window.location.href = targetUrl;
  }, 950);
}

// 1. Default Transition: Fade + Gentle Zoom (Slower & Smoother)
function triggerDefaultPageTransition(targetUrl) {
  const overlay = document.getElementById("pageTransitionOverlay");
  document.body.classList.add("page-screen-fade-out");
  if (overlay) overlay.classList.add("active");
  setTimeout(() => {
    window.location.href = targetUrl;
  }, 600);
}

// 2. Reasons -> Songs: Page-Turn
function triggerPageTurnTransition(targetUrl) {
  document.body.classList.add("page-screen-fade-out");
  let turnOverlay = document.getElementById("pageTurnOverlay");
  if (!turnOverlay) {
    turnOverlay = document.createElement("div");
    turnOverlay.className = "page-turn-overlay";
    turnOverlay.id = "pageTurnOverlay";
    turnOverlay.innerHTML = `<div class="page-turn-sheet"></div>`;
    document.body.appendChild(turnOverlay);
  }
  turnOverlay.classList.add("active");
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      turnOverlay.classList.add("turning");
    });
  });
  setTimeout(() => {
    window.location.href = targetUrl;
  }, 950);
}

let isSongsTransitioning = false;

// 3. Songs -> Boyfriend Test: Immediate Navigation + Full-Screen Intro Overlay on quiz.html
function triggerTypewriterTransition(targetUrl) {
  if (isSongsTransitioning) return;
  isSongsTransitioning = true;

  // Set flag so quiz.html knows to display the intro overlay on load
  try {
    sessionStorage.setItem("showQuizIntroOverlay", "true");
  } catch(e){}

  // Disable heart button to prevent multiple clicks
  const goToQuizBtn = document.getElementById("goToQuizBtn");
  if (goToQuizBtn) {
    goToQuizBtn.style.pointerEvents = "none";
    goToQuizBtn.style.opacity = "0.5";
  }

  // Pause music if currently playing
  if (typeof audioPlayer !== "undefined" && audioPlayer) {
    try { audioPlayer.pause(); } catch(e){}
  }

  // Immediately navigate to quiz.html (Boyfriend Test loads FIRST)
  window.location.href = targetUrl || "quiz.html";
}

// Intro Overlay sitting ON TOP OF quiz.html
function createQuizIntroOverlay() {
  // Ensure quiz page itself is active underneath
  document.body.classList.remove("page-entering-start");
  document.body.classList.add("page-entering-active");

  let introOverlay = document.createElement("div");
  introOverlay.className = "quiz-intro-full-overlay";
  introOverlay.id = "quizIntroOverlay";
  introOverlay.innerHTML = `
    <svg class="typewriter-vine-accent typewriter-vine-top-left" viewBox="0 0 100 100" fill="currentColor">
      <path d="M10 90 Q 30 50, 70 30 Q 90 20, 85 10 Q 75 10, 60 25 Q 40 45, 20 80 Z"/>
      <circle cx="75" cy="25" r="4" fill="currentColor"/>
      <circle cx="55" cy="40" r="3" fill="currentColor"/>
      <circle cx="35" cy="60" r="3" fill="currentColor"/>
    </svg>
    <svg class="typewriter-vine-accent typewriter-vine-bottom-right" viewBox="0 0 100 100" fill="currentColor">
      <path d="M10 90 Q 30 50, 70 30 Q 90 20, 85 10 Q 75 10, 60 25 Q 40 45, 20 80 Z"/>
      <circle cx="75" cy="25" r="4" fill="currentColor"/>
      <circle cx="55" cy="40" r="3" fill="currentColor"/>
      <circle cx="35" cy="60" r="3" fill="currentColor"/>
    </svg>
    <div class="typewriter-box">
      <p class="typewriter-full-text">Let's see how much you know about me~</p>
    </div>
  `;
  document.body.appendChild(introOverlay);

  // Keep intro overlay visible on top of quiz.html for 2 seconds, then smoothly fade out over 0.9s to reveal quiz
  setTimeout(() => {
    introOverlay.classList.add("fade-out");
    setTimeout(() => {
      if (introOverlay.parentNode) {
        introOverlay.parentNode.removeChild(introOverlay);
      }
    }, 950);
  }, 2000);
}

let isStarTransitioning = false;

// 4. Boyfriend Test -> Night Sky: 4-Pointed Star Expansion (Red -> White -> Fullscreen Flash -> Night Sky)
function triggerStarToSkyTransition(targetUrl) {
  if (isStarTransitioning) return;
  isStarTransitioning = true;

  const starBtn = document.getElementById("starToSkyBtn") || document.querySelector(".four-point-star-btn");
  if (starBtn) {
    starBtn.style.pointerEvents = "none";
  }

  let originX = window.innerWidth / 2;
  let originY = window.innerHeight / 2;

  if (starBtn) {
    const rect = starBtn.getBoundingClientRect();
    originX = rect.left + rect.width / 2;
    originY = rect.top + rect.height / 2;
  }

  let overlay = document.getElementById("starCinematicOverlay");
  if (!overlay) {
    overlay = document.createElement("div");
    overlay.id = "starCinematicOverlay";
    overlay.className = "star-cinematic-overlay";
    overlay.innerHTML = `
      <div class="cinematic-expanding-star" id="cinematicExpandingStar">✦</div>
      <div class="cinematic-white-flash" id="cinematicWhiteFlash"></div>
    `;
    document.body.appendChild(overlay);
  }

  const starEl = document.getElementById("cinematicExpandingStar");
  const flashEl = document.getElementById("cinematicWhiteFlash");

  if (!starEl || !flashEl) {
    window.location.href = targetUrl || "same-sky.html";
    return;
  }

  overlay.style.display = "block";
  overlay.classList.add("active");
  flashEl.style.opacity = "0";

  starEl.style.transition = "none";
  starEl.style.left = `${originX}px`;
  starEl.style.top = `${originY}px`;
  starEl.style.transform = "translate(-50%, -50%) scale(1) rotate(0deg)";
  starEl.style.color = "#5D0703";
  starEl.style.textShadow = "0 0 14px rgba(93, 7, 3, 0.6)";
  starEl.style.opacity = "1";

  // Sequence:
  // 1. ~0.2s: Star begins expanding in red (#5D0703)
  setTimeout(() => {
    // 2 & 3. Red star expands & accelerates (~0.8s)
    starEl.style.transition = "transform 1.2s cubic-bezier(0.4, 0, 0.3, 1), color 0.6s ease 0.4s, text-shadow 0.6s ease 0.4s";
    starEl.style.transform = "translate(-50%, -50%) scale(16) rotate(25deg)";

    // 4 & 5. Red -> White color transition (~0.4s)
    setTimeout(() => {
      starEl.style.color = "#ffffff";
      starEl.style.textShadow = "0 0 50px rgba(255, 255, 255, 1), 0 0 100px rgba(255, 255, 255, 0.9)";
    }, 400);

    // 6 & 7. White star expands to fill full screen (~0.4s) & soft white flash
    setTimeout(() => {
      starEl.style.transform = "translate(-50%, -50%) scale(95) rotate(45deg)";
      flashEl.style.transition = "opacity 0.5s ease";
      flashEl.style.opacity = "1";
    }, 900);

    // 8. Smoothly transition to Night Sky page (same-sky.html)
    setTimeout(() => {
      try {
        sessionStorage.setItem("fromStarWhiteFlash", "true");
      } catch(e){}
      window.location.href = targetUrl || "same-sky.html";
    }, 1500);

  }, 200);
}

let isEnvelopeTransitioning = false;

// 5. Under The Same Sky -> Open When: Interactive Burgundy Envelope Opening Sequence
function triggerEnvelopeTransition(targetUrl) {
  if (isEnvelopeTransitioning) return;

  if (typeof nightSkyBgAudio !== "undefined" && nightSkyBgAudio) {
    try {
      nightSkyBgAudio.pause();
      nightSkyBgAudio.currentTime = 0;
    } catch(e){}
  }

  let overlay = document.getElementById("interactiveEnvelopeOverlay");
  if (!overlay) {
    overlay = document.createElement("div");
    overlay.id = "interactiveEnvelopeOverlay";
    overlay.className = "interactive-envelope-overlay";
    overlay.innerHTML = `
      <div class="interactive-envelope-wrapper" id="interactiveEnvelopeWrapper" role="button" tabindex="0" aria-label="Open Burgundy Envelope">
        <div class="env-paper-layer" id="envPaperLayer">
          <div class="env-paper-content">
            <div class="env-paper-line"></div>
            <div class="env-paper-line short"></div>
            <span class="env-paper-heart">♡</span>
          </div>
        </div>
        <div class="env-image-layer">
          <img src="assets/images/envelope-closed.png" alt="Burgundy Envelope" class="env-img env-img-closed" id="envImgClosed" />
          <img src="assets/images/envelope-open.png" alt="Burgundy Envelope Open" class="env-img env-img-open" id="envImgOpen" />
        </div>
        <div class="env-click-hint" id="envClickHint">
          <span>Tap to open ♡</span>
        </div>
      </div>
    `;
    document.body.appendChild(overlay);
  }

  const wrapper = document.getElementById("interactiveEnvelopeWrapper");
  if (!wrapper) return;

  // Reveal blank cream screen & centered small envelope
  overlay.classList.add("active");

  // User click listener on centered envelope
  const handleEnvelopeClick = (e) => {
    e.stopPropagation();
    if (isEnvelopeTransitioning) return;
    isEnvelopeTransitioning = true;

    // Small heart explosion at click
    triggerHeartExplosion(e.clientX || window.innerWidth / 2, e.clientY || window.innerHeight / 2, 10);

    // Step 1: Envelope Opening (~0.8–1.0s)
    wrapper.classList.add("opening");

    // Step 2: Paper Emerging (~1.0s)
    setTimeout(() => {
      wrapper.classList.add("paper-emerging");

      // Step 3: Paper Zooming & Scaling toward viewer (~1.2s)
      setTimeout(() => {
        wrapper.classList.add("paper-zooming");

        // Step 4: Smoothly transition to Open When page
        setTimeout(() => {
          try {
            sessionStorage.setItem("fromEnvelopeZoom", "true");
          } catch(e){}
          window.location.href = targetUrl || "open-when.html";
        }, 1250);

      }, 1000);

    }, 850);
  };

  wrapper.addEventListener("click", handleEnvelopeClick, { once: true });
  wrapper.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleEnvelopeClick(e);
    }
  }, { once: true });
}

// 6. Congratulations Page (!) -> Final Page: Cinematic Dark Fade Transition
function triggerCongratsToFinalTransition(targetUrl) {
  let darkOverlay = document.getElementById("congratsDarkOverlay");
  if (!darkOverlay) {
    darkOverlay = document.createElement("div");
    darkOverlay.id = "congratsDarkOverlay";
    darkOverlay.className = "congrats-dark-overlay";
    document.body.appendChild(darkOverlay);
  }

  darkOverlay.classList.add("active");

  setTimeout(() => {
    try {
      sessionStorage.setItem("fromCongratsDarkFade", "true");
    } catch(e){}
    window.location.href = targetUrl || "final-page.html";
  }, 750);
}

// 7. NEW FINAL PAGE LOGIC (Dreamy Night Atmosphere & Gradual Text Presentation)
function initFinalPageSection() {
  const container = document.getElementById("finalScreen");
  if (!container) return;

  // Handle dark entrance fade-in if coming from question.html
  let fromDarkFade = false;
  try {
    fromDarkFade = sessionStorage.getItem("fromCongratsDarkFade") === "true";
    sessionStorage.removeItem("fromCongratsDarkFade");
  } catch(e){}

  if (fromDarkFade) {
    const darkEntrance = document.createElement("div");
    darkEntrance.className = "congrats-dark-overlay active";
    document.body.appendChild(darkEntrance);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        darkEntrance.classList.remove("active");
        setTimeout(() => {
          if (darkEntrance.parentNode) darkEntrance.parentNode.removeChild(darkEntrance);
        }, 800);
      });
    });
  }

  // Generate subtle background stars
  const starsContainer = document.getElementById("finalStarsContainer");
  if (starsContainer) {
    starsContainer.innerHTML = "";
    const starCount = 35;
    for (let i = 0; i < starCount; i++) {
      const star = document.createElement("div");
      star.className = "final-star-dot";
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;
      star.style.animationDuration = `${3 + Math.random() * 4}s`;
      star.style.animationDelay = `${Math.random() * 3}s`;
      starsContainer.appendChild(star);
    }
  }

  // Generate tiny floating ambient particles
  const particlesContainer = document.getElementById("finalParticlesContainer");
  if (particlesContainer) {
    particlesContainer.innerHTML = "";
    const particleCount = 12;
    for (let i = 0; i < particleCount; i++) {
      const p = document.createElement("div");
      p.className = "final-ambient-particle";
      p.style.left = `${10 + Math.random() * 80}%`;
      p.style.top = `${10 + Math.random() * 80}%`;
      p.style.animationDuration = `${6 + Math.random() * 6}s`;
      p.style.animationDelay = `${Math.random() * 4}s`;
      particlesContainer.appendChild(p);
    }
  }

  // Orchestrate gradual text presentation
  const b1 = document.getElementById("finalBlock1");
  const b2 = document.getElementById("finalBlock2");
  const b3 = document.getElementById("finalBlock3");
  const actionBtn = document.getElementById("finalActionBlock");

  // Step 1: Line 1 gentle fade in (~0.6s)
  setTimeout(() => {
    if (b1) b1.classList.add("visible");
  }, 600);

  // Step 2: Line 2 ("I'm really, really glad it's you. ❤️") prominent fade in (~2.2s)
  setTimeout(() => {
    if (b2) b2.classList.add("visible");
  }, 2200);

  // Step 3: Line 3 ("Happy Boyfriend's Day, idiot.") fade in (~3.8s)
  setTimeout(() => {
    if (b3) b3.classList.add("visible");
  }, 3800);

  // Step 4: "ONE LAST THING →" action button fade in (~5.0s)
  setTimeout(() => {
    if (actionBtn) actionBtn.classList.add("visible");
  }, 5000);
}






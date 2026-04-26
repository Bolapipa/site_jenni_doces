// Elementos principais usados nas animacoes e na navegacao da home.
const revealItems = [...document.querySelectorAll(".reveal")];
const tiltCards = [...document.querySelectorAll(".tilt-card")];
const lightboxRoots = [
  ...document.querySelectorAll(
    ".hero-visual, .proof-grid, .category-gallery, .category-more-gallery, .portfolio-grid, .more-sweets-gallery"
  ),
];
const siteShell = document.querySelector(".site-shell");
const topbar = document.querySelector(".topbar");
const menuLinks = [...document.querySelectorAll(".menu a[href^='#']")];
const feedbackOrbit = document.querySelector(".feedback-orbit");
const sectionTargets = menuLinks
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);
let lastScrollY = window.scrollY;
let isScrollTicking = false;
let topbarRevealTimer = null;

const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
).matches;

const supportsReveal =
  "IntersectionObserver" in window && !prefersReducedMotion;

const supportsTilt =
  window.matchMedia("(hover: hover) and (pointer: fine)").matches &&
  !prefersReducedMotion;

const canUseGsap =
  typeof window.gsap !== "undefined" && !prefersReducedMotion;

const canUsePhotoSwipe =
  typeof window.PhotoSwipeLightbox !== "undefined" &&
  typeof window.PhotoSwipe !== "undefined";

function isCompactViewport() {
  return window.matchMedia("(max-width: 720px)").matches;
}

function updateTopbarMetrics() {
  if (!topbar) {
    return;
  }

  const topbarHeight = `${topbar.offsetHeight}px`;

  // Guarda a altura real do topo para recolher o espaco quando ele some.
  topbar.style.setProperty("--topbar-height", topbarHeight);

  if (!siteShell) {
    return;
  }

  // No mobile, o topo fica fixo e o conteudo recebe um respiro equivalente.
  siteShell.style.setProperty(
    "--mobile-topbar-space",
    isCompactViewport() ? topbarHeight : "0px"
  );
}

function initTopbarMetrics() {
  updateTopbarMetrics();

  if (!topbar || !("ResizeObserver" in window)) {
    return;
  }

  const resizeObserver = new ResizeObserver(() => {
    updateTopbarMetrics();
  });

  resizeObserver.observe(topbar);
}

function triggerTopbarReveal() {
  if (!topbar) {
    return;
  }

  window.clearTimeout(topbarRevealTimer);
  topbar.classList.remove("is-revealing");

  // Reinicia a animacao de retorno para deixar a reentrada mais perceptivel.
  void topbar.offsetWidth;
  topbar.classList.add("is-revealing");

  topbarRevealTimer = window.setTimeout(() => {
    topbar.classList.remove("is-revealing");
  }, 460);
}

function applyRevealDelays() {
  revealItems.forEach((item, index) => {
    const delay = isCompactViewport() ? 0 : Math.min(index * 12, 48);
    item.style.setProperty("--reveal-delay", `${delay}ms`);
  });
}

function revealItem(item) {
  if (item.dataset.revealed === "true") {
    return;
  }

  // Evita que o mesmo bloco anime varias vezes.
  item.dataset.revealed = "true";
  item.classList.add("is-visible");

  // No mobile, revelar rapido fica mais importante que animar demais.
  if (!canUseGsap || item.closest(".hero") || isCompactViewport()) {
    return;
  }

  window.gsap.fromTo(
    item,
    {
      y: 28,
      autoAlpha: 0,
    },
    {
      y: 0,
      autoAlpha: 1,
      duration: 0.42,
      ease: "power2.out",
      clearProps: "transform,opacity,visibility",
    }
  );
}

function initRevealAnimation() {
  if (!supportsReveal) {
    revealItems.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  // O bloco so ganha destaque quando entra no viewport.
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        revealItem(entry.target);
        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.01,
      rootMargin: "0px 0px 18% 0px",
    }
  );

  revealItems.forEach((item) => observer.observe(item));
}

function initTiltCards() {
  if (!supportsTilt) {
    return;
  }

  // O efeito 3D fica restrito a ponteiros precisos para manter o mobile leve.
  tiltCards.forEach((card) => {
    card.addEventListener("pointermove", (event) => {
      const bounds = card.getBoundingClientRect();
      const centerX = bounds.left + bounds.width / 2;
      const centerY = bounds.top + bounds.height / 2;
      const rotateY = (event.clientX - centerX) / 26;
      const rotateX = (centerY - event.clientY) / 26;

      card.style.transform =
        `perspective(1000px) rotateX(${rotateX}deg) ` +
        `rotateY(${rotateY}deg) translateY(-4px)`;
    });

    card.addEventListener("pointerleave", () => {
      card.style.transform = "";
    });
  });
}

function animateHeroIntro() {
  if (!canUseGsap) {
    return;
  }

  // Timeline curta para dar ritmo na abertura sem pesar a pagina.
  const heroTimeline = window.gsap.timeline({
    defaults: {
      duration: 0.82,
      ease: "power2.out",
    },
  });

  heroTimeline
    .from(".topbar", {
      y: -18,
      autoAlpha: 0,
      duration: 0.65,
      clearProps: "transform,opacity,visibility",
    })
    .from(
      ".hero-copy > *",
      {
        y: 22,
        autoAlpha: 0,
        stagger: 0.12,
      },
      "-=0.18"
    )
    .from(
      ".hero-card",
      {
        y: 24,
        scale: 0.96,
        autoAlpha: 0,
        stagger: 0.1,
      },
      "-=0.5"
    )
    .from(
      ".hero-badge",
      {
        y: 16,
        autoAlpha: 0,
      },
      "-=0.36"
    );
}

function updateLightboxSize(link, image) {
  link.dataset.pswpWidth = String(image.naturalWidth || 1080);
  link.dataset.pswpHeight = String(image.naturalHeight || 1080);
}

function buildLightboxMarkup() {
  lightboxRoots.forEach((root, rootIndex) => {
    root.classList.add("js-lightbox-gallery");
    root.dataset.galleryId =
      root.dataset.galleryId ||
      root.closest("section")?.id ||
      `gallery-${rootIndex + 1}`;

    const images = root.querySelectorAll("img");

    images.forEach((image, imageIndex) => {
      if (image.closest("a.lightbox-link")) {
        return;
      }

      // Cada imagem clicavel recebe um link para abrir no PhotoSwipe.
      const wrapper = document.createElement("a");
      wrapper.className = "lightbox-link";
      wrapper.href = image.currentSrc || image.src;
      wrapper.setAttribute(
        "aria-label",
        image.alt || `Abrir foto ${imageIndex + 1}`
      );

      updateLightboxSize(wrapper, image);

      if (!image.complete) {
        image.addEventListener(
          "load",
          () => {
            wrapper.href = image.currentSrc || image.src;
            updateLightboxSize(wrapper, image);
          },
          { once: true }
        );
      }

      image.parentNode.insertBefore(wrapper, image);
      wrapper.appendChild(image);
    });
  });
}

function initPhotoSwipe() {
  buildLightboxMarkup();

  if (!canUsePhotoSwipe) {
    return;
  }

  const lightbox = new window.PhotoSwipeLightbox({
    gallery: ".js-lightbox-gallery",
    children: "a.lightbox-link",
    pswpModule: window.PhotoSwipe,
    showHideAnimationType: "zoom",
    bgOpacity: 0.92,
  });

  lightbox.init();
}

function initFeedbackOrbit() {
  if (!feedbackOrbit) {
    return;
  }

  const feedbackTrack = feedbackOrbit.querySelector(".feedback-orbit-track");

  if (!feedbackTrack) {
    return;
  }

  const baseSlides = Array.from(feedbackTrack.children).filter(
    (slide) => slide.classList.contains("feedback-orbit-slide") && !slide.dataset.feedbackClone
  );

  if (!baseSlides.length) {
    return;
  }

  // Duplica os cards para formar uma faixa longa e sem "fim" aparente.
  if (feedbackTrack.querySelectorAll(".feedback-orbit-slide").length < baseSlides.length * 3) {
    for (let repeatIndex = 0; repeatIndex < 2; repeatIndex += 1) {
      baseSlides.forEach((slide) => {
        const clone = slide.cloneNode(true);
        clone.dataset.feedbackClone = "true";
        clone.setAttribute("aria-hidden", "true");
        feedbackTrack.appendChild(clone);
      });
    }
  }

  const orbitSlides = [...feedbackTrack.querySelectorAll(".feedback-orbit-slide")];
  let orbitOffset = 0;
  let previousFrameTime = 0;
  let isOrbitPaused = prefersReducedMotion;
  let orbitSectionVisible = true;
  let isDraggingOrbit = false;
  let dragStartX = 0;
  let dragStartY = 0;
  let dragStartOffset = 0;
  let hasHorizontalOrbitDrag = false;

  function getSingleLoopWidth() {
    const trackGap = Number.parseFloat(window.getComputedStyle(feedbackTrack).columnGap) || 0;

    return (
      baseSlides.reduce((totalWidth, slide) => totalWidth + slide.offsetWidth, 0) +
      trackGap * baseSlides.length
    );
  }

  function normalizeOrbitOffset(loopWidth) {
    if (loopWidth <= 0) {
      return;
    }

    while (orbitOffset <= -loopWidth) {
      orbitOffset += loopWidth;
    }

    while (orbitOffset > 0) {
      orbitOffset -= loopWidth;
    }
  }

  function renderOrbitPosition() {
    feedbackTrack.style.transform = `translate3d(${orbitOffset}px, 0, 0)`;
  }

  function startOrbitDrag(clientX, clientY) {
    isDraggingOrbit = true;
    isOrbitPaused = true;
    hasHorizontalOrbitDrag = false;
    dragStartX = clientX;
    dragStartY = clientY;
    dragStartOffset = orbitOffset;
    feedbackOrbit.classList.add("is-dragging");
  }

  function moveOrbitDrag(clientX, clientY) {
    if (!isDraggingOrbit) {
      return false;
    }

    const dragDistanceX = clientX - dragStartX;
    const dragDistanceY = clientY - dragStartY;

    if (!hasHorizontalOrbitDrag) {
      const absX = Math.abs(dragDistanceX);
      const absY = Math.abs(dragDistanceY);

      if (absX < 8) {
        return false;
      }

      if (absY > absX) {
        return false;
      }

      hasHorizontalOrbitDrag = true;
    }

    const loopWidth = getSingleLoopWidth();

    orbitOffset = dragStartOffset + dragDistanceX;
    normalizeOrbitOffset(loopWidth);
    renderOrbitPosition();
    updateOrbitCards();

    return true;
  }

  function finishOrbitDrag(pointerId) {
    if (!isDraggingOrbit) {
      return;
    }

    isDraggingOrbit = false;
    isOrbitPaused = prefersReducedMotion;
    hasHorizontalOrbitDrag = false;
    feedbackOrbit.classList.remove("is-dragging");

    if (
      pointerId !== undefined &&
      feedbackOrbit.hasPointerCapture &&
      feedbackOrbit.hasPointerCapture(pointerId)
    ) {
      feedbackOrbit.releasePointerCapture(pointerId);
    }
  }

  function updateOrbitCards() {
    const orbitBounds = feedbackOrbit.getBoundingClientRect();
    const orbitCenter = orbitBounds.left + orbitBounds.width / 2;

    orbitSlides.forEach((slide) => {
      const slideBounds = slide.getBoundingClientRect();
      const slideCenter = slideBounds.left + slideBounds.width / 2;
      const centerDistance = slideCenter - orbitCenter;
      const normalizedDistance = Math.max(
        -1,
        Math.min(1, centerDistance / Math.max(orbitBounds.width * 0.42, 1))
      );
      const rotateY = normalizedDistance * 26;
      const translateY = Math.abs(normalizedDistance) * 18;
      const translateZ = (1 - Math.abs(normalizedDistance)) * 56;
      const scale = 1 - Math.abs(normalizedDistance) * 0.18;
      const opacity = 1 - Math.abs(normalizedDistance) * 0.34;
      const saturation = 1 - Math.abs(normalizedDistance) * 0.2;

      slide.style.transform =
        `translate3d(0, ${translateY}px, ${translateZ}px) ` +
        `rotateY(${rotateY}deg) scale(${scale})`;
      slide.style.opacity = `${Math.max(opacity, 0.56)}`;
      slide.style.filter = `saturate(${Math.max(saturation, 0.82)})`;
    });
  }

  function stepOrbit(frameTime) {
    if (!previousFrameTime) {
      previousFrameTime = frameTime;
    }

    const loopWidth = getSingleLoopWidth();
    const elapsed = frameTime - previousFrameTime;
    previousFrameTime = frameTime;

    if (!isOrbitPaused && orbitSectionVisible && loopWidth > 0) {
      // Movimento lento e continuo para parecer uma orbita suave.
      orbitOffset -= elapsed * 0.028;

      normalizeOrbitOffset(loopWidth);
      renderOrbitPosition();
    }

    updateOrbitCards();
    window.requestAnimationFrame(stepOrbit);
  }

  if ("IntersectionObserver" in window) {
    const orbitObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          orbitSectionVisible = entry.isIntersecting;
        });
      },
      {
        threshold: 0.12,
      }
    );

    orbitObserver.observe(feedbackOrbit);
  }

  feedbackOrbit.addEventListener("mouseenter", () => {
    isOrbitPaused = true;
  });

  feedbackOrbit.addEventListener("mouseleave", () => {
    if (!isDraggingOrbit) {
      isOrbitPaused = prefersReducedMotion;
    }
  });

  feedbackOrbit.addEventListener("pointerdown", (event) => {
    if (event.pointerType === "mouse" && event.button !== 0) {
      return;
    }

    startOrbitDrag(event.clientX, event.clientY);

    if (event.pointerType === "mouse" && feedbackOrbit.setPointerCapture) {
      feedbackOrbit.setPointerCapture(event.pointerId);
    }
  });

  feedbackOrbit.addEventListener("pointermove", (event) => {
    moveOrbitDrag(event.clientX, event.clientY);
  });

  feedbackOrbit.addEventListener("pointerup", (event) => finishOrbitDrag(event.pointerId));
  feedbackOrbit.addEventListener("pointercancel", (event) => finishOrbitDrag(event.pointerId));
  feedbackOrbit.addEventListener("lostpointercapture", () => {
    finishOrbitDrag();
  });

  feedbackOrbit.addEventListener(
    "touchstart",
    (event) => {
      const touch = event.touches[0];

      if (!touch) {
        return;
      }

      startOrbitDrag(touch.clientX, touch.clientY);
    },
    { passive: true }
  );

  feedbackOrbit.addEventListener(
    "touchmove",
    (event) => {
      const touch = event.touches[0];

      if (!touch) {
        return;
      }

      const didMoveHorizontally = moveOrbitDrag(touch.clientX, touch.clientY);

      if (didMoveHorizontally) {
        event.preventDefault();
      }
    },
    { passive: false }
  );

  feedbackOrbit.addEventListener("touchend", () => finishOrbitDrag());
  feedbackOrbit.addEventListener("touchcancel", () => finishOrbitDrag());

  window.addEventListener("resize", () => {
    updateOrbitCards();
  });

  window.requestAnimationFrame(stepOrbit);
}

function syncTopbarState() {
  if (!topbar) {
    return;
  }

  const currentScrollY = Math.max(window.scrollY, 0);
  const scrollDelta = currentScrollY - lastScrollY;
  const isNearTop = currentScrollY <= 24;
  const isScrollingDown = scrollDelta > 8;
  const isScrollingUp = scrollDelta < -5;
  const hasPassedHeroEntry = currentScrollY > (topbar.offsetHeight + 16);
  const wasHidden = topbar.classList.contains("is-hidden");

  topbar.classList.toggle("is-scrolled", currentScrollY > 12);

  // O auto-hide fica restrito ao mobile para limpar a tela pequena sem afetar o desktop.
  if (!isCompactViewport()) {
    topbar.classList.remove("is-hidden");
    topbar.classList.remove("is-revealing");
    lastScrollY = currentScrollY;
    return;
  }

  if (isNearTop || isScrollingUp) {
    topbar.classList.remove("is-hidden");
    if (wasHidden && !isNearTop) {
      triggerTopbarReveal();
    }
  } else if (hasPassedHeroEntry && isScrollingDown) {
    topbar.classList.add("is-hidden");
    topbar.classList.remove("is-revealing");
  }

  lastScrollY = currentScrollY;
}

function syncActiveMenu() {
  if (!sectionTargets.length) {
    return;
  }

  const currentSection =
    sectionTargets.find((section) => {
      const rect = section.getBoundingClientRect();
      return rect.top <= 160 && rect.bottom >= 160;
    }) || sectionTargets[0];

  menuLinks.forEach((link) => {
    const targetId = link.getAttribute("href");
    const isActive = currentSection && `#${currentSection.id}` === targetId;
    link.classList.toggle("is-active", isActive);
  });
}

function syncScrollState() {
  syncTopbarState();
  syncActiveMenu();
}

function handleScroll() {
  if (isScrollTicking) {
    return;
  }

  isScrollTicking = true;

  window.requestAnimationFrame(() => {
    syncScrollState();
    isScrollTicking = false;
  });
}

// Inicializacao principal da experiencia.
applyRevealDelays();
animateHeroIntro();
initRevealAnimation();
initTiltCards();
initPhotoSwipe();
initFeedbackOrbit();
initTopbarMetrics();
syncScrollState();

window.addEventListener("scroll", handleScroll, { passive: true });
window.addEventListener(
  "resize",
  () => {
    updateTopbarMetrics();
    syncScrollState();
  },
  { passive: true }
);

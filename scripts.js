document.addEventListener("DOMContentLoaded", function () {
  // ----------- COUNTER ANIMATION -----------
  const counters = document.querySelectorAll('.counter');
  const speed = 200;

  const countUp = (counter) => {
    const target = +counter.getAttribute('data-target');
    const increment = Math.ceil(target / speed);

    const update = () => {
      const current = +counter.innerText;
      if (current < target) {
        counter.innerText = current + increment;
        setTimeout(update, 25);
      } else {
        counter.innerText = target;
      }
    };
    update();
  };

  const counterObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        countUp(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(counter => {
    counterObserver.observe(counter);
  });

  // ----------- OVERLAY BOX FADE & SLIDE-IN -----------
  const overlayBox = document.querySelector('.overlay-box');
  if (overlayBox) {
    const overlayObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.5 });

    overlayObserver.observe(overlayBox);
  }

  // ----------- GALLERY IMAGE CAROUSEL -----------
  const images = [
    "gallery/image1.jpg",
    "gallery/image2.jpg",
    "gallery/image3.jpg",
    "gallery/image4.jpg",
    "gallery/image5.jpg"
  ];
  let currentIndex = 0;
  const galleryImg = document.getElementById("gallery-img");

  function updateImage() {
    if (galleryImg) {
      galleryImg.src = images[currentIndex];
    }
  }

  const leftArrow = document.querySelector(".arrow.left");
  const rightArrow = document.querySelector(".arrow.right");

  if (leftArrow && rightArrow) {
    leftArrow.addEventListener("click", function () {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      updateImage();
    });

    rightArrow.addEventListener("click", function () {
      currentIndex = (currentIndex + 1) % images.length;
      updateImage();
    });
  }

  // ----------- DISCOVER MORE BUTTON -----------
  const discoverBtn = document.getElementById("discover-btn");
  if (discoverBtn) {
    discoverBtn.addEventListener("click", function () {
      window.location.href = "more-info.html"; // Or alert if placeholder
      // alert("More details coming soon!");
    });
  }
});
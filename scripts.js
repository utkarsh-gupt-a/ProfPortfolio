function discoverMore() {
    window.location.href = "more-info.html";
}
document.addEventListener("DOMContentLoaded", function () {
  // Gallery Image Carousel Functionality
  const images = ["gallery/image1.jpg", "gallery/image2.jpg", "gallery/image3.jpg", "gallery/image4.jpg", "gallery/image5.jpg"]; // Replace with your image paths
  let currentIndex = 0;
  const galleryImg = document.getElementById("gallery-img");

  // Function to update the gallery image
  function updateImage() {
    galleryImg.src = images[currentIndex];
  }

  // Event listener for left arrow button
  document.querySelector(".arrow.left").addEventListener("click", function () {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage();
  });

  // Event listener for right arrow button
  document.querySelector(".arrow.right").addEventListener("click", function () {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
  });

  // Optional: Handling the Discover More button click event
  document.getElementById("discover-btn").addEventListener("click", function () {
    alert("More details coming soon!");
  });
});



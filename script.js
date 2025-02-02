// script.js

document
  .getElementById("bookingForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent actual form submission (for prototype)

    // Simulate booking success
    document.getElementById("bookingSuccess").style.display = "block";

    // You could add more simulated behavior here, like clearing the form, etc.
    // For a real website, you'd send this data to a server.

    // Optional: Hide success message after a few seconds (for better UX in prototype)
    setTimeout(function () {
      document.getElementById("bookingSuccess").style.display = "none";
    }, 3000); // Hide after 3 seconds
  });

// script.js

document
  .getElementById("bookingForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent actual form submission for booking form
    document.getElementById("bookingSuccess").style.display = "block";
    setTimeout(function () {
      document.getElementById("bookingSuccess").style.display = "none";
    }, 3000);
  });

document
  .getElementById("newPostForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent actual form submission for new post form

    // Get the message text from the textarea
    const postText = document.getElementById("postText").value;

    if (postText.trim() !== "") {
      // Check if the message is not empty
      // Create a new forum post element
      const newPostDiv = document.createElement("div");
      newPostDiv.classList.add("forum-post"); // Add the forum-post class for styling

      const authorPara = document.createElement("p");
      authorPara.classList.add("post-author");
      authorPara.textContent = "Anonymous User";

      const contentPara = document.createElement("p");
      contentPara.classList.add("post-content");
      contentPara.textContent = postText;

      // Append author and content to the new post div
      newPostDiv.appendChild(authorPara);
      newPostDiv.appendChild(contentPara);

      // Add the new post to the forum (prepend to show new posts at the top)
      const forumPostsContainer = document.getElementById("forumPosts");
      forumPostsContainer.prepend(newPostDiv); // Use prepend to add at the beginning

      // Clear the textarea after posting
      document.getElementById("postText").value = "";
    } else {
      alert("Please enter a message to post."); // Optional: Simple validation for empty post
    }
  });

// script.js

// Booking Form Simulation
document
  .getElementById("bookingForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    document.getElementById("bookingSuccess").style.display = "block";
    setTimeout(function () {
      document.getElementById("bookingSuccess").style.display = "none";
    }, 3000);
  });

// New Post Form Simulation (Forum)
document
  .getElementById("newPostForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const postText = document.getElementById("postText").value;
    if (postText.trim() !== "") {
      const newPostDiv = document.createElement("div");
      newPostDiv.classList.add("forum-post");
      const authorPara = document.createElement("p");
      authorPara.classList.add("post-author");
      authorPara.textContent = "Anonymous User";
      const contentPara = document.createElement("p");
      contentPara.classList.add("post-content");
      contentPara.textContent = postText;
      newPostDiv.appendChild(authorPara);
      newPostDiv.appendChild(contentPara);
      const forumPostsContainer = document.getElementById("forumPosts");
      forumPostsContainer.prepend(newPostDiv);
      document.getElementById("postText").value = "";
    } else {
      alert("Please enter a message to post.");
    }
  });

// Contact Form Simulation
document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    document.getElementById("contactSuccess").style.display = "block";
    setTimeout(function () {
      document.getElementById("contactSuccess").style.display = "none";
    }, 3000);
  });

// Image Carousel JavaScript
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("carousel-slide");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

// Expandable Content JavaScript
document.querySelectorAll(".read-more-button").forEach((button) => {
  button.addEventListener("click", function () {
    const targetId = this.dataset.target;
    const expandableContent = document.getElementById(targetId);
    if (expandableContent.style.display === "none") {
      expandableContent.style.display = "block"; // Or 'flex', 'grid' depending on content
      this.textContent = "Read Less";
    } else {
      expandableContent.style.display = "none";
      this.textContent = "Read More...";
    }
  });
});

// Add subtle animation to dog cards
document.querySelectorAll(".dog-member, .team-member").forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.transform = `perspective(1000px) rotateX(${
      (y - rect.height / 2) / 10
    }deg) rotateY(${-(x - rect.width / 2) / 10}deg)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "perspective(1000px) rotateX(0) rotateY(0)";
  });
});

// Add confetti effect on booking
function createConfetti() {
  const confetti = document.createElement("div");
  confetti.innerHTML = "🎉🐾";
  confetti.style.position = "fixed";
  confetti.style.fontSize = "24px";
  confetti.style.left = Math.random() * window.innerWidth + "px";
  confetti.style.animation = "fall 3s linear";
  document.body.appendChild(confetti);

  setTimeout(() => confetti.remove(), 3000);
}

document.querySelectorAll(".button").forEach((button) => {
  button.addEventListener("click", () => {
    for (let i = 0; i < 10; i++) setTimeout(createConfetti, i * 100);
  });
});

// Add CSS animation for confetti
const style = document.createElement("style");
style.textContent = `@keyframes fall {
  0% { transform: translateY(-100vh) rotate(0deg); opacity: 1; }
  100% { transform: translateY(100vh) rotate(360deg); opacity: 0; }
}`;
document.head.appendChild(style);

// Mobile Navigation Toggle
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const mobileOverlay = document.createElement("div");

mobileOverlay.className = "mobile-menu-overlay";
document.body.appendChild(mobileOverlay);

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  mobileOverlay.classList.toggle("active");
});

// Close menu when clicking outside or on a link
mobileOverlay.addEventListener("click", closeMenu);
document.querySelectorAll(".nav-menu a").forEach((link) => {
  link.addEventListener("click", closeMenu);
});

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
  mobileOverlay.classList.remove("active");
}

// Close menu on window resize
window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    closeMenu();
  }
});

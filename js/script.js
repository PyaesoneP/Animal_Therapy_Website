document.addEventListener("DOMContentLoaded", () => {
  // --- Virtual Petting Zone Functionality (if present on the page) ---
  const petAreas = document.querySelectorAll(".pet-area");
  const dogImage = document.getElementById("virtual-dog-image");
  const dogSoundEffect = document.getElementById("dog-sound-effect");

  if (petAreas.length > 0 && dogImage && dogSoundEffect) {
    // Check if elements exist on the page
    petAreas.forEach((area) => {
      area.addEventListener("click", (event) => {
        event.preventDefault(); // Prevent default link behavior of <area href="#">

        const petAction = area.dataset.petAction; // Get data-pet-action attribute

        // Trigger Animation and Sound based on petAction
        if (petAction === "head") {
          dogImage.classList.add("perk-ears"); // Add 'perk-ears' animation class
          setTimeout(() => {
            dogImage.classList.remove("perk-ears");
          }, 500); // Remove class after animation
          playSound("head-pet-sound.mp3"); // Play sound for head pet
        } else if (petAction === "back") {
          dogImage.classList.add("wag-tail"); // Add 'wag-tail' animation class
          setTimeout(() => {
            dogImage.classList.remove("wag-tail");
          }, 500); // Remove class after animation
          playSound("back-pet-sound.mp3"); // Play sound for back pet
        } else if (petAction === "belly") {
          // Example: You can add a different animation or visual feedback for belly rubs if you create one
          playSound("belly-rub-sound.mp3"); // Play sound for belly rub
        }
        // Add more actions for other areas if you have them
      });
    });

    function playSound(soundFile) {
      dogSoundEffect.src = `assets/audio/${soundFile}`; // Set audio source dynamically
      dogSoundEffect.play();
    }
  }

  // --- Contact Form Submission Simulation (if contact form is present) ---
  const contactForm = document.getElementById("contact-form");
  const contactMessage = document.getElementById("form-message");

  if (contactForm && contactMessage) {
    // Check if contact form and message elements exist
    contactForm.addEventListener("submit", (event) => {
      event.preventDefault(); // Prevent actual form submission

      // Simulate form submission success (for prototype)
      contactMessage.classList.add("show"); // Show confirmation message
      contactForm.reset(); // Clear the form fields

      // Optionally, hide the message after a few seconds (for demo purposes)
      setTimeout(() => {
        contactMessage.classList.remove("show");
      }, 3000); // Hide message after 3 seconds
    });
  }

  // --- Booking Form Submission Simulation (if booking form is present) ---
  const bookingForm = document.getElementById("booking-form");
  const bookingMessage = document.getElementById("booking-message");

  if (bookingForm && bookingMessage) {
    // Check if booking form and message elements exist
    bookingForm.addEventListener("submit", (event) => {
      event.preventDefault(); // Prevent actual form submission

      // Simulate booking form submission success (for prototype)
      bookingMessage.classList.add("show"); // Show booking confirmation message
      bookingForm.reset(); // Clear the form fields

      // Optionally, hide the message after a few seconds (for demo purposes)
      setTimeout(() => {
        bookingMessage.classList.remove("show");
      }, 3000); // Hide message after 3 seconds
    });
  }

  // --- Example: Add 'active' class to current navigation link (for visual feedback) ---
  const navLinks = document.querySelectorAll("nav a");
  const currentPath = window.location.pathname; // Get current page path

  navLinks.forEach((link) => {
    if (
      link.getAttribute("href") === currentPath ||
      (currentPath === "/" && link.getAttribute("href") === "index.html")
    ) {
      link.classList.add("active"); // Add 'active' class to the matching link
    }
  });
});

// ===== Typewriting Effect =====
document.addEventListener("DOMContentLoaded", function () {
  const textElement = document.querySelector(".typewriter-text");
  const words = ["Designer", "Front-End Developer", "BSIS Student"];
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function type() {
    let currentWord = words[wordIndex];
    let displayedText = currentWord.substring(0, charIndex);
    textElement.textContent = displayedText;

    if (!isDeleting && charIndex < currentWord.length) {
      charIndex++;
      setTimeout(type, 100);
    } else if (isDeleting && charIndex > 0) {
      charIndex--;
      setTimeout(type, 50);
    } else {
      isDeleting = !isDeleting;
      if (!isDeleting) wordIndex = (wordIndex + 1) % words.length;
      setTimeout(type, 1000);
    }
  }

  type();
});

// ===== Fade In & Out Animation for Sections =====
document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll(".section");

  let timeout;
  function checkScroll() {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionBottom = section.getBoundingClientRect().bottom;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight - 100 && sectionBottom > 100) {
          section.classList.add("in-view");
          section.classList.remove("out-view");
        } else {
          section.classList.add("out-view");
          section.classList.remove("in-view");
        }
      });
    }, 50); // Adjust delay based on performance needs
  }

  window.addEventListener("scroll", checkScroll);
  checkScroll();
});

// ===== Offset Sections to Prevent Navbar Overlap =====
document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll(".section");
  const navbarHeight = document.querySelector(".navbar").offsetHeight; // Dynamically calculated navbar height
  sections.forEach((section) => {
    section.style.paddingTop = `${navbarHeight}px`; // Adjusted offset based on navbar height
    section.style.marginTop = `-${navbarHeight}px`; // Pulls the section back so the offset works correctly
  });
});

// ===== Toggle Between Skills & Certificates =====
document.addEventListener("DOMContentLoaded", function () {
  const skillsSection = document.getElementById("skillsSection");
  const certificatesSection = document.getElementById("certificatesSection");
  const showSkillsBtn = document.getElementById("showSkills");
  const showCertificatesBtn = document.getElementById("showCertificates");

  // Show skills by default
  skillsSection.classList.add("fade-in");

  // Initialize first button as active
  showSkillsBtn.classList.add("active");

  showSkillsBtn.addEventListener("click", function () {
    certificatesSection.classList.add("d-none");
    skillsSection.classList.remove("d-none");
    skillsSection.classList.add("fade-in");

    showSkillsBtn.classList.add("btn-success");
    showSkillsBtn.classList.add("active");
    showCertificatesBtn.classList.remove("btn-success");
    showCertificatesBtn.classList.remove("active");
  });

  showCertificatesBtn.addEventListener("click", function () {
    skillsSection.classList.add("d-none");
    certificatesSection.classList.remove("d-none");
    certificatesSection.classList.add("fade-in");

    showCertificatesBtn.classList.add("btn-success");
    showCertificatesBtn.classList.add("active");
    showSkillsBtn.classList.remove("btn-success");
    showSkillsBtn.classList.remove("active");
  });
});

// ===== Blur Effect for Skills & Certificates on Hover =====
document.querySelectorAll(".skill-card, .certificate-card").forEach((card) => {
  card.addEventListener("mouseenter", () => {
    document
      .querySelectorAll(".skill-card, .certificate-card")
      .forEach((otherCard) => {
        if (otherCard !== card) {
          otherCard.classList.add("blurred");
        }
      });
  });

  card.addEventListener("mouseleave", () => {
    document
      .querySelectorAll(".skill-card, .certificate-card")
      .forEach((otherCard) => {
        otherCard.classList.remove("blurred");
      });
  });
});

// ===== My Project Section Blur Effect =====
document.addEventListener("DOMContentLoaded", function () {
  const projectCards = document.querySelectorAll(".project-wrapper");

  projectCards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      projectCards.forEach((otherCard) => {
        if (otherCard !== card) {
          otherCard.classList.add("not-hovered");
        }
      });
    });

    card.addEventListener("mouseleave", function () {
      projectCards.forEach((otherCard) => {
        otherCard.classList.remove("not-hovered");
      });
    });
  });
});

// ===== Fixed Navbar Scrolling with Offset =====
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".nav-link");
  const navbarHeight = document.querySelector(".navbar").offsetHeight; // Get navbar height

  navLinks.forEach((anchor) => {
    anchor.addEventListener("click", function (event) {
      event.preventDefault();
      const targetId = this.getAttribute("href").substring(1); // Get target section ID
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        let offsetTop;

        if (targetId === "home") {
          offsetTop = 0; // Ensures Home scrolls to the very top
        } else {
          offsetTop = targetSection.offsetTop - navbarHeight; // Keeps the adjusted offset for other sections
        }

        // Scroll to the target section with the adjusted offset
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });
      }

      // Update the URL without reloading the page
      history.pushState(null, null, `#${targetId}`);
    });
  });
});

//Contact section perds
document.addEventListener("DOMContentLoaded", function () {
  console.log("Contact section loaded!");
});

// Cv PArT
document.addEventListener("DOMContentLoaded", function () {
  const viewCvBtn = document.getElementById("viewCvBtn");
  const cvModal = document.getElementById("cvModal");
  const closeModal = document.querySelector(".close");

  viewCvBtn.addEventListener("click", function () {
    cvModal.style.display = "flex";
    document.body.style.overflow = "hidden"; // Prevent background scrolling
  });

  closeModal.addEventListener("click", function () {
    cvModal.style.display = "none";
    document.body.style.overflow = ""; // Restore background scrolling
  });

  window.addEventListener("click", function (event) {
    if (event.target === cvModal) {
      cvModal.style.display = "none";
      document.body.style.overflow = ""; // Restore background scrolling
    }
  });

  // Cv gyapon

  document.addEventListener("DOMContentLoaded", function () {
    console.log("CV Modal script loaded!"); // Debugging line
  });

  // Add keyboard support (Escape key to close)
  window.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && cvModal.style.display === "flex") {
      cvModal.style.display = "none";
      document.body.style.overflow = "";
    }
  });
});

//Navlink active
document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-link");

  function highlightActiveSection() {
    // Get current scroll position with a bit more offset for better detection
    let scrollPosition = window.scrollY + 200; // Increased offset for better detection

    // Get the bottom of the viewport
    let viewportBottom = window.scrollY + window.innerHeight;

    // Get the document height
    let documentHeight = Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight
    );

    // Check if we're at the bottom of the page
    let isAtBottom = viewportBottom >= documentHeight - 50;

    // If at bottom of page, highlight the last section
    if (isAtBottom) {
      const lastSectionId = sections[sections.length - 1].getAttribute("id");
      navLinks.forEach((link) => link.classList.remove("active-link"));
      const lastLink = document.querySelector(
        `.nav-link[href="#${lastSectionId}"]`
      );
      if (lastLink) lastLink.classList.add("active-link");
      return;
    }

    // Check each section to see if it's in the current view
    let foundActive = false;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute("id");

      // Check if we're within this section (with a small buffer)
      if (
        scrollPosition >= sectionTop - 50 &&
        scrollPosition < sectionTop + sectionHeight
      ) {
        // Remove active class from all links
        navLinks.forEach((link) => link.classList.remove("active-link"));

        // Add active class to matching link
        const activeLink = document.querySelector(
          `.nav-link[href="#${sectionId}"]`
        );

        if (activeLink) {
          activeLink.classList.add("active-link");
          foundActive = true;
        }
      }
    });

    // Special case: If contact is the last section and we're near the bottom
    if (!foundActive && viewportBottom >= documentHeight - 300) {
      const contactLink = document.querySelector(`.nav-link[href="#contact"]`);
      if (contactLink) {
        navLinks.forEach((link) => link.classList.remove("active-link"));
        contactLink.classList.add("active-link");
      }
    }
  }

  // Run on scroll and initial page load
  window.addEventListener("scroll", highlightActiveSection);

  // Initial check (after a short delay to ensure all elements are loaded)
  setTimeout(highlightActiveSection, 100);

  // Also highlight on window resize since section positions might change
  window.addEventListener("resize", highlightActiveSection);

  // Add click event for smooth scrolling and immediate highlight
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      // Wait for the scroll to complete before highlighting
      setTimeout(highlightActiveSection, 100);
    });
  });
});

// My projects Section
// JavaScript function to toggle between different project categories
function toggleProjectCategory(category) {
  // Get all project containers
  const allProjects = document.querySelectorAll(".project-item");

  // Get all toggle buttons
  const allToggleButtons = document.querySelectorAll(".category-toggle");

  // Remove active class from all buttons
  allToggleButtons.forEach((button) => {
    button.classList.remove("active");
  });

  // Add active class to the clicked button
  document
    .querySelector(`.category-toggle[data-category="${category}"]`)
    .classList.add("active");

  // If category is 'all', show all projects
  if (category === "all") {
    allProjects.forEach((project) => {
      project.style.display = "block";
    });
    return;
  }

  // Hide all projects first, then show only the selected category
  allProjects.forEach((project) => {
    if (project.getAttribute("data-category") === category) {
      project.style.display = "block";
    } else {
      project.style.display = "none";
    }
  });
}

// Initialize by showing all projects by default
document.addEventListener("DOMContentLoaded", () => {
  // Add click event listeners to all toggle buttons
  const toggleButtons = document.querySelectorAll(".category-toggle");
  toggleButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const category = button.getAttribute("data-category");
      toggleProjectCategory(category);
    });
  });

  // Initialize the hover effect for projects
  const projectWrappers = document.querySelectorAll(".project-wrapper");
  const projectContainer = document.querySelector(".project-container");

  // Add hover effect to highlight current card and blur others
  projectContainer.addEventListener("mouseover", (e) => {
    const hoveredWrapper = e.target.closest(".project-wrapper");

    if (hoveredWrapper) {
      projectWrappers.forEach((wrapper) => {
        if (wrapper !== hoveredWrapper && wrapper.style.display !== "none") {
          wrapper.classList.add("not-hovered");
        }
      });
    }
  });

  // Remove hover effect when mouse leaves the container
  projectContainer.addEventListener("mouseout", () => {
    projectWrappers.forEach((wrapper) => {
      wrapper.classList.remove("not-hovered");
    });
  });

  // Ensure all projects are shown initially
  toggleProjectCategory("all");
});

// Function to toggle the hamburger menu
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Function to toggle dark mode
function toggleDarkMode() {
  const body = document.body;
  body.classList.toggle('dark-mode');

  // Save preference to localStorage
  if (body.classList.contains('dark-mode')) {
    localStorage.setItem('dark-mode', 'enabled');
  } else {
    localStorage.setItem('dark-mode', 'disabled');
  }
}

// Function to scroll to the target section
function scrollToSection(event) {
  const targetSelector = event.currentTarget.getAttribute('data-target');
  const targetElement = document.querySelector(targetSelector);
  if (targetElement) {
    window.scrollTo({
      top: targetElement.offsetTop,
      behavior: 'smooth'
    });
  }
}

// Check localStorage on page load and apply the saved preference
document.addEventListener('DOMContentLoaded', () => {
  const darkModeStatus = localStorage.getItem('dark-mode');
  if (darkModeStatus === 'enabled') {
    document.body.classList.add('dark-mode');
  }

  // Add event listeners for arrow icons
  document.querySelectorAll('.arrow').forEach(arrow => {
    arrow.addEventListener('click', scrollToSection);
  });
});

// Add event listeners
document.querySelector(".hamburger-icon").addEventListener("click", toggleMenu);
document.getElementById('dark-mode-toggle').addEventListener('click', toggleDarkMode);

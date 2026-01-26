// Create the button element
const button = document.createElement('button');
button.id = 'colon-one-back-to-top';
button.title = 'Back to Top';
button.innerHTML = `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M18 15l-6-6-6 6"/>
</svg>
`;

// Append directly to body
document.body.appendChild(button);

// Click handler
button.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Scroll handler to toggle visibility
const toggleVisibility = () => {
  if (window.scrollY > 300) {
    button.classList.add('visible');
  } else {
    button.classList.remove('visible');
  }
};

window.addEventListener('scroll', toggleVisibility);
// Initial check
toggleVisibility();

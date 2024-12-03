document.addEventListener("DOMContentLoaded", () => {
  const logo = document.getElementById('city-logo'); // Select the image by ID
  
  // Function to update the logo based on screen width
  const updateLogo = () => {
    if (window.innerWidth <= 768) {
      logo.src = '/Icons/citylogosmall.svg'; // Mobile logo
    } else {
      logo.src = '/Icons/citylogo.svg'; // Desktop logo 
    }
  };

  // Initial check when the page loads
  updateLogo();

  // Update the logo dynamically on window resize
  window.addEventListener("resize", updateLogo);
});

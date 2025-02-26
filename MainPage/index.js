document.addEventListener('DOMContentLoaded', function() {
    // Get all dropdowns on the page
    let dropdowns = document.querySelectorAll('.dropdown');
  
    // Add mouseover and mouseout event listeners to each dropdown
    dropdowns.forEach(function(dropdown) {
        let timer; // Declare a timer variable for use with setTimeout and clearTimeout
      
      dropdown.onmouseenter = function() {
        clearTimeout(timer); // Cancel the timeout to hide the dropdown if mouse re-enters
        dropdown.querySelector('.dropdown-content').style.display = 'block'; // Show dropdown
      };
      
      dropdown.onmouseleave = function() {
        // Set timeout to hide the dropdown, allowing for a delay
        timer = setTimeout(function() {
          dropdown.querySelector('.dropdown-content').style.display = 'none'; // Hide dropdown
        }, 65); // Delay in milliseconds
      };
    });
  });

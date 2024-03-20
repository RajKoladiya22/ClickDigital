    // Wait for the page to load
    document.addEventListener("DOMContentLoaded", function() {
        // Simulate loading for 2 seconds
        setTimeout(function() {
        // Hide loader with fade-out transition
        document.querySelector('.loader').style.opacity = '0';
        // Show content with fade-in transition
        document.querySelector('.content').classList.add('visible');
        }, 2000);
    });
    
    
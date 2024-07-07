document.addEventListener('DOMContentLoaded', function() {
    // Animation for the navbar
    gsap.from(".navbar", { 
        duration: 1, 
        y: -100, 
        opacity: 0, 
        ease: "bounce" 
        
    });

    // Animation for the section-1 header
    gsap.from(".section-1 h1", { 
        duration: 1.5, 
        x: -200, 
        opacity: 0, 
        delay: 0.5 
    });
    
    gsap.from(".section-1 p", { 
        duration: 1.5, 
        x: 200, 
        opacity: 0, 
        delay: 1 
    });
    
    gsap.from(".download-brochure-button", { 
        duration: 1.5, 
        scale: 0.5, 
        opacity: 0, 
        delay: 1.5 
    });

    // Animation for container-1 image
    gsap.from(".container-1 img", ".container-8 img", { 
        duration: 1.5, 
        scale: 0, 
        opacity: 0, 
        delay: 2 
    });

      
});

document.querySelector('.hamb').addEventListener('click', function() {
    const navLinks = document.querySelectorAll('.navl');
    navLinks.forEach(navLink => {
        if (navLink.style.left === '0%') {
            navLink.style.left = '-100%';
            setTimeout(() => {
                navLink.style.display = 'none';
            }, 300); // delay display none to match the transition duration
        } else {
            navLink.style.display = 'block';
            setTimeout(() => {
                navLink.style.left = '0%';
            }, 10); // small delay to ensure display block before transition starts
        }
    });
});

window.addEventListener("load", function() {
    const form = document.getElementById('my-form');
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      const data = new FormData(form);
      const action="https://script.google.com/macros/s/AKfycbyfi2SFQ5crP9HIOrk8UimpCJiZCW-vzfG-igqn7tK0Y2kffvAPCgNI082KDmkDnTA8/exec";
      fetch(action, {
        method: 'POST',
        body: data,
      })
      .then(() => {
        alert("Thank YOU!\n Our Team will Contact you Shortly.");
      })
    });
  });

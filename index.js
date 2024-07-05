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

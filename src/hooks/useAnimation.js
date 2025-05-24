import { useEffect } from 'react';

const useAnimation = () => {
  useEffect(() => {
    // Check if animations have already been shown in this session
    const animationsShown = sessionStorage.getItem('animationsShown');
    
    if (!animationsShown) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          // Add the active class when the element is in the viewport
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            // Once the animation is triggered, unobserve the element
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1 }); // Trigger when at least 10% of the element is visible
      
      // Observe all elements with the 'animate' class
      document.querySelectorAll('.animate').forEach(element => {
        observer.observe(element);
      });
      
      // Mark animations as shown for this session
      sessionStorage.setItem('animationsShown', 'true');
      
      return () => {
        // Clean up the observer when the component unmounts
        if (observer) {
          document.querySelectorAll('.animate').forEach(element => {
            observer.unobserve(element);
          });
        }
      };
    } else {
      // If animations have already been shown, immediately add active class
      document.querySelectorAll('.animate').forEach(element => {
        element.classList.add('active');
      });
    }
  }, []);
};

export default useAnimation;
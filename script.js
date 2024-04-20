// Selecting all images within the social-icons list
document.querySelectorAll('.social-icons img').forEach(item => {
  // Adding mouseover event listener to scale the icons up and add a shadow
  item.addEventListener('mouseover', () => {
    item.style.transform = 'scale(1.1)';
    item.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.2)';
  });
  // Adding mouseout event listener to reset the icons to their original state
  item.addEventListener('mouseout', () => {
    item.style.transform = 'scale(1)';
    item.style.boxShadow = 'none';
  });
});

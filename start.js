// Generate random positions for sparkles
function getRandomPosition(min, max) {
    return Math.random() * (max - min) + min;
  }
  
  // Add sparkles to the container
  function addSparkles() {
    const container = document.getElementById('sparkle-container');
  
    for (let i = 0; i < 20; i++) {
      const sparkle = document.createElement('div');
      sparkle.className = 'sparkle';
  
      sparkle.style.left = getRandomPosition(0, container.offsetWidth) + 'px';
      sparkle.style.top = getRandomPosition(0, container.offsetHeight) + 'px';
  
      container.appendChild(sparkle);
    }
  }
  
  // Call the addSparkles function to add sparkles
  addSparkles();
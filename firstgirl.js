var hairElements = document.querySelectorAll(".hair1, .hair2, .hair3,.clothes1, .clothes2, .clothes3, .clothes4, .clothes5, .shoes1, .shoes2, .shoes3, .earing, .glasss, .necklace");

hairElements.forEach(function(hairElement) {
  var isMouseDown = false;
  var offsetX, offsetY;

  hairElement.addEventListener("mousedown", function(event) {
    isMouseDown = true;
    
    offsetX = event.clientX - hairElement.offsetLeft;
    offsetY = event.clientY - hairElement.offsetTop;
    hairElement.style.zIndex = "1"; // Bring the hair element to the front while dragging
  });

  document.addEventListener("mouseup", function() {
    isMouseDown = false;
    hairElement.style.zIndex = "auto"; // Reset the z-index after dragging
  });

  document.addEventListener("mousemove", function(event) {
    if (isMouseDown) {
      var x = event.clientX - offsetX;
      var y = event.clientY - offsetY;
      hairElement.style.left = x + "px";
      hairElement.style.top = y + "px";
    }
  });
});


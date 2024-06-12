canvas = document.getElementById("MyCanvas");

const ctx = canvas.getContext("2d");

function animate() {
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;

  requestAnimationFrame(animate);
}
animate();

function toggleMenu() {
  document.querySelector(".nav-links").classList.toggle("active");
}
document.addEventListener("DOMContentLoaded", function () {
  const text = "Dobrodošli u Mostar";
  let index = 0;
  const speed = 100;

  function typeWriter() {
    if (index < text.length) {
      document.getElementById("typewriter").innerHTML += text.charAt(index);
      index++;
      setTimeout(typeWriter, speed);
    }
  }

  typeWriter();
});

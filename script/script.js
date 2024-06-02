document.addEventListener("DOMContentLoaded", function() {
  let sections = document.querySelectorAll("section");

  function checkPosition() {
    for (let section of sections) {
      let position = section.getBoundingClientRect().top;
      let screenHeight = window.innerHeight;

      if (position < screenHeight * 0.75) {
        section.classList.add("visible");
      }
    }
  }

  window.addEventListener("scroll", checkPosition);
  window.addEventListener("resize", checkPosition);

  checkPosition();
});

document.addEventListener("DOMContentLoaded", function() {
  const carouselContainer = document.querySelector(".carrosel-container");
  const nextBtn = document.querySelector(".next-btn");
  const prevBtn = document.querySelector(".prev-btn");

  let clickCount = 0;
  const maxClicks = 3; // Número máximo de cliques antes de reiniciar o carrossel

  nextBtn.addEventListener("click", function() {
    clickCount++;
    if (clickCount >= maxClicks) {
      clickCount = 0; // Reinicia o contador de cliques
      carouselContainer.style.transform = "translateX(0)"; // Reinicia o carrossel para a primeira imagem
    } else {
      const imageWidth = document.querySelector(".carrosel img").offsetWidth + 20; // Largura da imagem + margem
      carouselContainer.style.transform = `translateX(-${clickCount * imageWidth}px)`; // Move para a próxima imagem
    }
  });

  prevBtn.addEventListener("click", function() {
    if (clickCount > 0) {
      clickCount--;
    } else {
      clickCount = maxClicks - 1; // Volta para a última imagem
    }
    const imageWidth = document.querySelector(".carrosel img").offsetWidth + 20; // Largura da imagem + margem
    carouselContainer.style.transform = `translateX(-${clickCount * imageWidth}px)`; // Move para a imagem anterior
  });
});
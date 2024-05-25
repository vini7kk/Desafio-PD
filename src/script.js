const container = document.querySelector(".container");
const imagens = document.querySelectorAll(".container img");

// Clone da primeira imagem sendo adicionada ao final do carrossel
const cloneImg = imagens[0].cloneNode(true);
container.appendChild(cloneImg);

let contador = 0;

function slider() {
  // Atualiza a posição do carrossel para exibir a próxima imagem
  contador++;

  // Calcula o deslocamento da próxima imagem
  const deslocamento = -contador * 400;

  // Define a transição para a mudança de imagem
  container.style.transition = 'transform 1s ease-in-out';

  // Move o carrossel para exibir a próxima imagem
  container.style.transform = `translateX(${deslocamento}px)`;

  // Se o contador atingir o número de imagens, reinicia para mostrar a primeira imagem
  if (contador === imagens.length) {
    // Aguarda a transição terminar
    setTimeout(() => {
      // Remove a transição para evitar que o usuário perceba a mudança para o clone da primeira imagem
      container.style.transition = 'none';
      // Reinicia o contador e a posição do carrossel
      contador = 0;
      container.style.transform = `translateX(0)`;
      // Adiciona uma pequena pausa antes de reiniciar a transição
      setTimeout(() => {
        container.style.transition = 'transform 1s ease-in-out';
      }, 50);
    }, 1000); // Tempo para a transição terminar
  }
}

// Chama a função slider a cada 3 segundos para criar o efeito de loop
setInterval(slider, 3000);

document.addEventListener("DOMContentLoaded", function() {
  // Efeito de transição para as seções da página
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

  // Alerta de boas-vindas
  Swal.fire({
      icon: 'success',
      title: 'Bem-vindo ao Monitoramento Marinho!',
      text: 'Estamos felizes em tê-lo aqui.',
      showConfirmButton: false,
      timer: 3000 // O alerta será fechado automaticamente após 3 segundos
  }).then((result) => {
      // Após o alerta de boas-vindas, exibe o alerta de login
      if (result.dismiss === Swal.DismissReason.timer) {
          showLoginAlert();
      }
  });
});

function showLoginAlert() {
  // Alerta de login
  Swal.fire({
      icon: 'info',
      title: 'Faça o Login para Continuar',
      html:
          '<input id="swal-input1" class="swal2-input" placeholder="Nome de usuário">' +
          '<input type="password" id="swal-input2" class="swal2-input" placeholder="Senha">',
      focusConfirm: false,
      footer: '<a href="login.html">Não há cadastro? Faça aqui</a>',
      preConfirm: () => {
          const username = Swal.getPopup().querySelector('#swal-input1').value;
          const password = Swal.getPopup().querySelector('#swal-input2').value;
          // Aqui você pode adicionar a lógica para verificar o login
          // Por exemplo, enviar os dados para o servidor e verificar a resposta
          // Se o login for válido, você pode redirecionar o usuário para a próxima página
      }
  });
}

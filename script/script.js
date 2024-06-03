// Aguarda o carregamento completo do DOM antes de executar o código
document.addEventListener("DOMContentLoaded", function() {
    // Seleciona todas as seções da página para aplicar o efeito de transição
    let sections = document.querySelectorAll("section");

    // Função para verificar a posição das seções na tela
    function checkPosition() {
        for (let section of sections) {
            // Obtém a posição superior da seção em relação à viewport
            let position = section.getBoundingClientRect().top;
            let screenHeight = window.innerHeight;

            // Adiciona a classe 'visible' se a seção estiver a 75% da altura da tela
            if (position < screenHeight * 0.75) {
                section.classList.add("visible");
            }
        }
    }

    // Adiciona eventos de scroll e resize para verificar a posição das seções
    window.addEventListener("scroll", checkPosition);
    window.addEventListener("resize", checkPosition);

    // Verifica a posição das seções inicialmente
    checkPosition();

    // Exibe um alerta de boas-vindas ao usuário
    Swal.fire({
        icon: 'success',
        title: 'Bem-vindo ao Monitoramento Marinho!',
        text: 'Estamos felizes em tê-lo aqui.',
        showConfirmButton: false, // Não exibe o botão de confirmação
        timer: 3000 // Fecha automaticamente após 3 segundos
    }).then((result) => {
        // Após o alerta de boas-vindas, exibe o alerta de login
        if (result.dismiss === Swal.DismissReason.timer) {
            showLoginAlert(); // Chama a função para mostrar o alerta de login
        }
    });
});

// Função para exibir o alerta de login
function showLoginAlert() {
    // Verifica se o cookie "cadastro_feito" está presente
    if (document.cookie.includes("cadastro_feito=true")) {
        // Remove o cookie após verificação
        document.cookie = "cadastro_feito=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        return; // Não mostra o alerta de login se o cookie estiver presente
    }

    // Exibe um alerta de login ao usuário
    Swal.fire({
        icon: 'info',
        title: 'Faça o Login para Continuar',
        html:
            '<input id="swal-input1" class="swal2-input" placeholder="Nome de usuário">' +
            '<input type="password" id="swal-input2" class="swal2-input" placeholder="Senha">',
        focusConfirm: false, // Não foca no botão de confirmação automaticamente
        footer: '<a href="login.html">Não há cadastro? Faça aqui</a>', // Link para cadastro
        preConfirm: () => {
            // Captura os valores dos campos de entrada
            const username = Swal.getPopup().querySelector('#swal-input1').value;
            const password = Swal.getPopup().querySelector('#swal-input2').value;
        }
    });
}

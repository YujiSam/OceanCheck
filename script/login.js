// Aguarda o carregamento completo do DOM antes de executar o código
document.addEventListener("DOMContentLoaded", function() {
    // Seleciona os elementos do DOM pelo ID
    const signupFormContainer = document.getElementById("signup-form-container");
    const loginFormContainer = document.getElementById("login-form-container");
    const toggleBtn = document.getElementById("toggle-btn");
    const toggleBtnLogin = document.getElementById("toggle-btn-login");

    // Adiciona um evento de clique ao botão de alternância
    toggleBtn.addEventListener("click", function() {
        // Alterna a classe "hidden" nos containers de formulário de cadastro e login
        signupFormContainer.classList.toggle("hidden");
        loginFormContainer.classList.toggle("hidden");

        // Alterna o texto do botão de alternância com base no estado atual
        if (toggleBtn.textContent === "Alternar para Cadastro") {
            toggleBtn.textContent = "Alternar para Login";
        } else {
            toggleBtn.textContent = "Alternar para Cadastro";
        }
    });

    // Adiciona um evento de clique ao botão de login
    toggleBtnLogin.addEventListener("click", function() {
        // Captura os valores dos campos de username e password
        const username = document.getElementById("login-username").value;
        const password = document.getElementById("login-password").value;
        // Aqui você pode adicionar a lógica de validação ou envio de login
    });

    // Define um cookie indicando que o cadastro foi realizado com sucesso
    document.cookie = "cadastro_feito=true; path=/";
});

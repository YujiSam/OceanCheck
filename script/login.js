document.addEventListener("DOMContentLoaded", function() {
    const signupFormContainer = document.getElementById("signup-form-container");
    const loginFormContainer = document.getElementById("login-form-container");
    const toggleBtn = document.getElementById("toggle-btn");
    const toggleBtnLogin = document.getElementById("toggle-btn-login");

    toggleBtn.addEventListener("click", function() {
        signupFormContainer.classList.toggle("hidden");
        loginFormContainer.classList.toggle("hidden");

        if (toggleBtn.textContent === "Alternar para Cadastro") {
            toggleBtn.textContent = "Alternar para Login";
        } else {
            toggleBtn.textContent = "Alternar para Cadastro";
        }
    });

    toggleBtnLogin.addEventListener("click", function() {
        const username = document.getElementById("login-username").value;
        const password = document.getElementById("login-password").value;
    });

    // Após o cadastro bem-sucedido
    document.cookie = "cadastro_feito=true; path=/";
});

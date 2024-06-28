function validarEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validarSenha(senha) {
    const senhaRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/;
    return senhaRegex.test(senha);
}

function exibirMensagemErro(elemento, mensagem) {
    const mensagemErro = document.getElementById(elemento);
    mensagemErro.textContent = mensagem;
    mensagemErro.style.display = 'block';
}

function esconderMensagensErro() {
    document.querySelectorAll('.error-message').forEach((mensagem) => {
        mensagem.style.display = 'none';
    });
}

function validarFormulario(event) {
    event.preventDefault();
    esconderMensagensErro();

    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    let formularioValido = true;

    if (!validarEmail(email)) {
        alert('email-erro', 'Por favor, insira um email válido.');
        formularioValido = false;
    }

    if (!validarSenha(senha)) {
        alert('senha-erro', 'A senha deve ter pelo menos 6 caracteres, incluindo uma letra maiúscula, uma letra minúscula e um número.');
        formularioValido = false;
    }

    if (formularioValido) {
        alert('Formulário enviado com sucesso!');
    }
}

function toggleSenhaVisibility() {
    const senhaInput = document.getElementById('senha');
    const toggleIcon = document.getElementById('toggle-senha');

    const type = senhaInput.getAttribute('type') === 'password' ? 'text' : 'password';
    senhaInput.setAttribute('type', type);
    toggleIcon.classList.toggle('fa-eye-slash');
    toggleIcon.classList.toggle('fa-eye');
}
function validarEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validarSenha(senha) {
    const senhaRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/;
    return senhaRegex.test(senha);
}

function validarCPF(cpf) {
    const cpfRegex = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/;
    return cpfRegex.test(cpf);
}

function validarData(data) {
    const dataRegex = /^\d{2}\/\d{2}\/\d{4}$/;
    return dataRegex.test(data);
}

function validarTelefone(telefone) {
    const telefoneRegex = /^\(\d{2}\) \d{5}\-\d{4}$/;
    return telefoneRegex.test(telefone);
}

function validarFormulario(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const cpf = document.getElementById('cpf').value;
    const data = document.getElementById('data').value;
    const telefone = document.getElementById('telefone').value;

    let formularioValido = true;

    if (!validarEmail(email)) {
        alert('Por favor, insira um email válido.');
        formularioValido = false;
    }

    if (!validarSenha(senha)) {
        alert('A senha deve ter pelo menos 6 caracteres, incluindo uma letra maiúscula, uma letra minúscula e um número.');
        formularioValido = false;
    }

    if (!validarCPF(cpf)) {
        alert('Por favor, insira um CPF válido no formato 000.000.000-00.');
        formularioValido = false;
    }

    if (!validarData(data)) {
        alert('Por favor, insira uma data de nascimento válida no formato DD/MM/AAAA.');
        formularioValido = false;
    }

    if (!validarTelefone(telefone)) {
        alert('Por favor, insira um telefone válido no formato (00) 00000-0000.');
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
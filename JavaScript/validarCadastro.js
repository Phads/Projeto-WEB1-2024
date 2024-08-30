function validarFormulario() {

    const formulario = document.getElementById("formulario")
    const nome = document.getElementById("nome");
    const email = document.getElementById("email");
    const fone = document.getElementById("fone");
    const senha = document.getElementById("senha");
    const confirmarSenha = document.getElementById("confirmarSenha");

    formulario.addEventListener('submit', (event) => {
        event.preventDefault();

        validarInputs();
    })

    function validarInputs() {
        const nomeValue = nome.value.trim();
        const emailValue = email.value.trim();
        const foneValue = fone.value.trim();
        const senhaValue = senha.value.trim();
        const confirmarSenhaValue = confirmarSenha.value.trim();

        if (nomeValue === '') {
            validarErro(nome, 'Preencha esse campo.');
        } else {
            validarSuccess(nome)
        }

        if (emailValue === '') {
            validarErro(email, 'Preencha esse campo.');
        } else if (!emailValue.match(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/)) {
            validarErro(email, 'insira um email válido.');
        } else {
            validarSuccess(email);
        }

        if (foneValue === '') {
            validarErro(fone, 'Preencha esse campo.');
        } else if (!foneValue.match(/^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/)) {
            validarErro(fone, 'Insira um telefone válido.');
        } else {
            validarSuccess(fone)
        }

        if (senhaValue === '') {
            validarErro(senha, 'Preencha esse campo.');
        } else if (senhaValue.length < 8) {
            validarErro(senha, 'A senha deve ter no mínimo 8 digitos.')
        } else {
            validarSuccess(senha);
        }

        if (confirmarSenhaValue === '') {
            validarErro(confirmarSenha, 'Preencha esse campo.');
        } else if (confirmarSenhaValue != senhaValue) {
            validarErro(confirmarSenha, 'As senhas devem ser iguais.')
        } else {
            validarSuccess(confirmarSenha);
        }
    }

    function validarErro(input, massage) {
        const inputCaixaTexto = input.parentElement;
        const small = inputCaixaTexto.querySelector('small');

        small.innerText = massage;

        inputCaixaTexto.className = 'inputCaixaTexto error';
    }

    function validarSuccess(input) {
        const inputCaixaTexto = input.parentElement;

        inputCaixaTexto.className = 'inputCaixaTexto success';
    }
}
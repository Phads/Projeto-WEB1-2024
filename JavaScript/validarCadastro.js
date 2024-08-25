function validar() {
    const nome = document.getElementById("nome");
    const email = document.getElementById("email");
    const fone = document.getElementById("fone");
    const senha = document.getElementById("senha");

    if (nome.value == "" || email.value == "" || fone.value == "" || senha.value == "") {
        alert("Preencha os campos antes de continuar");
    }
}
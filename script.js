
document.getElementById("agendamentoForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    const nome = document.getElementById("nome").value;
    const cpf = document.getElementById("cpf").value;
    const telefone = document.getElementById("telefone").value;

    if (!nome || !cpf || !telefone) {
        mostrarMensagem("Por favor, preencha todos os campos!", "error");
        return;
    }

    const cpfRegex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
    if (!cpfRegex.test(cpf)) {
        mostrarMensagem("CPF inválido. O formato correto é XXX.XXX.XXX-XX.", "error");
        return;
    }

    const telefoneRegex = /^\(\d{2}\)\s\d{4,5}-\d{4}$/;
    if (!telefoneRegex.test(telefone)) {
        mostrarMensagem("Telefone inválido. O formato correto é (XX) XXXX-XXXX ou (XX) XXXXX-XXXX.", "error");
        return;
    }

    mostrarMensagem("Consulta agendada com sucesso! Em breve entraremos em contato.", "success");

    document.getElementById("agendamentoForm").reset();
});

function mostrarMensagem(mensagem, tipo) {
    const messageElement = document.getElementById("message");
    
    messageElement.innerHTML = mensagem;
    messageElement.classList.remove("hidden", "success", "error");

    if (tipo === "success") {
        messageElement.classList.add("success");
    } else if (tipo === "error") {
        messageElement.classList.add("error");
    }

    messageElement.classList.remove("hidden");
}

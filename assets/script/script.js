//Salvar dados
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const cpf = document.getElementById('cpf').value;
    const placa = document.getElementById('placa').value;
    localStorage.setItem('cpf', cpf);
    localStorage.setItem('placa', placa);
    window.location.href = "../views/dados.html"; 
});
//regastar dados do localstorag
document.addEventListener('DOMContentLoaded', function() {
    const cpf = localStorage.getItem('cpf');
    const placa = localStorage.getItem('placa');
    document.getElementById('cpf').value = cpf;
    document.getElementById('placa').value = placa;

    document.getElementById('nome').value = 'Nome do usuário'; // Exe=
});



//btn voltar 
document.getElementById("btnVoltaar").addEventListener("click", function() 
{ window.location.href = "../views/index.html";
});

//alerts
document.getElementById('butn').addEventListener('click', function(event) {
    event.preventDefault();
    const endereco = document.getElementById('endereco').value.trim();
    if (endereco !== '') {
        Swal.fire({
            title: 'Surpresa!',
            text: `O endereço "${endereco}" foi salvo com sucesso!`,
            icon: 'success'
        }).then((result) => {
            if (result.isConfirmed) {
                window.location.href = "../views/index.html";
            }
        });
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Por favor, preencha o campo de endereço antes de salvar!',
        });
    }
});


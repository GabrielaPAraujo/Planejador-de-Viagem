document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form-planejador');
    const tbody = document.getElementById('tabela');
    document.getElementById('destino').value = localStorage.getItem('destino') || '';
    document.getElementById('data-ida').value = localStorage.getItem('dataIda') || '';
    document.getElementById('data-volta').value = localStorage.getItem('dataVolta') || '';

    form.addEventListener('submit', function(event){
        event.preventDefault();

        const destino = document.getElementById('destino').value;
        const dataIda = document.getElementById('data-ida').value;
        const dataVolta = document.getElementById('data-volta').value;
        
        if(!destino || !dataIda || !dataVolta) {
            alert("Por favor, preencha todos os campos.");
            return;
        }

        if(new Date(dataIda) > new Date (dataVolta)) {
            alert("A data de volta não pode ser anterior à data de ida.");
            return;
        }
        localStorage.setItem('destino', destino);
        localStorage.setItem('dataIda', dataIda);
        localStorage.setItem('dataVolta', dataVolta);

        // adicionar a tabela uma nova linha com as infos
        const novaLinha = document.createElement('tr');
       novaLinha.innerHTML = `
            <tr>
                <td>${dataIda}</td>
                <td>${dataVolta}</td>
                <td>${destino}</td>
            </tr>`;

                 tbody.appendChild(novaLinha);

       

    });

});
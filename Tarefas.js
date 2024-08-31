let contador = 0; // Contador para identificar as tarefas
const input = document.getElementById('Text-tarefa');
const add = document.getElementById('btn-add');
const main = document.getElementById('arealista');

add.addEventListener('click', addTarefa);

function addTarefa() {
  const vlrinput = input.value.trim(); // Remove espaços extras

  if (vlrinput !== "") {
    contador++;
    let newItem = `
      <div id='${contador}' class="tarefa">
        <div onclick="marcarTarefa(${contador})" class="tarefa-icone">
          <i id='icone_${contador}' class="mdi mdi-circle-outline"></i>
        </div>
        <div onclick="marcarTarefa(${contador})" class="tarefa-nome">
          ${vlrinput}
        </div>
        <div class="tarefa-botao">
          <button onclick="confirmarDelecao(${contador})" class="delete"><i class="mdi mdi-delete"></i> Remover</button>
        </div>
      </div>
    `;

    main.innerHTML += newItem; // Adiciona a nova tarefa
    input.value = ""; // Limpa o campo de input
    input.focus(); // Foca no campo de input
  }
}

function confirmarDelecao(id) {
  const tarefa = document.getElementById(id);
  if (tarefa && tarefa.classList.contains('tarefa-clicado')) {
    tarefa.remove(); // Remove a tarefa se estiver clicada
  }
}

function marcarTarefa(id) {
  const item = document.getElementById(id);
  const icone = document.getElementById('icone_' + id);
  
  if (item.classList.contains('tarefa-clicado')) {
    // Se a tarefa já estiver clicada, remova-a da lista
    item.classList.remove('tarefa-clicado');
    icone.classList.remove('mdi-circle');
    icone.classList.add('mdi-circle-outline');
  } else {
    // Se a tarefa não estiver clicada, marque-a e mova para o final da lista
    item.classList.add('tarefa-clicado');
    icone.classList.remove('mdi-circle-outline');
    icone.classList.add('mdi-circle');

    // Move a tarefa para o final da lista
    main.appendChild(item);
  }
}

input.addEventListener('keyup', function(event) {
  if (event.key === 'Enter') { // Corrigido para usar `event.key`
    event.preventDefault();
    add.click();
  }
});

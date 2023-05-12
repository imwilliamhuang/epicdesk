document.querySelector("#salvar").addEventListener("click", cadastrar)

function cadastrar(){
    let marca = document.querySelector("#marca").value
    let modelo = document.querySelector("#modelo").value
    let preco = document.querySelector("#preco").value
    let categoria = document.querySelector("#categoria").value

    const tarefa = {
        marca,
        modelo,
        preco,
        categoria,
    }

    document.querySelector("#tarefas").innerHTML += gerarCard(tarefa)

}

function gerarCard(tarefa){
    return `<div class="col-12 col-md-6 col-lg-3">
                <div class="card">
                    <div class="card-header">
                        ${tarefa.marca}
                    </div>
                    <div class="card-body">
                        <p class="card-text">${tarefa.modelo}</p>
                        <p>
                            <span class="badge text-bg-warning">
                                ${tarefa.categoria}
                            </span>
                        </p>
                        <p>${tarefa.preco} Reais</p>
                        <a href="#" class="btn btn-success">
                            <i class="bi bi-check-lg"></i>
                        </a>
                        <a href="#" class="btn btn-danger">
                            <i class="bi bi-trash"></i>
                        </a>
                    </div>
                </div> <!-- card -->
            </div> <!-- col -->` 
}

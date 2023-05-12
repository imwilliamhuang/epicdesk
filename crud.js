document.querySelector("#salvar").addEventListener("click", cadastrar)

function cadastrar(){
    let marca = document.querySelector("#marca").value
    let modelo = document.querySelector("#modelo").value
    let preco = document.querySelector("#preco").value
    let categoria = document.querySelector("#categoria").value
    const modal = bootstrap.Modal.getInstance(document.querySelector("#exampleModal"))

    const tarefa = {
        marca,
        modelo,
        preco,
        categoria,
    }

    if (!isValid(tarefa.marca, document.querySelector("#marca"))) return
    if (!isValid(tarefa.modelo, document.querySelector("#modelo"))) return


    document.querySelector("#tarefas").innerHTML += gerarCard(tarefa)

    modal.hide()

}

function isValid(valor, campo){
    if(valor == ""){
        campo.classList.add("is-invalid")
        campo.classList.remove("is-valid")
        return false
    }else{
        campo.classList.add("is-valid")
        campo.classList.remove("is-invalid")
        return true
    }

}

function apagar(botao){
    botao.parentNode.parentNode.parentNode.remove()
}


function gerarCard(tarefa){
    return `<div class="col-12 col-md-6 col-lg-3">
                <div class="card">
                    <div class="card-header">
                        ${tarefa.marca}
                    </div>
                    <div class="card-body">
                        <p class="card-text">${tarefa.modelo}</p>
                        <src>
                            <img src="images/lebron.avif" class="img-fluid" alt="...">
                        </src>
                        <p>
                            <span class="badge text-bg-warning">
                                ${tarefa.categoria}
                            </span>
                        </p>
                        <p>${tarefa.preco} Reais</p>
                        <a href="#" class="btn btn-success">
                            <i class="bi bi-check-lg"></i>
                        </a>
                        <a onClick="apagar(this)"href="#" class="btn btn-danger" title="Apagar Tarefa">
                            <i class="bi bi-trash"></i>
                            Apagar
                        </a>
                    </div>
                </div> <!-- card -->
            </div> <!-- col -->` 
}

const pagina = document.querySelector(".users_elements")
const btn = document.querySelector(".dtn_submit")

dados = [
    {nome: "Rafaella Ballerini", idade: 24, skills: "C#, React, Python"}
]


function handleSubmit(e){
    e.preventDefault()

    const name = document.querySelector("#name").value
    const idade = document.querySelector("#idade").value
    let skills = document.querySelector("#skills").value
    dados.push({nome: name, idade: idade, skills: skills})
  
    
    loadDate()
}


function loadDate(){
    pagina.innerHTML = ""
    dados.forEach(element => {
        pagina.innerHTML += `
             <div class="info_users_container">
                 <p><span>Nome</span>${element.nome}</p>
                 <p class="years"><span>Idade</span>${element.idade}</p>
                 <p><span>Skills</span>${element.skills}</p>
             </div>`
    })
 }



btn.addEventListener("click", handleSubmit)


window.onload = loadDate

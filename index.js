const response = document.querySelector("#response")
const inputQuestion = document.querySelector("#question")
const questionButton = document.querySelector("#questionButton")

const responses = [
  "Certeza!",
  "Não tenho tanta certeza.",
  "É decididamente assim.",
  "Não conte com isso.",
  "Sem dúvidas!",
  "Pergunte novamente mais tarde.",
  "Sim, definitivamente!",
  "Minha resposta é não.",
  "Você pode contar com isso.",
  "Melhor não te dizer agora.",
  "A meu ver, sim.",
  "Minhas fontes dizem não.",
  "Provavelmente.",
  "Não é possível prever agora.",
  "Perspectiva boa.",
  "As perspectivas não são tão boas.",
  "Sim.",
  "Concentre-se e pergunte novamente.",
  "Sinais apontam que sim."
]


function askQuestion() {

  if (inputQuestion.value === "") {
    alert("Digite sua pergunta")
    return
  }

  questionButton.setAttribute("disabled", true)

  const ask = "<div>" + inputQuestion.value + "</div>"


  const totalResponse = responses.length
  const numberRadom = Math.floor(Math.random() * totalResponse)

  response.innerHTML = ask + responses[numberRadom]

  response.style.opacity = 1;

  setTimeout(function () {
    response.style.opacity = 0;
    questionButton.removeAttribute("disabled", false)
  }, 3000)


}





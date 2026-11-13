function mudarTema() {
    document.body.classList.toggle("tema-escuro");
}

const btnTema = document.getElementById("btnTema");

btnTema.addEventListener("click", mudarTema);


const formulario = document.getElementById("formOrientacao");
const resultado = document.getElementById("resultado");
const alertBox = document.getElementById("alertBox");


formulario.addEventListener("submit", function(event) {

    const nomeUsuario = document.getElementById("nomeUsuario").value.trim();
    event.preventDefault();

    if (nomeUsuario === "") {

        alertBox.textContent = "⚠️ Ops! Por favor, digite seu nome antes de continuar.";
        alertBox.style.display = "block";
        return;

    } else {

        alertBox.style.display = "none";

        const dadosForm = new FormData(event.target);

        const tecnologiaSelecionada = dadosForm.get("tecnologia");

        switch (tecnologiaSelecionada) {

            case "HTML":
                resultado.textContent = `Olá, ${nomeUsuario}! Continue praticando estruturação de páginas, tags semânticas, formulários, links e organização de conteúdo.`;
                break;

            case "CSS":
                resultado.textContent = `Olá, ${nomeUsuario}! Continue praticando cores, espaçamentos, Flexbox, Grid e responsividade.`;
                break;

            case "JavaScript":
                resultado.textContent = `Olá, ${nomeUsuario}! Continue praticando variáveis, funções, condicionais, laços de repetição, arrays e manipulação do DOM.`;
                break;

            default:
                resultado.textContent = "Selecione uma tecnologia para receber sua orientação.";
                
        }

    }

});

function mudarTema() {
    document.body.classList.toggle("tema-escuro");
}

const btnTema = document.getElementById("btnTema");

btnTema.addEventListener("click", mudarTema);

const btnGerar = document.getElementById("btnGerarOrientacao");
const nomeUsuario = document.getElementById("nomeUsuario");
const alertBox = document.getElementById("alertBox");

btnGerar.addEventListener("click", function(event) {

    if (nomeUsuario.value.trim() === "") {

        event.preventDefault();

        alertBox.textContent = "⚠️ Ops! Por favor, digite seu nome antes de continuar.";

        alertBox.style.display = "block";

        return;
    }

    alertBox.style.display = "none";

}); 
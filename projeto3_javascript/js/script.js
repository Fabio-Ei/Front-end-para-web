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
    } else {
        const formulario = document.getElementById('meuFormulario');

        formulario.addEventListener('submit', function(event) {
            event.preventDefault();

            const dadosForm = new FormData(event.target);
  
  // O .get() vai buscar apenas o valor do radio que estiver selecionado
            const nivelSelecionado = dadosForm.get('nivel');
        }

    alertBox.style.display = "none";

}); 
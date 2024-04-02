let menu = document.getElementById('menu');
let toggleMenu = document.getElementById('toggle-menu');
let formCalc = document.getElementById("form-calc");
let resultado = document.getElementById("resultado");

//Função do calculo
formCalc.addEventListener("submit", (event) => {
    event.preventDefault();
    resultado.style = `Background-color: #fff;
                       border: 1px solid #222;
                       border-radius: 5px;
                       padding: 7px;`
    if (formCalc.number1.value === "") {
        resultado.innerHTML = "Digite um número"
    }

   if(operacao.value === "soma"){
    resultado.innerHTML = Number(formCalc.number1.value) + Number(formCalc.number2);
   }
   else if(operacao.value === "divisao"){
    resultado.innerHTML = Number(formCalc.number1.value) / Number(formCalc.number2);
   }
   else if(operacao.value === "subtracao"){
    resultado.innerHTML = Number(formCalc.number1.value) - Number(formCalc.number2);
   }
   else if(operacao.value === "multiplicacao"){
    resultado.innerHTML = Number(formCalc.number1.value) * Number(formCalc.number2);
   }
   else{
    resultado.innerHTML = "Selecione uma operação"
   }


})

toggleMenu.addEventListener("click", () => {
    menu.classList.toggle("hide");
})

//Função do MENU
function navMenu(link) {
    let item = document.getElementsByClassName(link);

    if (link === "calc" && item[0].style.display === "block")
        item[0].style.display = "none";
    else
        item[0].style.display = "block";
}

function calcular() {

  var arroz = document.getElementById("quantarroz").value
  var feijao = document.getElementById("quantfeijao").value
  var macarrao = document.getElementById("quantmacarrao").value
  
  document.getElementById("resultado").innerHTML = ((arroz * 6) + (feijao * 8) + (macarrao * 10))
}

function doar() {
  let doacao = confirm("Você tem certeza que quer fazer essa doação?")
  if (doacao == true) {
    alert("Obrigado por contribuir conosco! 😊")
  } else {
    alert("Doação Cancelada! 😔")
  }
  
  var arroz = document.getElementById("quantarroz").value
  var feijao = document.getElementById("quantfeijao").value
  var macarrao = document.getElementById("quantmacarrao").value
  var numero = document.getElementById("numerocartao").value
  var nome = document.getElementById("nome").value
  var cpf = document.getElementById("cpf").value
  var validade = document.getElementById("validade").value
  var cvv = document.getElementById("cvv").value

  localStorage.setItem("Doação de Arroz", arroz)
  localStorage.setItem("Doação de Feijão", feijao)
  localStorage.setItem("Doação de Macarrão", macarrao)
  localStorage.setItem("Número do Cartão", numero)
  localStorage.setItem("Nome", nome)
  localStorage.setItem("CPF", cpf)
  localStorage.setItem("Validade do Cartão", validade)
  localStorage.setItem("CVV do Cartão", cvv)
}
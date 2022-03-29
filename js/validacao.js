const botao = document.querySelector("botao-fale-conosco");
const tipoDeInput = input.dataset.tipo;
const caracteresValidos = "abcdefghijklmnopqrstuvwxyz0123456789.";
const inputs = document.querySelectorAll("input");
    
botao.addEventListener("click", (input) => {
  inputs.forEach((input) => {
    validaEnvioFormulario();

});

function validaEnvioFormulario(tipoDeInput) {
  if (validaMensagem && validaEmail) {
    alert(`Mensagem enviada com sucesso, ${usuario} `);
  }
}

function validaMensagem(tipoDeInput) {
  if (!tipoDeInput) {
    //se não houver retorna essa mensagem
    return alert("Erro no envio: Insira uma mensagem");
  } else {
    return true;
  }
}

function validaEmail(tipoDeInput) {
  if (!tipoDeInput.includes("@")) {
    return alert("Erro no envio: Endereço de mail inválido");
  } else if (tipoDeInput.includes("@")) {
    const [usuario, dominio] = tipoDeInput.split("@");

    if (usuario.length > 32) {
      return alert("Erro no envio: Endereço de mail inválido");
    } else if (!dominio.includes(".com")) {
      return alert("Erro no envio: Endereço de mail inválido");
    } else {
      const [primeiraParte, segundaParte] = dominio.split(".com");

      //se não tiver dados = true e entra no if
      if (segundaParte) {
        return alert("Erro no envio: Endereço de mail inválido");

        // se tiver dados = false e entra no else
      } else if (primeiraParte.length > 16) {
        return alert("Erro no envio: Endereço de mail inválido");
      } else {
        for (let char of usuario) {
          if (!caracteresValidos.includes(char.toLowerCase())) {
            return alert("Erro no envio: Endereço de mail inválido");
          }
        }

        if (primeiraParte.includes(".")) {
          return alert("Erro no envio: Endereço de mail inválido");
        } else {
          for (let char of primeiraParte) {
            if (!caracteresValidos.includes(char)) {
              return alert("Erro no envio: Endereço de mail inválido");
            } else {
              return true;
            }
          }
          return true;
        }
      }
    }
  }

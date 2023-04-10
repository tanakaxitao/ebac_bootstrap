$(document).ready(function () {
  $("#telefone").mask("(00) 00000-0000");
  $("form").validate({
    rules: {
      nome: {
        required: true,
      },
      email: {
        required: true,
      },
      telefone: {
        required: true,
      },
    },
    messages: {
      nome: "por favor insira o seu nome!",
      email: "por favor insira seu email",
      telefone: "por favor insira seu telefone!",
    },
    submitHandler: function (form) {
      const nome = $("#nome").val();
      alert(`cadastro de ${nome} feito com sucesso!`);
    },
    invalidHandler: function (evento, validador) {
      let camposIncorretos = validador.numberOfInvalids();
      if (camposIncorretos) {
        alert(`existe ${camposIncorretos} campos incorretos!`);
      }
    },
  });
});

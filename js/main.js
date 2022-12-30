$(document).ready(function () {
  let contador = 0
  let contador2 = 0
  let textoCamila =
    "Sou a psicóloga Camila Andrade e  tenho como objetivo prestar uma escuta especializada, em que o paciente possa fazer uso da psicoterapia como um lugar transformador. Sou pós graduanda em Terapia ABA e TCC. Minha atuação é dentro da abordagem cognitiva-comportamental, realizando a modalidade de psicoterapia breve, os mais diversos públicos"

  let textoAna =
    "“Bacharel em Administração de empresas pelo Centro Universitário Fiam- Faam, possuo facilidade em trabalhar em equipe, proatividade e foco são qualidades que me acompanham. Considero-me uma excelente profissional que estará agregando valor a sua equipe."

  let textoGil =
    "Cozinheira proativa com domínio de diversas gastronomias e mais de 5 anos de experiência no ramo, atuo como uma souschef informal no meu emprego atual. Além da prática, tenho vasto conhecimento teórico adquirido na faculdade de gastronomia. Adoraria uma oportunidade de um entrevista, na qual discutirei como poderia utilizar meus talentos como chefe de partida do seu hotel."

  $("p").replaceWith("<p>" + textoAna + "</p>")
  $("#anterior").click(function () {
    if (contador == 0) {
      contador = -1
      $("#foto-pessoa").attr("src", "images/imagem-gil.jpeg")
    } else if (contador == -1) {
      contador = 1

      $("#foto-pessoa").attr("src", "images/imagem-camila.jpeg")
    } else if (contador == 1) {
      contador = 0
      $("#foto-pessoa").attr("src", "images/imagem-ana.jpeg")
    }
  })
  $("#proximo").click(function () {
    if (contador == 0) {
      contador = 1
      $("#foto-pessoa").attr("src", "images/imagem-camila.jpeg")
    } else if (contador == 1) {
      contador = -1
      $("#foto-pessoa").attr("src", "images/imagem-gil.jpeg")
    } else if (contador == -1) {
      contador = 0
      $("#foto-pessoa").attr("src", "images/imagem-ana.jpeg")
    }
  })
  $("#proximo").click(function () {
    if (contador2 == 0) {
      contador2 = 1
      $("p").replaceWith("<p>" + textoCamila + "</p>")
      $("#nome").replaceWith("<span id='nome'> Camila Andrade </span>")
      $("#profissao").replaceWith("<span id='profissao'>Psicóloga </span>")
    } else if (contador2 == 1) {
      contador2 = -1
      $("p").replaceWith("<p>" + textoGil + "</p>")
      $("#nome").replaceWith("<span id='nome'> Gil Andrade </span>")
      $("#profissao").replaceWith(
        "<span id='profissao'>Chef de Cozinha </span>"
      )
    } else if (contador2 == -1) {
      $("P").replaceWith("<p>" + textoAna + "</p>")
      $("#nome").replaceWith("<span id='nome'> Ana Clara </span>")
      $("#profissao").replaceWith(
        "<span id='profissao'>Analista Backoffice </span>"
      )
      contador2 = 0
    }
  })
  $("#anterior").click(function () {
    if (contador2 == 0) {
      contador2 = -1
      $("p").replaceWith("<p>" + textoGil + "</p>")
      $("#nome").replaceWith("<span id='nome'> Gil Andrade </span>")
      $("#profissao").replaceWith(
        "<span id='profissao'>Chef de Cozinha </span>"
      )
    } else if (contador2 == -1) {
      contador2 = 1
      $("p").replaceWith("<p> " + textoCamila + "</p>")
      $("#nome").replaceWith("<span id='nome'> Camila Andrade </span>")
      $("#profissao").replaceWith("<span id='profissao'>Psicóloga </span>")
    } else if (contador2 == 1) {
      contador2 = 0
      $("P").replaceWith("<p>" + textoAna + "</p>")
      $("#nome").replaceWith("<span id='nome'> Ana Clara </span>")
      $("#profissao").replaceWith(
        "<span id='profissao'>Analista Backoffice </span>"
      )
    }
  })
})

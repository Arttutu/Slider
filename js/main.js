$(document).ready(function () {
  let contador = 0
  let contador2 = 0
  let textoCamila =
    "Sou a psicóloga Camila Andrade e  tenho como objetivo prestar uma escuta especializada, em que o paciente possa fazer uso da psicoterapia como um lugar transformador. Sou pós graduanda em Terapia ABA e TCC. Minha atuação é dentro da abordagem cognitiva-comportamental, realizando a modalidade de psicoterapia breve, os mais diversos públicos"

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
      $("p").replaceWith(
        "<p>Sou a psicóloga Camila Andrade e  tenho como objetivo prestar uma escuta especializada, em que o paciente possa fazer uso da psicoterapia como um lugar transformador. Sou pós graduanda em Terapia ABA e TCC. Minha atuação é dentro da abordagem cognitiva-comportamental, realizando a modalidade de psicoterapia breve, os mais diversos públicos</p>"
      )
    } else if (contador2 == 1) {
      contador2 = -1
      $("p").replaceWith(
        "<p>Ainda não sei o que vou colocar aqui, mas você que está lendo esse texto sinta se a vontade para me ajudar</p>"
      )
    } else if (contador2 == -1) {
      $("P").replaceWith(
        "<p>“Bacharel em Administração de empresas pelo Centro Universitário Fiam- Faam, possuo facilidade em trabalhar em equipe, proatividade e foco são qualidades que me acompanham. Considero-me uma excelente profissional que estará agregando valor a sua equipe. teste“</p>"
      )
      contador2 = 0
    }
  })
})

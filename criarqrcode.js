var nOpc = false;

var botaoAdicionar = document.querySelector("#gerar");
botaoAdicionar.addEventListener("click", function(event) {
  console.log(nOpc);
    event.preventDefault();

    if(nOpc){
      alert("Recarregue a pagina antes de gerar um novo QrCode!");
      return
    }

    var tamanho1 = document.getElementById("tamanho1")
    var tamanho2 = document.getElementById("tamanho2")

  var qrcode = new QRCode(document.getElementById("qrcode"), {
    width : tamanho1.value,
    height : tamanho2.value
  });



  function makeCode () {
    var elText = document.getElementById("text");

    if (!elText.value) {
      alert("Input a text");
      elText.focus();
      return;
    }

    nOpc = true
    qrcode.makeCode(elText.value);
  }


  nOpc = true
  makeCode();
  console.log(nOpc);

  $("#text").
    on("blur", function () {
      makeCode();
    }).
    on("keydown", function (e) {
      if (e.keyCode == 13) {
        makeCode();
      }
    });

});

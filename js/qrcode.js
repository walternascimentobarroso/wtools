var qrcode = new QRCode("qrcode");

// var qrcode = new QRCode(document.getElementById("qrcode"), {
// 	text: "http://jindo.dev.naver.com/collie",
// 	width: 128,
// 	height: 128,
// 	colorDark : "#000000",
// 	colorLight : "#ffffff",
// 	correctLevel : QRCode.CorrectLevel.H
// });

function makeCode() {
    var elText = document.getElementById("text");

    if (!elText.value) {
        alert("Input a text");
        elText.focus();
        return;
    }

    qrcode.makeCode(elText.value);
}

makeCode();

document.getElementById("text").addEventListener("blur", function( event ) {
    makeCode();
  }, true);

// $("#text").
//     on("blur", function () {
//         makeCode();
//     }).
//     on("keydown", function (e) {
//         if (e.keyCode == 13) {
//             makeCode();
//         }
//     });

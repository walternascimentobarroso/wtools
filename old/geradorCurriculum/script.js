function binaryToText(str) {
  let output = [];
  str.split(" ").forEach((element) => {
    output.push(String.fromCharCode(parseInt(element, 2)));
  });
  return output.join("");
}

function textToBinary(str) {
  let output = "";
  str.split("").forEach((element) => {
    let char = element.charCodeAt(0).toString(2);
    output += ("00000000" + char).slice(-8).concat(" ");
  });
  return output;
}

console.log(textToBinary("  d 0 123 5"));

console.log(
  binaryToText("00100000 00100000 01100100 00100000 00110000 00100000 00110001 00110010 00110011 00100000 00110101")
);

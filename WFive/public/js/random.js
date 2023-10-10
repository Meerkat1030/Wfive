var text1 = "";
var text2 = "";
var result = "";
var alphabet = "abcdefghijklmnopqrstuvwxyz";
var num = "0123456789";

for (var i = 0; i < 4; i++) {
  text1 += alphabet.charAt(Math.floor(Math.random() * alphabet.length));
  text2 += num.charAt(Math.floor(Math.random() * num.length));
}
result = text1 + text2;

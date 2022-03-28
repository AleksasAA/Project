console.log("Labas pasauli is kito failo")

var skaicius1 = 5;
var skaicius2 = 5.5;
var suma = skaicius1 + skaicius2;
var daugyba = skaicius1 * skaicius2;
var dalyba = skaicius1 / skaicius2;
var modulo = skaicius1 % skaicius2;

console.log(skaicius1);
console.log(skaicius2);
console.log(suma);
console.log(daugyba);
console.log(dalyba);
console.log(modulo);

var vardas1 = "Jonas 'Dzonas' Jonaites";
var vardas2 = 'Onute Onaite';
console.log(vardas1 + " " + vardas2);
var raideN = vardas1.indexOf("n");
var vardas1substring = vardas1.substring(0, 4);
console.log(vardas1substring)

var arLis = false
if (arLis == true) {
    console.log("imsiu skieti")

} else {
console.log("uzsidesiu akinius nuo saule")
}

let d = new Date();
console.log(d.getFullYear());
console.log(d.getMonth());


for(var i = 0; i < 10; i++) {
    console.log(i)
}

let lotteryNumbers1 = [12, 30, 40, 20]
let lotteryNumbers2 = [45, 35, 18]
console.log(lotteryNumbers1[10])

let allLotteryNumbers = [].concat(lotteryNumbers1, lotteryNumbers2)
console.log(allLotteryNumbers)
console.log(allLotteryNumbers.lastIndexOf(45))


function gautiSuma(x,y) {
    var suma = x + y;
    return suma

}

function atspauzdintiSuma(x, y) {
    var suma = x + y;
    console.log(suma);

}
console.log(gautiSuma(1, 2))
atspauzdintiSuma(2, 3)
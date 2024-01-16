var animel = ["apa", "orangutang", "gorilla", "get", "giraff"];
console.log(animel);
var obj1 = {
    name: "Anton",
    age: 15,
    married: true,
};
console.log(obj1);
function hej(x) {
    return "Hej ".concat(x);
}
animel.forEach(function (element) {
    console.log(hej(element));
});

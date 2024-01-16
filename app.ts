let animel: string[] = ["apa", "orangutang", "gorilla", "get", "giraff"];
console.log(animel);

let obj1: object = {
  name: "Anton",
  age: 15,
  married: true,
};
console.log(obj1);

function hej(x: string): string {
  return `Hej ${x}`;
}
animel.forEach((element) => {
  console.log(hej(element));
});

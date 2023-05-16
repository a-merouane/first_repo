//arrays
let s = [1, 2, 3];
let v = s;
s = 5;
console.log(s);
console.log(v);

//methods
let string = "hello world";

console.log(string.slice(string.indexOf(" ") + 1)); // + 1 to remove the space before "world" in output
console.log(string.split(" ")); // output: ["hello", "world"]
console.log(string.toUpperCase()); // output: HELLO WORLD
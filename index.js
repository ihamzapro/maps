//        <------------------Fundamental of Maps----------------->
const rest = new Map();
rest.set("name", "Gujranwala");
rest.set(1, "Lahore");
console.log(rest.set(2, "Karachi"));
rest
  .set("categories", ["sweety", "Spicy", "Salty", "Vegetarian"])
  .set("open", 11)
  .set("close", 23)
  .set(true, "We are open")
  .set(false, "We are closed");

console.log(rest.get("name"));
console.log(rest.get(true));

//Example

const time = 21;
console.log(rest.get(time > rest.get("open") && time < rest.get("close")));

//Methods use in maps

console.log(rest.has("categories"));
console.log(rest);
// console.log(rest.clear());
console.log(rest.size);

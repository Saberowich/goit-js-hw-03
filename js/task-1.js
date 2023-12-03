function slugify(title){
  const titleToLower = title.toLowerCase();
  const array = titleToLower.split(" ");
  // const slug = array.join("-"); я не знаю, чи треба в завданні окремо створювати змінну slug і її виводити, тому ось вона закоментована
  return array.join("-");
}
console.log(slugify("Arrays for begginers")); // "arrays-for-begginers"
console.log(slugify("English for developer")); // "english-for-developer"
console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); // "how-to-become-a-junior-developer-in-two-weeks"
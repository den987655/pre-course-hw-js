// code
const words = ["яблоко", "банан", "апельсин", "манго", "киви"];

function createFruitsString() {
  let array = []
  let result = words.indexOf("апельсин");
    // return colors ФИЛЬТРУЕМ.ПРЕВРАЩАЕМ В СТРОКУ('-')
     if (result) {
       array.push(result);
       return "Ура! нашел";
     } else {
       return "Придется поискать в другом магазине…";
     }
}
createFruitsString();

// code
const colors = ["синий", "черный", "зеленый", "красный", "желтый", "зеленый"];


function createColorString() {
  let array = []
    // return colors ФИЛЬТРУЕМ.ПРЕВРАЩАЕМ В СТРОКУ('-')
    const colorFilter = colors.filter((item) => {
     if(item === "черный" || item === "красный" || item === "желтый") 
        array.push(item)
    });
    return array.join('-');
}

console.log(createColorString());

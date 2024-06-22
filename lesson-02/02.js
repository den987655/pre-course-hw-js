// code
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
  debugger;
}
console.log(factorial(5));



// const option1 = document.getElementById('7');
// const option2 = document.getElementById('8');
// const option3 = document.getElementById('9');

// data
// const info = {
//     title: 'it-incubator',
//     graduatesCount: 2000,
//     areYouChampion: true,
//     technologies: ['Front', 'Back', 'DevOps']
// }
// А теперь самостоятельно доработайте прошлый пример, чтобы в массиве хранились не строки с названиями технологий, а объекты, у которых есть св-во title, равное названию технологии и id (уникальный числовой идентификатор)
// data
// const info = {
//   titl: "it-incubator",
//   graduatesCount: 2000,
//   areYouChampion: true,
//   technologies: [
//     { title: "Front", id: 1 },
//     { title: "Back", id: 2 },
//     { title: "DevOps", id: 3 },
//   ],
// };


// render
// let pageTitleElement = document.createElement('h1');
// pageTitleElement.innerText = info.title;
// document.body.append(pageTitleElement);

// let graduatesCountElement = document.createElement('input');
// graduatesCountElement.value = info.graduatesCount;
// document.body.append(graduatesCountElement);

// let areYouChampionElement = document.createElement('input');
// areYouChampionElement.type = 'checkbox';
// areYouChampionElement.checked = info.areYouChampion;
// document.body.append(areYouChampionElement);



// let typeElement = document.createElement('select')
// typeElement.style.width = '200px';

// let option1 = document.createElement("option");

// option1.innerText = info.technologies[0].title;
// typeElement.append(option1);
// document.body.append(typeElement);

// let option2 = document.createElement("option");

// option2.textContent = info.technologies[1].title;
// typeElement.append(option2);
// document.body.append(typeElement);

// let option3 = document.createElement("option");

// option3.textContent = info.technologies[2].title
// typeElement.append(option3);
// document.body.append(typeElement);



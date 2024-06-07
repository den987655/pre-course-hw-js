let passport = {
  name: "Petr",
  surname: "Petrov",
};
console.log(passport);


const passportNew = {...passport};
passportNew.name = 'Ivan';
console.log(passportNew);
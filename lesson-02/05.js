let passport = {
  name: "Petr",
  surname: "Petrov",
};
console.log(passport.name);


const passportNew = {...passport};
passportNew.name = 'Ivan';
console.log(passportNew.name);
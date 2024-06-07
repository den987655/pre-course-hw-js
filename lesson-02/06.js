let passportWithAddress = {
  name: "Petr",
  surname: "Petrov",
  address: {
    country: "USA",
    city: "LA",
  },
};

console.log(passportWithAddress.address.city);

const passportNew = { ...passportWithAddress };
passportNew.address.city = "Bobryisk";
console.log(passportNew.address.city);

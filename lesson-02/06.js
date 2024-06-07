let passportWithAddress = {
  name: "Petr",
  surname: "Petrov",
  address: {
    country: "USA",
    city: "LA",
  },
};

console.log(passportWithAddress.address.city);

const passportWithAddressNew = Object.assign({}, passportWithAddress);
passportWithAddressNew.address.city = "Bobryisk";
console.log(passportWithAddressNew.address.city);

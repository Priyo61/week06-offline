// install jsonwebtoken:---  npm install jsonwebtoken

const jwt = require("jsonwebtoken");
//const jwt_pass = "123123";

const value = {
  name: "soro",
  accountNumber: 123123123,
};

//const token = jwt.sign(value, jwt_pass);
const token = jwt.sign(value, "123123");
console.log(token);

const faker = require("faker");
const generateAvatar = require("./avatar");

module.exports = Array(18)
  .fill()
  .map((_, i) => ({
    id: i + 1,
    first_name: faker.name.firstName(),
    last_name: faker.name.lastName(),
    email: faker.internet.email(),
    username: faker.internet.userName(),
    avatar: generateAvatar(i + 1),
  }));

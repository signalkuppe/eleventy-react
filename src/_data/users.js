/**
 * Test for an external API
 */

const fetch = require("node-fetch");

module.exports = () => {
  return new Promise(async (resolve, reject) => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        resolve(response.json());
      })
      .catch((err) => reject(err));
  });
};

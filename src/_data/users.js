/**
 * Test for an external API
 */

const users = require('../../example-data/users');

module.exports = () => {
    return new Promise((resolve, reject) => {
        // simulate api with our data
        setTimeout(() => resolve(users), 100);
    });
};

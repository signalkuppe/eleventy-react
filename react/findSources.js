const path = require('path');
const fastglob = require('fast-glob');
const config = require('./config');

const findFiles = async function (dir) {
    let globPath = path.join(dir, '**/*.jsx');
    return fastglob(globPath, {
        caseSensitiveMatch: false,
    });
};

module.exports = {
    pages: () => findFiles(config.inputDir),
    components: () => findFiles(config.componentsDir),
};

const { webpack } = require('../react/config');

module.exports = {
    stories: ['../components/**/*.stories.mdx'],
    addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
    webpackFinal: (config) => {
        config.module.rules = config.module.rules.map((data) => {
            // remove .svg from images and use our svg loader
            if (/svg\|/.test(String(data.test)))
                data.test = /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani)(\?.*)?$/;
            return data;
        });
        config.module.rules.push(webpack.module.rules[1]);
        config.module.rules.push(webpack.module.rules[2]); // add raw-load for client-side js files

        return config;
    },
};

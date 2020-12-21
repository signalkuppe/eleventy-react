const ReactDOMServer = require('react-dom/server');
const cheerio = require('cheerio');
const { ServerStyleSheet } = require('styled-components');
const { getBundleFromInputPath } = require('./utils');
const colors = require('../theme/colors');
const type = require('../theme/type');

module.exports = (permalink, inputPath, data) => {
    if (permalink) {
        return typeof permalink === 'function' ? permalink(data) : permalink;
    }
    const component = require(getBundleFromInputPath(inputPath));
    if (component.default) {
        const sheet = new ServerStyleSheet();
        ReactDOMServer.renderToStaticMarkup(
            sheet.collectStyles(component.default(data)),
        );
        const markup = ReactDOMServer.renderToStaticMarkup(
            component.default(data),
        );
        const styles = sheet.getStyleTags();
        const $ = cheerio.load(markup);

        /**
         * Add inline styled components styles
         */

        $('head').append(styles);

        /**
         * Add theme settings to the DOM
         * usefull when you have to use them in client-side scripts
         */

        $('body').append(
            `<script>const THEME = { colors: ${JSON.stringify(
                colors,
            )}, type: ${JSON.stringify(type)}}</script>`,
        );

        /**
         * Add component scripts and libs to the dom
         * only once and in the right places
         * see components/ui/Script
         */

        let cssLibs = [];
        let jsLibs = [];
        let code = [];
        $('.client-script').each((i, el) => {
            const text = $(el).text();
            const data = $(el).data() || {};
            if (data.jsLibs) {
                data.jsLibs
                    .split(',')
                    .forEach(
                        (lib) => !jsLibs.includes(lib) && jsLibs.unshift(lib),
                    );
            }
            if (data.jsLibs) {
                data.cssLibs
                    .split(',')
                    .forEach(
                        (lib) => !cssLibs.includes(lib) && cssLibs.unshift(lib),
                    );
            }
            if (!code.includes(text)) {
                code.unshift(text);
            }
            $(el).remove();
        });

        if (cssLibs.length) {
            cssLibs.forEach((cssLib) =>
                $('head').append(`<link rel="stylesheet" href="${cssLib}" />`),
            );
        }

        if (jsLibs.length) {
            jsLibs.forEach((jsLib) =>
                $('body').append(`<script src="${jsLib}" />`),
            );
        }

        if (code.length) {
            code.forEach((jsCode) =>
                $('body').append(`<script>${jsCode}</script>`),
            );
        }

        return `<!doctype html>${$.html()}`;
    } else {
        return '';
    }
};

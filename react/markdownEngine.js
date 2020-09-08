/**
 *
 * TODO: use react components for markdown tags
 */

const ReactDOMServer = require("react-dom/server");

const md = require("markdown-it")({
  html: true,
});

md.renderer.rules.strong_open = async function (
  tokens,
  idx,
  options,
  env,
  self
) {
  return "<strong>";
};

md.renderer.rules.strong_close = function (tokens, idx, options, env, self) {
  return `</strong>`;
};

module.exports = md;

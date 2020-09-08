const colors = require("../theme/colors");

const generateAvatar = (
  identifier,
  width = 400,
  height = 400,
  background = colors.primary
) =>
  `https://avatars.dicebear.com/api/avataaars/${identifier}.svg?width=${width}&height=${height}&background=%23${
    background.split("#")[1]
  }`;

module.exports = generateAvatar;

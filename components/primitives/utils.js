export const headingFontSize = (props, level) => {
  return `calc(${props.theme.type.base} * ${
    (7 - level) * props.theme.type.scale * 0.35
  })`;
};

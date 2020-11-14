export const headingFontSize = (props, level) => {
  const ratio = () => {
    let size = props.theme.type.headingsBase;
    let sizes = [size];
    Array.from(Array(6).keys()).forEach((i) => {
      sizes[i + 1] = size / props.theme.type.scale;
      size = sizes[i + 1];
    });
    return sizes;
  };
  return `${ratio()[level - 1]}rem`;
};

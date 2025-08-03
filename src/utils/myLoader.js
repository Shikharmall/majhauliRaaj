const myLoader = ({ src, width, quality }) => {
  return `${src}?w=${width || 800}&q=${quality || 75}`;
};

export default myLoader;


// 'Hello, World' --> 'hello'
const encodeFilter = (string) => {
  if (string === 'International') return false;
  const area = string.split(', ');
  if (area.includes('International')) area.splice(area.indexOf('International'), 1);
  return area[0].toLowerCase().replace(/,/g, '').split(' ')[0];
};

// 'Hello World' --> 'helloWorld'
const encodeCamelCase = (string) => string
  .replace(/,/g, '')
  .replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => (index === 0 ? word.toLowerCase() : word.toUpperCase()))
  .replace(/\s+/g, '');

// 'Hello, World' --> 'hello-world'
const encodeName = (string) => string.replace(/,/g, '').replace(/ and /g, '-').replace(/ /g, '-').replace(/[()]/g, '')
  .replace(/\u2013|\u2014/g, '-')
  .toLowerCase();

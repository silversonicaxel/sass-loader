'use strict';

function testLoader(content, sourceMap) {
  const result = { content };

  if (sourceMap) {
    result.sourceMap = sourceMap;
  }

  return `export default ${JSON.stringify(result)}`;
}

module.exports = testLoader;
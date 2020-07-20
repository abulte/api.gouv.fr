// used by node, therefore in plain js
const { formatServiceWithApis } = require('./formatters/service');
const { formatApi } = require('./formatters/api');
const fs = require('fs');

const readAllApisOnDisk = async () => {
  const files = fs.readdirSync('./_data/api', 'utf8');
  return files.map(fileName => {
    const file = fs.readFileSync(`./_data/api/${fileName}`, 'utf8');

    // Parse yaml metadata & markdownbody in document
    return formatApi(fileName.replace('.md', ''), file);
  }, {});
};

const readAllServicesOnDisk = async () => {
  const files = fs.readdirSync('./_data/service', 'utf8');
  const allApis = await readAllApisOnDisk();
  const formatter = formatServiceWithApis(allApis);

  return files.map(fileName => {
    const file = fs.readFileSync(`./_data/service/${fileName}`, 'utf8');

    // Parse yaml metadata & markdownbody in document
    return formatter(fileName.replace('.md', ''), file);
  }, {});
};

module.exports = {
  readAllApisOnDisk,
  readAllServicesOnDisk,
};

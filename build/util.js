const path = require("path");
const md5 = require("md5");


const generateScopedName = (name, filename) => {
    const hash = md5(filename + name);  
    const basename = path.basename(filename, '.scss');
    return `${basename}-${name}-${hash.slice(0, 5)}`;
};

module.exports = generateScopedName;
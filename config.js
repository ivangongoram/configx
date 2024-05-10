const fs = require("node:fs");
const {bool} = require("./helper");
module.exports = {bool};

const configFiles = fs.readdirSync('./config').filter(file => file.endsWith('.js'));
const cjson = {};

for (const file of configFiles) {
    const temp = require(`../../config/${file}`);
    Object.assign(cjson, temp);
}

function config(path){
    const keys = path.split('.');
    let current = cjson;
    for (const key of keys) {
        if (current === undefined || current === null) {
            return undefined;
        }
        current = current[key];
    }
    return current;
}

module.exports = {config, bool};
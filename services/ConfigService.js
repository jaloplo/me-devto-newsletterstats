const fs = require('fs');

const filePath = './settings.txt';

function ConfigServiceCreator() {
    return {
        get: () => {
            if (fs.existsSync(filePath)) {
                return fs.readFileSync(filePath, 'utf-8');
            }

            return '';
        },

        update: (content) => {
            fs.writeFileSync(filePath, content);
        }
    };
}

module.exports = new ConfigServiceCreator(); 
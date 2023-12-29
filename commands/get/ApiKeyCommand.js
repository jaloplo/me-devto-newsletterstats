const { Command } = require('commander');
const ConfigService = require('../../services/ConfigService');

function ApiKeyCommandCreator() {
    return new Command()
        .name('api-key')
        .description('Get ApiKey variable')
        .action(({ key }) => {
            console.log(ConfigService.get());
        });;
}

module.exports = new ApiKeyCommandCreator();
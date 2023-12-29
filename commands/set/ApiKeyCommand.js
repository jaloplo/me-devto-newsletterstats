const { Command } = require('commander');
const ConfigService = require('../../services/ConfigService');

function ApiKeyCommandCreator() {
    return new Command()
        .name('api-key')
        .description('Set ApiKey variable')
        .requiredOption('-k, --key [key]', 'Specify the api key value')
        .action(({ key }) => {
            ConfigService.update(key);
        });;
}

module.exports = new ApiKeyCommandCreator();
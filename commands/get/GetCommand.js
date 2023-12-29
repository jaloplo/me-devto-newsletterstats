const { Command } = require('commander');
const ApiKeyCommand = require('./ApiKeyCommand');

function GetCommandCreator() {
    return new Command()
        .name('get')
        .description('Get app variables')
        .addCommand(ApiKeyCommand);
}

module.exports = new GetCommandCreator();
const { Command } = require('commander');
const ApiKeyCommand = require('./ApiKeyCommand');

function SetCommandCreator() {
    return new Command()
        .name('set')
        .description('Set app variables')
        .addCommand(ApiKeyCommand);
}

module.exports = new SetCommandCreator();
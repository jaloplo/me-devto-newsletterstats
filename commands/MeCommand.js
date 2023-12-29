const { Command } = require('commander');
const StatsCommand = require('./StatsCommand');

function MeCommandCreator() {
    return new Command()
        .name('me')
        .description('Gets Me information')
        .addCommand(StatsCommand);
}

module.exports = new MeCommandCreator();
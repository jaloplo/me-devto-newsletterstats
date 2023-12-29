#!/usr/bin/env node

const program = require('commander');
const MeCommand = require('./commands/MeCommand');
const GetCommand = require('./commands/get/GetCommand');
const SetCommand = require('./commands/set/SetCommand');

program.addCommand(MeCommand);
program.addCommand(GetCommand);
program.addCommand(SetCommand);

// Parse command-line arguments
program.parse(process.argv);
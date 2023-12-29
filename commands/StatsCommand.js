const { Command } = require('commander');
const ConfigService = require('../services/ConfigService');
const DevToService = require('../services/DevToService');


function StatsCommandCreator() {
    return new Command()
        .name('stats')
        .description('Retrieve and display statistics')
        .requiredOption('-p, --page <page>', 'Specify the page number', 1)
        .requiredOption('-i, --items-per-page <itemsPerPage>', 'Specify the items per page', 10)
        .action(async ({ page, itemsPerPage }) => {
          const api_key = ConfigService.get();

          const articles = await DevToService.get({
              api_key,
              items_per_page: itemsPerPage,
              page: page
            });
          
          console.log(articles);
        });
}

module.exports = new StatsCommandCreator();
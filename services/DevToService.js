const axios = require('axios');
const StatsModelService = require('./StatsModelService');

function DevToServiceCreator() {

    return {
        get: async ({ api_key, page, items_per_page}) => {
            const apiUrl = 'https://dev.to/api/articles/me/published';

            try {
                const response = await axios.get(apiUrl, {
                    headers: {
                        'api-key': api_key
                    },
                    params: {
                        page: page,
                        per_page: items_per_page
                    }
                });

                const articles = response.data
                    .map(StatsModelService.create);

                return articles;
            }
            catch(err) {
                console.error('Error fetching data:', err);
            }
        }
    };
}

module.exports = new DevToServiceCreator();
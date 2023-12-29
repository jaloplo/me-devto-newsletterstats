function StatsModelServiceCreator() {
    return {
        create: (item) => {
            return {
                title: item.title,
                published: item.published_at,
                url: item.url,
                likes: item.public_reactions_count,
                views: item.page_views_count,
                comments: item.comments_count
            };
        }
    };
}

module.exports = new StatsModelServiceCreator();
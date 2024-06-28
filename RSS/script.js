document.addEventListener("DOMContentLoaded", function() {
    const rssFeeds = ["https://yusufipek.me/rss", "https://sxinar.github.io/index.xml"];
    const rssContainer = document.getElementById("rss-feeds");

    rssFeeds.forEach(feed => {
        fetch(`https://api.rss2json.com/v1/api.json?rss_url=${feed}`)
            .then(response => response.json())
            .then(data => {
                const feedTitle = document.createElement('h2');
                feedTitle.textContent = data.feed.title;
                rssContainer.appendChild(feedTitle);

                data.items.forEach(item => {
                    const itemContainer = document.createElement('div');
                    itemContainer.className = 'rss-item';

                    const itemTitle = document.createElement('h3');
                    const itemLink = document.createElement('a');
                    itemLink.href = item.link;
                    itemLink.textContent = item.title;
                    itemTitle.appendChild(itemLink);
                    itemContainer.appendChild(itemTitle);

                    const itemDescription = document.createElement('p');
                    itemDescription.textContent = item.description;
                    itemContainer.appendChild(itemDescription);

                    rssContainer.appendChild(itemContainer);
                });
            })
            .catch(error => console.error('Error fetching the RSS feed:', error));
    });
});

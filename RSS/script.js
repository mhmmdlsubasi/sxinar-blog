document.addEventListener("DOMContentLoaded", function() {
    const rssFeeds = ["https://yusufipek.me/rss", "https://sxinar.github.io/index.xml"];
    const rssContainer = document.getElementById("rss-feeds");
    const modal = document.getElementById("myModal");
    const modalImage = document.getElementById("modal-image");
    const closeModal = document.getElementsByClassName("close")[0];

    closeModal.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

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
                    itemLink.href = "#";
                    itemLink.textContent = item.title;
                    itemLink.onclick = function() {
                        modalTitle.textContent = item.title;
                        modalContent.innerHTML = item.content;
                        modal.style.display = "block";
                        const images = modalContent.getElementsByTagName('img');
                        for (let img of images) {
                            img.style.width = "25%";
                            img.style.height = "auto";
                            img.onclick = function() {
                                modalImage.src = img.src;
                                modal.style.display = "block";
                            }
                        }
                    }
                    itemTitle.appendChild(itemLink);
                    itemContainer.appendChild(itemTitle);

                    const itemDescription = document.createElement('p');
                    itemDescription.textContent = item.description;
                    itemContainer.appendChild(itemDescription);

                    const itemImage = document.createElement('img');
                    itemImage.src = item.thumbnail; // Eğer RSS'de resim varsa
                    itemImage.onclick = function() {
                        modalImage.src = itemImage.src;
                        modal.style.display = "block";
                    }
                    itemContainer.appendChild(itemImage);

                    rssContainer.appendChild(itemContainer);
                });
            })
            .catch(error => console.error('Error fetching the RSS feed:', error));
    });
});

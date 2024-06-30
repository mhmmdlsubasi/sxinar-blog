// script.js
document.addEventListener('DOMContentLoaded', function () {
  const themeToggle = document.getElementById('theme-toggle');
  const currentTheme = localStorage.getItem('theme') || 'dark';

  if (currentTheme === 'light') {
    document.body.classList.add('light-mode');
    themeToggle.checked = true;
  }

  themeToggle.addEventListener('change', function () {
    if (this.checked) {
      document.body.classList.add('light-mode');
      localStorage.setItem('theme', 'light');
    } else {
      document.body.classList.remove('light-mode');
      localStorage.setItem('theme', 'dark');
    }
  });

  // Blog yazılarını yükle
  if (window.location.pathname === '/blog') {
    const blogList = document.getElementById('blog-list');
    const blogFiles = ['yazi/yazi1.json', 'yazi/yazi2.json', 'yazi/yazi3.json'];

    blogFiles.forEach(file => {
      fetch(file)
        .then(response => response.json())
        .then(post => {
          const postDiv = document.createElement('div');
          postDiv.className = 'blog-post';

          const postTitle = document.createElement('h4');
          postTitle.textContent = post.title;

          const postContent = document.createElement('p');
          postContent.textContent = post.content;

          postDiv.appendChild(postTitle);
          postDiv.appendChild(postContent);
          blogList.appendChild(postDiv);
        })
        .catch(error => console.error('Error loading blog post:', error));
    });
  }
});

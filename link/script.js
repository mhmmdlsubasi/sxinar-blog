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
  const blogList = document.getElementById('blog-list');
  const blogPosts = [
    {
      title: "Blog Yazısı 1",
      content: "Bu, ilk blog yazısının içeriğidir."
    },
    {
      title: "Blog Yazısı 2",
      content: "Bu, ikinci blog yazısının içeriğidir."
    },
    {
      title: "Blog Yazısı 3",
      content: "Bu, üçüncü blog yazısının içeriğidir."
    }
  ];

  blogPosts.forEach(post => {
    const postDiv = document.createElement('div');
    postDiv.className = 'blog-post';

    const postTitle = document.createElement('h4');
    postTitle.textContent = post.title;

    const postContent = document.createElement('p');
    postContent.textContent = post.content;

    postDiv.appendChild(postTitle);
    postDiv.appendChild(postContent);
    blogList.appendChild(postDiv);
  });
});

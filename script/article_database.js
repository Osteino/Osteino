const articles = [
    { 
        title: 'Empowering the future with data, technology and innovation', 
        author: 'E. O. Djabeng',
        news: 'Osteino Hub',
        photoUrlBy: 'Osteino Hub',
        photoUrl: 'image/img10.png',
        date: 'November 27, 2024',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', 
        category: 'Science',
        fullContent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        tag: '4',
        articleUrl: 'artic.html'
    },
    { 
        title: 'Top 10 Must-Have AI Tools to Supercharge Your Business',
        author: 'E. O. Djabeng',
        news: 'Osteino Hub',
        photoUrlBy: 'Osteino Hub',
        photoUrl: 'image/img12.png',
        date: 'November 1, 2024', 
        content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 
        category: 'AI',
        fullContent: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        tag: '1',
        articleUrl: 'artic.html'
    },
    {   title: 'The future of Smart Cities. How IoT is Revolutionizing Urban Living',
        author: 'E. O. Djabeng',
        news: 'Osteino Hub',
        photoUrlBy: 'Osteino Hub',
        photoUrl: 'image/img14.png',
        date: 'December 7, 2024', 
        content: 'Ut enim     ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', 
        category: 'Technology',
        fullContent: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        tag: '32',
        articleUrl: 'artic.html' 
    },
    {   title: 'Securing the Future of Work with Innovative Strategies to Protect Data in a Hybrid Remote Environment',
        author: 'E. O. Djabeng',
        news: 'Osteino Hub',
        photoUrlBy: 'Osteino Hub',
        photoUrl: 'image/img16.png',
        date: 'December 24, 2024', 
        content: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', 
        category: 'Security',
        fullContent: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        tag: '3',
        articleUrl: 'artic.html'
    }
    // Add more articles with full content as needed
];

// Function to populate articles
function populateArticles() {
    articles.forEach(article => {
        addArticle(article.title, article.author, article.news, article.photoUrlBy, article.photoUrl, article.date, article.content, article.category, article.fullContent, article.tag, article.articleUrl);
    });
}

populateArticles();
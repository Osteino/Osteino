const newsContainer = document.getElementById('news-container');

function addArticle(title, author, news, photoUrlBy, photoUrl,  date, content, category, fullContent, tag, articleUrl) {
    const article = document.createElement('article');
    article.innerHTML = `
        
        
        
        <!-- Blog entry -->
        <div class="w3-card-4 w3-margin w3-white ar0" id='ar01etfw'>
        <div class="w3-container">
            <h5 class="w3-opacity">
            <span>News: ${news}</span>
            <span>Category: ${category}</span>
            </h5>
            <h3><b>${title}</b></h3>
            <h5 class="w3-opacity">
            <span>Author: ${author}</span>
            <span>Date: ${date}</span>
            </h5>
        </div>
        <img src="${photoUrl}" alt="laptop showing news" style="width:100%; aspect-ratio: 5/2; padding-inline: 1rem;">
        <div class="w3-container w3-opacity">
            <h4>&#x221F; Image by: ${photoUrlBy}</h4>
            <h5><span></span></h5>
        </div>

        <div class="w3-container">
            <p>${content}</p>
            <div class="w3-row">
            <div class="w3-col m8 s12">
                <p><button class="read-more w3-button w3-padding-large w3-white w3-border" onclick="window.location.href='${articleUrl}'"><b>READ MORE »</b></button></p>
            </div>
            <div class="w3-col m4 w3-hide-small">
                <p><span class="w3-padding-large w3-right"><b>Comments </b> <span class="w3-tag">${tag}</span></span></p>
            </div>
            </div>
        </div>
        </div>
        <hr>
        
                
    `;
   
    newsContainer.appendChild(article);
};

// Example usage
addArticle('Empowering the future with data, technology and innovation', 'E. Djabeng', 'Osteino Hub', 'Rexstone','image/img10.png', 'November 27, 2024', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'Science', 'this is going to ba a fine in the macdomasd but why is ther man orange for the sbad in the what aarre your talking about in the measn time ews are fosifn toe lajjd aalfosl so the momoe on tem fwokjk fijn it seasi to adoo dto tje sfam farm to dwll sell te pbas of the grid toa who is soosng to the shtor to but thd fass of witll', '3', 'artic.html');
addArticle('Top 10 Must-Have AI Tools to Supercharge Your Business', 'E. Djabeng', 'Osteino Hub', 'Rexstone','image/img12.png', 'November 1, 2024', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'AI', 'this is going to ba a fine in the macdomasd but why is ther man orange for the sbad in the what aarre your talking about in the measn time ews are fosifn toe lajjd aalfosl so the momoe on tem fwokjk fijn it seasi to adoo dto tje sfam farm to dwll sell te pbas of the grid toa who is soosng to the shtor to but thd fass of witll', '3', 'artic.html');
addArticle('The future of Smart Cities. How IoT is Revolutionizing Urban Living', 'E. Djabeng', 'Osteino Hub', 'Rexstone','image/img14.png', 'December 7, 2024', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'Technology', 'this is going to ba a fine in the macdomasd but why is ther man orange for the sbad in the what aarre your talking about in the measn time ews are fosifn toe lajjd aalfosl so the momoe on tem fwokjk fijn it seasi to adoo dto tje sfam farm to dwll sell te pbas of the grid toa who is soosng to the shtor to but thd fass of witll', '1', 'artic.html');
addArticle('Securing the Future of Work with Innovative Strategies to Protect Data in a Hybrid Remote Environment', 'E. Djabeng', 'Osteino Hub', 'Rexstone','image/img16.png', 'December 24, 2024', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'Security', 'this is going to ba a fine in the macdomasd but why is ther man orange for the sbad in the what aarre your talking about in the measn time ews are fosifn toe lajjd aalfosl so the momoe on tem fwokjk fijn it seasi to adoo dto tje sfam farm to dwll sell te pbas of the grid toa who is soosng to the shtor to but thd fass of witll', '8', 'artic.html');





function displayArticle(index) {

     const article = articles[index]; // Assuming articles is accessible here

    

};


// Example: Display the first article by default
displayArticle(0);





/*

// Example usage
addArticle('Empowering the future with data, technology and innovation', 'E. Djabeng', 'Osteino Hub', 'Rexstone','image/img10.png', 'November 27, 2024', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'Science', 'this is going to ba a fine in the macdomasd but why is ther man orange for the sbad in the what aarre your talking about in the measn time ews are fosifn toe lajjd aalfosl so the momoe on tem fwokjk fijn it seasi to adoo dto tje sfam farm to dwll sell te pbas of the grid toa who is soosng to the shtor to but thd fass of witll', '3', 'artic.html');
addArticle('Top 10 Must-Have AI Tools to Supercharge Your Business', 'E. Djabeng', 'Osteino Hub', 'Rexstone','image/img12.png', 'November 1, 2024', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'AI', 'this is going to ba a fine in the macdomasd but why is ther man orange for the sbad in the what aarre your talking about in the measn time ews are fosifn toe lajjd aalfosl so the momoe on tem fwokjk fijn it seasi to adoo dto tje sfam farm to dwll sell te pbas of the grid toa who is soosng to the shtor to but thd fass of witll', '3', 'artic.html');
addArticle('The future of Smart Cities. How IoT is Revolutionizing Urban Living', 'E. Djabeng', 'Osteino Hub', 'Rexstone','image/img14.png', 'December 7, 2024', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'Technology', 'this is going to ba a fine in the macdomasd but why is ther man orange for the sbad in the what aarre your talking about in the measn time ews are fosifn toe lajjd aalfosl so the momoe on tem fwokjk fijn it seasi to adoo dto tje sfam farm to dwll sell te pbas of the grid toa who is soosng to the shtor to but thd fass of witll', '1', 'artic.html');
addArticle('Securing the Future of Work with Innovative Strategies to Protect Data in a Hybrid Remote Environment', 'E. Djabeng', 'Osteino Hub', 'Rexstone','image/img16.png', 'December 24, 2024', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'Security', 'this is going to ba a fine in the macdomasd but why is ther man orange for the sbad in the what aarre your talking about in the measn time ews are fosifn toe lajjd aalfosl so the momoe on tem fwokjk fijn it seasi to adoo dto tje sfam farm to dwll sell te pbas of the grid toa who is soosng to the shtor to but thd fass of witll', '8', 'artic.html');



 // artic.js

function displayArticle(index) {
    const article = articles[index]; // Assuming articles is accessible here

    document.getElementById('article-title').innerText = article.title;
    document.getElementById('article-author').innerText = article.author;
    document.getElementById('article-news').innerText = article.news;
    document.getElementById('article-photo-url-by').innerText = article.photoUrlBy;
    document.getElementById('article-photo-url').innerText = article.photoURL;
    document.getElementById('article-date').innerText = article.date;
    document.getElementById('article-content').innerText = article.content;
    document.getElementById('article-category').innerText = article.category;
    document.getElementById('article-tag').innerText = article.tag;
    document.getElementById('article-article-url').innerText = article.articleUrl;
}

// Example: Display the first article by default
displayArticle(3);
*/
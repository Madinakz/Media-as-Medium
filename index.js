
async function getArticles() {
try {
const response = await fetch('https://api.nytimes.com/svc/topstories/v2/home.json?api-key=ratwQyVsSpYCcQe8XP85K0uUQuvfagx7');
console.log(response)

 const data = await response.json();

 console.log(data)
 const articles = data.results.splice(0,3);
 const articlesContainer = document.getElementById('articlesId');
 articlesContainer.innerHTML = '';

 articles.forEach((article) => {
 const author = article.byline;
 const title = article.section;
 const date = article.published_date;
 const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
 const now = new Date(date);
 const header = article.title;
 const description = article.abstract;      
 const images =article.multimedia[0].url;
 console.log(images)
 const articleElement = `
 <div class="frame">
    <div class="left">
        <div class="top">
            <div class="authors">
                <img src="./assets/avatar.png" class="avatar">
                <p class="info-text">${author}</p>
                <p class="grey-text">in</p>
                <p class="info-text">${title}</p>
                <p class="info-text">•</p>
                <p class="grey-text">${now.getDate() + ' ' + months[now.getMonth()]}</p>
            </div>
            <p class="tips">${header}</p>
            <p class="description">${description}</p>
        </div>
        <div class="info-button">
            <div class="info">
                <button class="button">Java Script</button>
                <p class="grey-text">12 min read</p>
                <p class="info-text">•</p>
                <p class="grey-text">Selected for you</p>
            </div>
            <div class="icon">
                <img src="./assets/Icon.png" class="square">
                <img src="./assets/Icon.png" class="square">
                <img src="./assets/Icon.png" class="square">
            </div>
        </div>

    </div>
    <img src= "${images}" class="images">
</div>`;

 articlesContainer.innerHTML += articleElement;
 });
 } catch (error) {
 console.error(error);
}
}

getArticles();


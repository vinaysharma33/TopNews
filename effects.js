//Function of Collapse functionality used in container
function effects() {
    let heading = document.getElementsByClassName('headline');

    let explanation = document.getElementsByClassName('explanation');

    for (let i = 0; i < heading.length; i++) {
        heading[i].addEventListener('click', function () {
            if (explanation[i].style.display === 'block') {
                explanation[i].style.display = 'none';
            }
            else {
                explanation[i].style.display = 'block';
            }
        });
    }
}

//Create an Ajax get request
const xhr = new XMLHttpRequest();

//Take your own API key
xhr.open('GET', `https://gnews.io/api/v4/top-headlines?country=in&lang=en&token=${key}`, true);

// What to do when response is ready
xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        let container = document.getElementById('container');
        let newsHtml = "";
        articles.forEach(function(element,index){
            let news = `<div class="headline">
            <p id="title">Breaking News ${index+1} : ${element['title']}</p>
        </div>
        <div class="explanation">
            <p id="content">
                ${element['content']}<a href="${element['url']}" target="_blank" >Read more here</a>
            </p>
        </div>`

            newsHtml += news;
        });
        container.innerHTML = newsHtml;
        effects();
    }
    else {
        console.log("some error occured");
    }
}

//send the get request
xhr.send();

//Greb the business id.
let business = document.getElementById('business');

//Greb the news id.
let news = document.getElementById('news');

//Greb the health id.
let health = document.getElementById('health');

//Greb the sports id.
let sports = document.getElementById('sports');

//Greb the technology id.
let technology = document.getElementById('technology');

//Greb the entertainment id.
let entertainment = document.getElementById('entertainment');

//Create function onload() so we can call it when we need it.
function onload() {
    xhr.onload = function () {
        if (this.status === 200) {
            let json = JSON.parse(this.responseText);
            let articles = json.articles;
            let container = document.getElementById('container');
            let newsHtml = "";
            articles.forEach(function(element,index){
                let news = `<div class="headline">
            <p id="title">Breaking News ${index+1} : ${element['title']}</p>
        </div>
        <div class="explanation">
            <p id="content">
                ${element['content']}<a href="${element['url']}" target="_blank" >Read more here</a>
            </p>
        </div>`

                newsHtml += news;
            });
            container.innerHTML = newsHtml;
            effects();
        }
        else {
            console.log("some error occured");
        }
    }
}

//When somebody clicks on news link.
news.addEventListener('click', function () {
    xhr.open('GET', `https://gnews.io/api/v4/top-headlines?country=in&lang=en&token=${key}`, true);

    onload();

    xhr.send();
})

//When somebody clicks on business link.
business.addEventListener('click', function () {
    xhr.open('GET', `https://gnews.io/api/v4/top-headlines?country=in&lang=en&topic=business&token=${key}`, true);

    onload();

    xhr.send();
})

//When somebody clicks on health link.
health.addEventListener('click', function () {
    xhr.open('GET', `https://gnews.io/api/v4/top-headlines?country=in&lang=en&topic=health&token=${key}`, true);

    onload();

    xhr.send();
})

//When somebody clicks on sports link.
sports.addEventListener('click', function () {
    xhr.open('GET', `https://gnews.io/api/v4/top-headlines?country=in&lang=en&topic=sports&token=${key}`, true);

    onload();

    xhr.send();
})

//When somebody clicks on technology link.
technology.addEventListener('click', function () {
    xhr.open('GET', `https://gnews.io/api/v4/top-headlines?country=in&lang=en&topic=technology&token=${key}`, true);

    onload();

    xhr.send();
})

//When somebody clicks on entertainment link.
entertainment.addEventListener('click', function () {
    xhr.open('GET', `https://gnews.io/api/v4/top-headlines?country=in&lang=en&topic=entertainment&token=${key}`, true);

    onload();

    xhr.send();
})
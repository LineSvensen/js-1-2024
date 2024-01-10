let news = [
    {
        headline: "Watch Hesh landing on the moon",
        summary: "He landed with his super jet"
    },
    {
        headline: "Baby weights 400kg",
        summary: "Toffee tootsie roll cake croissant soufflé croissant biscuit lollipop sweet. Cupcake halvah carrot cake fruitcake tootsie roll."
    },
    {
        headline: "Redbull is now free for everyone",
        summary: "Toffee tootsie roll cake croissant soufflé croissant biscuit lollipop sweet. Cupcake halvah carrot cake fruitcake tootsie roll."
    }
];

let newsContainer = document.querySelector(".news");

console.log("newsContainer");
const totalNumberOfNews = news.length;

let newsItems = "";

for (let i = 0; i < totalNumberOfNews; i++) {

    console.log(news[i].headline);
    console.log(news[i].summary);

    newsItems = newsItems + `
    <div>
        <h2>${news[i].headline}</h2>
        <p>${news[i].headline}</p>
    `
}

newsContainer.innerHTML = newsItems;
var defaultCity = document.querySelector("#default-load");
var newsArticle1 = document.querySelector("#news-article1");
var newsTitle1 = document.querySelector("#news-title1");
var newsContent1 = document.querySelector("#news-content1");
var url1 = document.querySelector("#url1");
var image1 = document.querySelector("#image1");


var newsArticle2 = document.querySelector("#news-article2");
var newsTitle2 = document.querySelector("#news-title2");
var newsContent2 = document.querySelector("#news-content2");
var url2 = document.querySelector("#url2");
var image2 = document.querySelector("#image2");

var newsArticle3 = document.querySelector("#news-article3");
var newsTitle3 = document.querySelector("#news-title3");
var newsContent3 = document.querySelector("#news-content3");
var url3 = document.querySelector("#url3");
var image3 = document.querySelector("#image3");

var newsArticle4 = document.querySelector("#news-article4");
var newsTitle4 = document.querySelector("#news-title4");
var newsContent4 = document.querySelector("#news-content4");
var url4 = document.querySelector("#url4");
var image4 = document.querySelector("#image4");

var newsArticle5 = document.querySelector("#news-article5");
var newsTitle5 = document.querySelector("#news-title5");
var newsContent5 = document.querySelector("#news-content5");
var url5 = document.querySelector("#url5");
var image5 = document.querySelector("#image5");

var newsArticle6 = document.querySelector("#news-article6");
var newsTitle6 = document.querySelector("#news-title6");
var newsContent6 = document.querySelector("#news-content6");
var url6 = document.querySelector("#url6");
var image6 = document.querySelector("#image6");

var highlight1 = document.querySelector("#news-highlight1");
var highlight2 = document.querySelector("#news-highlight2");
var highlight3 = document.querySelector("#news-highlight3");
var highlight4 = document.querySelector("#news-highlight4");
var api =  "feec356023msh7d505f582747ea5p199c91jsnd5a1909fc40a";
var ticketMasterApi = "EI6xvZtsgVpRYLMPIJKeFhxH3ma5tsgl";


var displayArticle = function(search_term) {
    if (search_term) {
        //news box 1
        newsArticle1.textContent = search_term[0].category;
        newsTitle1.textContent = search_term[0].title;
        newsContent1.textContent = search_term[0].content.slice(0,100) + ".....";
        url1.setAttribute("href", search_term[0].source_url);
        url1.setAttribute("target", "_blank");
        image1.setAttribute("src", search_term[0].img);

        //news box 2
        newsArticle2.textContent = search_term[1].category;
        newsTitle2.textContent = search_term[1].title;
        newsContent2.textContent = search_term[1].content.slice(0,100) + ".....";
        url2.setAttribute("href", search_term[1].source_url);
        url2.setAttribute("target", "_blank");
        image2.setAttribute("src", search_term[1].img);

        //news box 3
        newsArticle3.textContent = search_term[2].category;
        newsTitle3.textContent = search_term[2].title;
        newsContent3.textContent = search_term[2].content.slice(0,100) + ".....";
        url3.setAttribute("href", search_term[2].source_url);
        url3.setAttribute("target", "_blank");
        image3.setAttribute("src", search_term[2].img);

        //news box 4
        newsArticle4.textContent = search_term[3].category;
        newsTitle4.textContent = search_term[3].title;
        newsContent4.textContent = search_term[3].content.slice(0,100) + ".....";
        url4.setAttribute("href", search_term[3].source_url);
        url4.setAttribute("target", "_blank");
        image4.setAttribute("src", search_term[3].img);

        //news box 5
        newsArticle5.textContent = search_term[4].category;
        newsTitle5.textContent = search_term[4].title;
        newsContent5.textContent = search_term[4].content.slice(0,100) + ".....";
        url5.setAttribute("href", search_term[4].source_url);
        url5.setAttribute("target", "_blank");
        image5.setAttribute("src", search_term[4].img);

        //news box 6
        newsArticle6.textContent = search_term[5].category;
        newsTitle6.textContent = search_term[5].title;
        newsContent6.textContent = search_term[5].content.slice(0,100) + ".....";
        url6.setAttribute("href", search_term[5].source_url);
        url6.setAttribute("target", "_blank");
        image6.setAttribute("src", search_term[5].img);
    }
};

var displayHighlight = function(search_term) {
    if (search_term) {
        highlight1.textContent = search_term[0].title;
        highlight1.setAttribute("href", search_term[0].source_url);
        highlight1.setAttribute("target", "_blank");

        highlight2.textContent = search_term[1].title;
        highlight2.setAttribute("href", search_term[1].source_url);
        highlight2.setAttribute("target", "_blank");

        highlight3.textContent = search_term[2].title;
        highlight3.setAttribute("href", search_term[2].source_url);
        highlight3.setAttribute("target", "_blank");

        highlight4.textContent = search_term[3].title;
        highlight4.setAttribute("href", search_term[3].source_url);
        highlight4.setAttribute("target", "_blank");
    }
};

var getNews = function() {
    var apiUrl = fetch("https://rapidapi.p.rapidapi.com/apirapid/news/?q=news", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "newscafapi.p.rapidapi.com",
            "x-rapidapi-key": api
        }
    })

    var apiUrl2 = fetch("https://rapidapi.p.rapidapi.com/apirapid/news/?q=news", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "newscafapi.p.rapidapi.com",
            "x-rapidapi-key": api
        }
    })

    apiUrl.then(function(response) {
        if(response.ok) {
           response.json().then(function(data) {
               console.log(data);
               displayArticle(data);
           })
        }
    })

    apiUrl2.then(function(response) {
        if(response.ok) {
           response.json().then(function(data) {
               console.log(data);
               displayHighlight(data);
           })
        }
    })
};

// fetch("https://developers.zomato.com/api/v2.1/categories", {
//     "method": "GET",
//         "headers": {
//             "user-key": "4726b7bb9adff2236c9285afdf21b5e2"}
//         }).then(function(response) {
//     response.json().then(function(data) {
//         console.log(data)
//     })
// });

getNews();


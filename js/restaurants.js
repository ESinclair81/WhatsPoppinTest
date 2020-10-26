var search = document.querySelector('#cuisine-search');
var searchBtnEl = document.querySelector('#search-form');

var restName1 = document.querySelector("#rest-name1");
var userRate1 = document.querySelector("#user-rate1");
var restPhone1 = document.querySelector("#rest-phone1");
var url2 = document.querySelector("#url2");
var featImage1 = document.querySelector("#feat-img1");
var restAddy1= document.querySelector("#rest-addy1");


// This is the Owl Carousel Function //

$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
    slideTransition:"linear",
    loop:true,
    autoplay:true,
    center:true,
    stagePadding: 10,
    margin:10,
    nav:false,
    items:1,
    merge:true,
    pullDrag:true,
    mergeFit:true,
    videoHeight:60,
    videoWidth:100,

    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})



/* THIS IS THE ZOMATO API CALLBACK FUNCTION TO POPULATE THE PAGE */

// var tiles = document.querySelector("#tile-1");
// var restaurants = data.restaurants;

// if (restaurants.length > 0) {

//     for (var i = 0; i < tiles.length; i++) {
//         var tile = tiles[i]; // This is the current tile
//             restaurants = restaurants[i].restaurant; // This is the restaurant object from the API

//         tile.querySelector("p.title").innerText = restaurant.name;
//     }
// }


/***************************** THIS FUNCTION FETCHES DATA FROM THE ZOMATO API ARRAY *****************************/

var loadCuisines = function(searchTerm) {
    var api= fetch("https://developers.zomato.com/api/v2.1/search?entity_id=89&entity_type=city&cuisines="+searchTerm,{
        "method": "GET",
        "headers": {
            "user-key": "211a37c27d46db44c2e65076d081b87b"}
        });
    

    api.then(function(response){
        if (response.ok){
            response.json().then(function(data){
                console.log(data);
            })
        }
    })  
}


var Loadcontent = function(event){
     event.preventDefault();
    var searchCuisine = search.value.trim();
    loadCuisines(searchCuisine);
     
 }

searchBtnEl.addEventListener("submit", Loadcontent);


});

/********************************** THIS FUNCTION APPLIES THE FETCH TO THE PAGE **********************************/
var getRestos = function(language) {
    var apiUrl = "https://developers.zomato.com/api/v2.1/search?entity_id=89&entity_type=city&cuisines="+searchTerm;
  
    fetch(apiUrl).then(function(response) {
      if (response.ok) {
        response.json().then(function(data) {
          displayRestos(data.items, language);
        });
      } else {
        alert("Error: " + response.statusText);
      }
    });
  };

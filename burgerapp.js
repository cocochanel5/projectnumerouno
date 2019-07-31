$("button").on("click", function() {

$.ajax({
    method: 'GET',
    url: "https://developers.zomato.com/api/v2.1/search?entity_id=281&entity_type=city&q=Burger",
    contentType: '"Accept: application/json',
    headers: {
        'user-key': "a69ae2983ac452ed34005f3a9f4ab7c6"
    }}).then(function(response) {
    console.log(response);
    console.log(response.restaurants[0].restaurant.cuisines);

    var burgerResponse = response.restaurants;

    for (var i = 0; i < burgerResponse.length; i++) {
        burgerResponse[i].restaurant.name;

        var burgerHtml = $("<div>").addClass('div');

        burgerHtml.text(burgerResponse[i].restaurant.name);

        $(".burgerRow").append(burgerHtml);

        // var p = $("<p>").text("address + zipCode");

        // var address = burgerResponse.restaurant.location.address;

        // var zipCode = burgerResponse.restaurant.location.zipcode;

        var burgerImage = $("<img>").addClass('img');

        burgerImage.attr('src', burgerResponse[i].restaurant.featured_image);


        burgerHtml.append(burgerImage)
    
        // burgerHtml.append(p);

    }
});
});



// $("button").on("click", function() {
//       // In this case, the "this" keyword refers to the button that was clicked
//       var burger = $(this).attr("burger-btn"); 

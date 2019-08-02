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

        var divThatWillContainBothImageAndText = $("<div>").addClass('divThatWillContainBothImageAndText')

        var burgerImage = $("<img>").addClass('img');

        var pTag = $("<p>")

        burgerImage.attr('src', burgerResponse[i].restaurant.featured_image);

        pTag.text(burgerResponse[i].restaurant.name);

        divThatWillContainBothImageAndText.append(burgerImage).append(pTag);
        

        $(".burgerRow").append(divThatWillContainBothImageAndText);
    }
});
});
$.ajax({
    method: 'GET',
    url: "https://graph.facebook.com/me?fields=likes.summary(true)&access_token=EAAG8AeziGZAMBANbmgJ8o0rzBX3BEZC1KEgZCD2zQZBegBzZC86COrQYFZBjZAy6wMEqfKYLZCSexqPZAlnIatLZAOTq9LQSZBZA4xdsnqxsNC3APTM4by4uoUQckIop2ZCmzjfcwjTIRnMZBsaZBZACCkTo2EvkFSrkiOmz5HFRwZA9q44TcGVMi7OISitN935wQpFZCBGtcxu2AXqlFZBxgZDZD%22",
    contentType: '"Accept: application/json',
    headers: {
        'user-access-token': "EAAG8AeziGZAMBANbmgJ8o0rzBX3BEZC1KEgZCD2zQZBegBzZC86COrQYFZBjZAy6wMEqfKYLZCSexqPZAlnIatLZAOTq9LQSZBZA4xdsnqxsNC3APTM4by4uoUQckIop2ZCmzjfcwjTIRnMZBsaZBZACCkTo2EvkFSrkiOmz5HFRwZA9q44TcGVMi7OISitN935wQpFZCBGtcxu2AXqlFZBxgZDZD%22"
    }
}).then (function(response) {

 

    if (response && !response.error) {
        summary=true;
    }
});


 

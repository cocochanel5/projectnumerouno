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
  var rowCount = 0;
  $("#burgerResults").html("");
	html = "<div class='container' id='containerRow'>";
	$("#burgerResults").append(html);	
    for (var i = 0; i < burgerResponse.length; i++) {
/*
        <div class="container">
            <div class="row burgerRow">
                <div class="col-4 bg-dark text-white p-3 mx-auto flex-column">
				</div>
            </div>
        </div>
*/		
        burgerResponse[i].restaurant.name;
		if (i % 3 == 0) {
			rowCount++;
			if (i == 0) {
				console.log("creating the bootstrap divs");
    	        html = "<div class='row' id='row"+rowCount+"'>";
				$("#containerRow").append(html);	
			}
			else if (i == burgerResponse.length-1) {
				console.log("creating the last bootstrap closing divs");
		        html = "</div>";
				$("#containerRow").append(html);	
			}
			else {
    	        html = "<div class='row' id='row"+rowCount+"'>";
				$("#containerRow").append(html);	
			}
		}
        html = "<div class='col-4 bg-dark text-white p-3 mx-auto flex-column burgerRow"+i+"'>";
		$("#row"+rowCount).append(html);
		//debugger;

        var divThatWillContainBothImageAndText = $("<div>").addClass('divThatWillContainBothImageAndText')
        var burgerImage = $("<img>").addClass('img');
        var pTag = $("<p>").addClass('burger-text');
        burgerImage.attr('src', burgerResponse[i].restaurant.featured_image);
        pTag.text(burgerResponse[i].restaurant.name);
        divThatWillContainBothImageAndText.append(burgerImage).append(pTag);
		$(".burgerRow"+i).append(divThatWillContainBothImageAndText);	
	};
});
FB.api(
    "/{object-id}/likes",
    function (response) {
      if (response && !response.error) {
        summary=true;
      }
    }
);
})

 

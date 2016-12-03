$(document).ready(
function()
{
     var carquery = new CarQuery();

     carquery.init();
     
     carquery.setFilters( {sold_in_us:true} );

     var searchArgs =
     ({
         body_id:                       "cq-body"
        ,default_search_text:           "Keyword Search"
        ,doors_id:                      "cq-doors"
        ,drive_id:                      "cq-drive"
        ,fuel_type_id:                  "cq-fuel-type"
        ,min_cylinders_id:              "cq-min-cylinders"
        ,min_mpg_hwy_id:                "cq-min-mpg-hwy"
        ,min_power_id:                  "cq-min-power"
        ,min_top_speed_id:              "cq-min-top-speed"
        ,min_torque_id:                 "cq-min-torque"
        ,min_weight_id:                 "cq-min-weight"
        ,min_year_id:                   "cq-min-year"
        ,max_cylinders_id:              "cq-max-cylinders"
        ,max_mpg_hwy_id:                "cq-max-mpg-hwy"
        ,max_power_id:                  "cq-max-power"
        ,max_top_speed_id:              "cq-max-top-speed"
        ,max_weight_id:                 "cq-max-weight"
        ,max_year_id:                   "cq-max-year"
        ,search_controls_id:            "cq-search-controls"
        ,search_input_id:               "cq-search-input"
        ,search_results_id:             "cq-search-results"
        ,search_result_id:              "cq-search-result"
        ,seats_id:                      "cq-seats"
        ,sold_in_us_id:                 "cq-sold-in-us"
     }); 
     carquery.initSearchInterface(searchArgs);

    $('#cq-search-btn').click( function(){
        carquery.search();
     } );
});


$(document).ready(function(){
    $("button").click(function(){
        $(this).closest('li').slideUp("high", function(){ $(this).remove(); })
    });
});


$(document).ready(function(){
$(".result-link").click(function(){
        
});
});
	

 function addPublication(){
        var temp = document.getElementById('temp').cloneNode(true);
        temp.style.display = "block";

       var comment = document.getElementById('comment').value;
        var query = document.getElementById('cq-search-input').value;
       
               
        var newQuery = temp.getElementsByTagName("h4")[0];
        var newComment = temp.getElementsByTagName("p")[0];

        newQuery.innerHTML = query;
        newComment.innerHTML = comment;

        var list = document.getElementById('statuses');

        list.appendChild(temp);

    }

    function deletePublication(but){
        var elm = but.parentElement.parentElement.parentElement;
        elm.parentElement.removeChild(elm);

    }

$(document).ready(function() {
  $('#list').click(function(event) {
    event.preventDefault();
    $('#products .item').addClass('list-group-item');
  });
  $('#grid').click(function(event) {
    event.preventDefault();
    $('#products .item').removeClass('list-group-item');
    $('#products .item').addClass('grid-group-item');
  });
});
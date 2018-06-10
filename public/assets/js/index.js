$(document).ready(function() {
    
    $(".devour-form").on("submit", function(event) {
    // console.log("did we hit this");
    event.preventDefault();

    var id = $(this).data("value");
    var devoured = $(this).data("devoured");
    console.log(id, devoured); // coming back undefined
    var isEaten = {
      devoured: true
    };

    // Send the PUT request
    $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: isEaten
      }).then(
        function() {
          console.log("changed devoured to: ", devoured);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });

    var burger_id = $(this).children(".id").val();
    console.log(id);
    $.ajax({
        method: "PUT",
        url: "/burgers/" + id
    }).then(function(data) {
        // reload page to display devoured burger in proper column
        location.reload();
    });
});

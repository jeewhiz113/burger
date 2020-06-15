// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".create-form").on("submit", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();
        console.log("Clicked")
        
        var burger = {
            name: $("#burgerName").val().trim(),
        };
        // Send the POST request.
        $.ajax("/api/newburger", {
        type: "POST",
        data: burger
        }).then(
        function() {
            console.log("created new burger");
            // Reload the page to get the updated list
            //location.reload();
        }
        );
    });
});
  
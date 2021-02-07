$(document).ready(function () {
    console.log("script loaded");
    $("#devour_btn").on("click", function (event) {
        event.preventDefault();
        

        var burger_id = $(this).children(".burger_id").val();
        console.log(burger_id);
        $.ajax({
            method: "PUT",
            url: "/burger/" + burger_id
        }).then(function (data) {
            // reload page to display devoured burger in proper column
            location.reload();
        });

    });
});  
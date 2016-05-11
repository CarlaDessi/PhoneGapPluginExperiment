$("#nav li a").on("click", function(e){
    e.preventDefault();
    $("#nav li").removeClass("active"); //Remove any previously "active" li
    $("#home, #camera, #geolocationdiv, #compass, #media").hide(); //Hide all "pages"
    console.log($(this).attr("href"))
    $($(this).attr("href")).show(); //Show only the current target
    $(this).closest("li").addClass("active"); //Set click li as active
});
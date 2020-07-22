$().ready(function() {
    
    //LOAD IMPORTS
    $(".fonts").load("././templates/fonts.html");
    $("nav").load("././templates/nav.html");
    $("footer").load("././templates/footer.html", function() {
        var year = new Date().getFullYear();
        $(".currentYear").html(year);
    });
    
    
    
    
});
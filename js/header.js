
$("[data-trigger=open]").on("click",function(){
    $("#one").removeClass("bar");
    $("#one").addClass("bar_1");
    $("#two").removeClass("bar");
    $("#two").addClass("bar_2");
    $("#there").hide();
})


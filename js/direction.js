$(document).ready(function(){
    $(".direction_tab li").click(function(e){
        $(".direction_selected_tab").removeClass("direction_selected_tab")
        $(this).addClass("direction_selected_tab")
        idx = $(this).attr("index")
        $(".show_tab").removeClass("show_tab")
        $(".index_"+ idx).addClass("show_tab")
    })
})
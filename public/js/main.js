$(document).ready(function(){
    $("nav#menu ul li#home").attr('class','selected_page')
    $("nav#menu ul li#home a").css('color','#FFFFFF')
    $("#banner #list_product_standout ul li img").click(function(){
        var link_img = $(this).attr("src");
        $("#show_product_standout .img_standout img").attr("src", link_img);
    })
    $("#owl-demo").owlCarousel({
        items : 3, //10 items above 1000px browser width
        itemsDesktop : [1000,2], //5 items between 1000px and 901px
        itemsDesktopSmall : [900,3], // betweem 900px and 601px
        itemsTablet: [600,2], //2 items between 600 and 0;
        itemsMobile : false // itemsMobile disabled - inherit from itemsTablet option
    });
    function clock(){
        var hour = document.getElementById("current_hour");
        var minute = document.getElementById("current_minute");
        var second = document.getElementById("current_second");
        hour.innerHTML = new Date().getHours();
        minute.innerHTML = new Date().getMinutes();
        second.innerHTML = new Date().getSeconds();
    }
    var clock = setInterval(clock,1000)
})
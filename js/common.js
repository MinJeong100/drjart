$("document").ready(function () {
    let Fullpage = new fullpage(".fullpage",{
        navigation: true,
        licenseKey : "603D3EBB-D1B84561-B40D98B6-7A87C3D7",
    })

    $(".fix-menu .hamberger").click(function(){
        $(this).toggleClass("on")
        $(".header .gnb-area").toggleClass("on")
        if($(this).hasClass("on") === true){
            $(".header .fix-menu .logo").css("opacity", "0")
            $(".window").show();
        }else{
            $(".header .fix-menu .logo").css("opacity", "1")
            $(".window").hide();
        }
    })
    $(".header .gnb-area .language ul li").click(function(){
        let i = $(this).index();
        $(".header .gnb-area .language ul li").removeClass("on").eq(i).addClass("on")
    })
    $(".footer .footer-right-menu > div").click(function(e){
        e.preventDefault()
        let i = $(this).index();
        $(".footer .footer-right-menu > div > a").eq(i).toggleClass("on")
        $(".footer .footer-right-menu > div").eq(i).find("ul").toggleClass("on")
    })
    $(".footer .sitemap").click(function(){
        $(".footer .sitemap .sitemenu").toggleClass("on")
    })
    
});
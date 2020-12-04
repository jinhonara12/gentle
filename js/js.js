$(function(){
    var $e9bd5a = $(".color-e9bd5a");
    var $bfca85 = $(".color-bfca85");
    var $49a191 = $(".color-49a191");
    var $c8424d = $(".color-c8424d");
    var $btn = $('.productBtn');
    


    $e9bd5a.on("mouseenter", active)
    $bfca85.on("mouseenter", active)
    $49a191.on("mouseenter", active)
    $c8424d.on("mouseenter", active)
    $btn.on("mouseenter", active)

    function active(){
        $(this).addClass('active-circle')
        var i = $(this).siblings().hasClass('active-circle')
        var num = $(this).index()
        
        // 원형에 테두리 만들기
        if(i===true){
            $(this).siblings().removeClass('active-circle');
        
        }
        
        // 컬렉션 1번
        if(num===1 && $(this).parent().hasClass('firstProduct_1')){
            $('.first1').attr("src","css/img/product-1.png");
            $('#firstProduct_1_name').text("디플로 - 론 울프 032")
            $('#firstProduct_1_price').text("350,000 원")
        }else if(num===2 && $(this).parent().hasClass('firstProduct_1')){
            $('.first1').attr("src","css/img/product-3.png");
            $('#firstProduct_1_name').text("디플로 - 론 울프 02")
            $('#firstProduct_1_price').text("일시 품절")
        }else if(num===1 && $(this).parent().hasClass('firstProduct_2')){
            $('.first2').attr("src","css/img/product-2.png");
            $('#firstProduct_2_name').text("디플로 - 더 커브 02")
            $('#firstProduct_2_price').text("350,000 원")
            
        }else{
            $('.first2').attr("src","css/img/product-4.png");
            $('#firstProduct_2_name').text("디플로 - 더 커브 032")
            $('#firstProduct_2_price').text("350,000 원")
            
        }

        // 컬렉션 2번
        if(num===1 && $(this).parent().hasClass('secondProduct_1')){
            $('.second1').attr("src","css/img/product2-1.png");
            $('#secondProduct_1_name').text("마이 마01")
            $('#secondProduct_1_price').text("249,000 원")
        }else if(num===2 && $(this).parent().hasClass('secondProduct_1')){
            $('.second1').attr("src","css/img/product2-2.png");
            $('#secondProduct_1_name').text("마이 마 BC4")
            $('#secondProduct_1_price').text("일시 품절")
        }else if(num===1 && $(this).parent().hasClass('secondProduct_2')){
            $('.second2').attr("src","css/img/product2-3.png");
            $('#secondProduct_2_name').text("랭 01")
            $('#secondProduct_2_price').text("249,000 원")
        }else{
            $('.second2').attr("src","css/img/product2-4.png");
            $('#secondProduct_2_name').text("랭 01(K)")
            $('#secondProduct_2_price').text("249,000 원")
        }
    } 
    // active end
    

    var locationA = $(window).scroll(function(){
        var locationY = $(window).scrollTop();
        var $navbar = $('.navbar');
        console.log(locationY);

        if(locationY > 930){
            $navbar.addClass('navbar-position')
        }else if(locationY < 930){
            $navbar.removeClass('navbar-position')
        }

    })

    

    // 네브바 스크롤시 색 바꾸기
    var $navbar = $('.navbar');

    // 캐러셀 꾸미기
    var $order = $('#carouselOrder');
    
        var i = $('.carousel-indicators li').hasClass("active")
        var j = $('.carousel-indicators li').hasClass()
    
        $order.click(function(){
            console.log(j)
        })
        
    
    

    // 웨이포인트

    var $wp1 = $('.wp1');
    var $wp2 = $('.wp2');
    var $wp3 = $('.wp3');
    var $wp4 = $('.wp4');
    var $wp5 = $('.wp5');
    var $wp6 = $('.wp6');
    
    $wp1.waypoint(function(direction){
        if(direction === "down"){
            $wp1.addClass("animate__animated animate__fadeInLeft");
        }
    },{
        offset:'100%'
    });
    $wp1.waypoint(function(direction){
        if(direction === "up"){
            $wp1.removeClass("animate__fadeInLeft");
        }
    },{
        offset:'300%'
    })

    $wp2.waypoint(function(direction){
        if(direction === "down"){
            $wp2.addClass("animate__animated animate__fadeInRight");
        }
    },{
        offset:'100%'
    });
    $wp2.waypoint(function(direction){
        if(direction === "up"){
            $wp2.removeClass("animate__fadeInRight");
        }
    },{
        offset:'300%'
    })
    

    $(window).resize(function(){
        var windowWidth = $(window).width()
    console.log(windowWidth)

    if(windowWidth<=969){
        $('.navbar-nav>li:nth-child(1) a').removeClass('nav-mark');
        $('.navbar-nav>li:nth-child(2) a').removeClass('nav-mark');
        $('.navbar-nav>li:nth-child(3) a').removeClass('nav-mark');
        $('.navbar-nav>li:nth-child(4) a').removeClass('nav-mark');
        $('.navbar-nav>li:nth-child(5) a').removeClass('nav-mark');
        $('.navbar-nav>li:nth-child(6) a').removeClass('nav-mark');
    }else{
        $('.navbar-nav>li:nth-child(1) a').addClass('nav-mark');
        $('.navbar-nav>li:nth-child(2) a').addClass('nav-mark');
        $('.navbar-nav>li:nth-child(3) a').addClass('nav-mark');
        $('.navbar-nav>li:nth-child(4) a').addClass('nav-mark');
        $('.navbar-nav>li:nth-child(5) a').addClass('nav-mark');
        $('.navbar-nav>li:nth-child(6) a').addClass('nav-mark');
    }
    })
    

    $('.carousel').carousel({
        interval: false
    })

    var $detailBtn = $('#detail-click');
    var $detailBox = $('.detail-fix-box');
    $detailBox.hide();
    $detailBtn.click(function(){
        $detailBox.show();
        $detailBox.addClass('index_up')
        $('.carousel-inner').addClass('background_black');
    })
    $('.carousel-inner').click(function(){
        $detailBox.hide();
        $detailBox.removeClass('index_up')
        $('.carousel-inner').removeClass('background_black');
    })
})  



//Ò³ÃæµÄÒµÎñÂß¼­
$(document).ready(function(){


    /*¿ªÊ¼±à³Ì*/
    /*²úÆ·Ïà¹Ø*/
    /*ÊµÀý»¯*/
    var product =  new Product()
    product.name='HM休闲服登山包'
    product.description='棒棒的，棒棒的，登山一流，服务一流，你好，我好，他也好，太棒了，一口气等上珠穆朗玛峰'
    product.normalPrice=144
    product.groupbuyPrice=120
    product.buySum=100;
    product.images=[
        {small:'images/s11.jpg',big:'images/s11.jpg'},
        {small:'images/s12.jpg',big:'images/s12.jpg'},
        {small:'images/s13.jpg',big:'images/s13.jpg'}
    ]
    /*Ê¹ÓÃ¶ÔÏóÖÐµÄ·½·¨ÊôÐÔ*/
    product.bindDOMDetail()
    product.bindDOMImage()

    /*°ó¶¨ÊÂ¼þ*/
    $('#btnaddcart').click(function(){
        /*¹ºÎï³µÐÂÔöÒ»¸ö²úÆ·*/
        console.log('12222')
        cart.products.push(product)
        ///*¸üÐÂ¹ºÎï³µ - ÖØÐÂ°ó¶¨¹ºÎï³µ*/
        /*Èç¹û²»·â×°£¬ÕâÀï¾Í¿ÉÄÜ²úÉú´úÂëÖØ¸´*/
        cart.bindBasic()
        cart.bindList()
        $(window).scrollTop(0);
    });





    /*ÊµÀý¹ºÎï³µ*/
    var cart =  new Cart()
    cart.sum=3
    cart.allPrice=2000

    /*¼ÙÉè¹ºÎï³µÖÐÒÑ¾­ÓÐÈý¸ö²úÆ·*/
    cart.products.push(product)
    cart.products.push(product)
    cart.products.push(product)

    /*Ê¹ÓÃ¶ÔÏóÖÐµÄ·½·¨ÊôÐÔ*/
    cart.bindBasic()
    cart.bindList()

});
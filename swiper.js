

$('.demo-crausel').owlCarousel({
    loop:true,
    margin:20,
    nav:true,
    items:2,
    autoplay: false,
    responsive : {
        0 : {
            items:1
        },
        480 : {
            items:1
            
        },
        768 : {
          items:1
           
        },
        1024 : {
            items:2
             
          }
      
    }

    
})

$('.team-crausel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay: true,
    items:2
})

$('.demo-1-crausel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    items:1,
    autoplay: true
})

$('.team-crausel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay: true,
    items:1
})
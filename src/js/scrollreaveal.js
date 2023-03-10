window.sr = ScrollReveal({
    reset: true,
    distance: "40px",
    duration: 2500,
    delay: 400       
});

sr.reveal('.home-right .h1', { 
    delay: 500, origin:'left'
});

sr.reveal('.home-right .paragraph', { 
    delay: 600, origin:'left'
});

sr.reveal('.home-right .home-btn', { 
    delay: 700, origin:'left'
});

sr.reveal('.home-left img', { 
    delay: 700, origin:'right'
});

sr.reveal('.info-container', { 
    delay: 200, distance: '20px', origin:'bottom'
});

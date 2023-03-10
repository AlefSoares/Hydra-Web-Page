window.sr = ScrollReveal({
    reset: true,
    distance: "100px",
    duration: 2500,
    delay: 400       
});

sr.reveal('.home-right .h1', { 
    delay: 300, origin:'left'
});

sr.reveal('.home-right .paragraph', { 
    delay: 350, origin:'left'
});

sr.reveal('.home-right .home-btn', { 
    delay: 400, origin:'left'
});

sr.reveal('.home-left img', { 
    delay: 450, origin:'right'
});

sr.reveal('.info-container', { 
    delay: 200, distance: '20px', origin:'bottom'
});

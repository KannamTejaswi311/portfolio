/*toggle icon navbar*/
let menuIcon=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');

menuIcon.onclick = ()=>{
    menuIcon.classList.toggle('bxs-x-square');
    navbar.classList.toggle('active');
};





/*scroll section active link:*/
let sections=document.querySelectorAll('section');
let navlinks=document.querySelectorAll('header nav a');

window.onscroll=()=>{
    sections.forEach(sec => {
        let top= window.scrollY;
        let offset= sec.offsetTop - 150;
        let height=sec.offsetHeight;
        let id=sec.getAttribute('id');

        if(top >= offset && top < offset+height){
            navlinks.forEach(links=>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' +id+ ']').classList.add('active');

            });
        };

        

    });
    //sticky nav bar:
    let header=document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY>100);
    
     /*remove toggle icon and navbar when click navbar link */ 
     menuIcon.classList.remove('bxs-x-square');
     navbar.classList.remove('active');
    };


/**scroll reveal */
ScrollReveal({
     //reset: true,
     distance:'80px',
     duration:2000,
     delay:200

     });
     ScrollReveal().reveal('.home-content, .heading',{origin:'top'});
     ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form',{origin:'bottom'});
     ScrollReveal().reveal('.home-content h1',{origin:'left'});
     ScrollReveal().reveal('.home-content p',{origin:'right'});


/** typed js*/
const typed =new Typed('.multiple-text', {
    strings: ['passionate learner','eager to explore new ideas and challenges.','Passionate software engineer!!','curious mind, always seeking knowledge and innovation.'],
    typeSpeed: 80,
    backSpeed: 80,
    backDelay:1000,
    loop:true





});

// Wait for the DOM content to be fully loaded before hiding the loading screen
window.addEventListener('load', () => {
    // Select the loading screen element
    const loadingScreen = document.getElementById('loading-screen');

    // Add a slight delay before hiding the loading screen
    setTimeout(() => {
        loadingScreen.classList.add('hidden');
    }, 500);  // 500ms delay before hiding
});













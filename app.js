let homeBtn = document.querySelector('.fa-house');
let aboutBtn = document.querySelector('.fa-user');
let skillsBtn = document.querySelector('.fa-code');
let contactBtn = document.querySelector('.fa-at');
let bar = document.querySelector('ul > aside');
let navNewColor = '#fff';
let stars = document.querySelectorAll('.stars');
//GSAP
gsap.registerPlugin(ScrollTrigger);
//Main scroll behavior
gsap.utils.toArray(".panel").forEach((panel, i) => {
    ScrollTrigger.create({
        trigger: panel,
        start: "top top", 
        pin: true, 
        pinSpacing: false,
        snap: 1 / 1,
    });
});
//About section
//Navigation colors
let tl = gsap.timeline({defaults: {color: navNewColor}})
.to(bar,{backgroundColor: navNewColor})
.to(contactBtn,{})
.to(skillsBtn,{})
.to(aboutBtn,{})
.to(homeBtn,{})
ScrollTrigger.create({
    trigger: '.panel about',
    start: 'top top',
    scrub: true,
    animation: tl,
    // markers: true
});
//Background stars
// let starTl = gsap.timeline()
// .to('#stars1',{x:-3500, duration: 50})
// .to('#stars2',{x:-3500, duration: 100})
// .to('#stars3',{x:-3500, duration: 135});
// ScrollTrigger.create({
//     trigger: '.panel about',
//     start: 'top top',
//     animation: starTl
// })
gsap.fromTo('#stars1',{x: window.innerWidth},{x:-3500, duration: 50});
gsap.fromTo('#stars2',{x: window.innerWidth},{x:-3500, duration: 100});
gsap.fromTo('#stars3',{x: window.innerWidth},{x:-3500, duration: 135});



//Skills section
//Animation
// .to(homeBtn,{color: 'transparent'})
// .to(homeBtn,{})
// .to(aboutBtn,{color: 'transparent'})
// .to(aboutBtn,{})
// .to(skillsBtn,{color: 'transparent'})
// .to(skillsBtn,{})
// .to(contactBtn,{color: 'transparent'})
// .to(contactBtn,{})
// .to(bar,{backgroundColor: 'transparent'})
// .to(bar,{backgroundColor: navNewColor})








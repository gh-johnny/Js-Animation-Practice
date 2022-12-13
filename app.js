//Variables
let homeBtn = $('.fa-house');
let aboutBtn = $('.fa-user');
let projectsBtn = $('.fa-code');
let contactBtn = $('.fa-at');
let bar = $('ul > aside');
let navLightColor = '#fff';
let navDarkColor = 'rgb(20, 20, 20)';
let navPickedColor = '#04af65';
//Default states
$('.fa-house').css('color',navPickedColor);
$('.slide').hide();
$($('.slide')[0]).show();
$('.about-card li').addClass('uncheck')
//Main scroll behavior
gsap.registerPlugin(ScrollTrigger);
gsap.utils.toArray(".panel").forEach((panel) => {
    ScrollTrigger.create({
        trigger: panel,
        start: "top top", 
        pin: true, 
        pinSpacing: false,
        snap: 1 / 1,
    });
});
//About section
//Navigation bar colors animation
let aboutNavBarTl = gsap.timeline({defaults: {color: navLightColor}})
.to(bar,{backgroundColor: navLightColor})
.to(contactBtn,{})
.to(projectsBtn,{})
.to(aboutBtn,{color: navPickedColor})
.to(homeBtn,{})
.to(bar,{backgroundColor: navLightColor})
ScrollTrigger.create({
    trigger: '.marker-about',
    start: 'top bottom',
    scrub: true,
    animation: aboutNavBarTl,
});
//Background stars animation
gsap.fromTo('#stars1',{x: window.innerWidth},{x:-1500, duration: 30});
gsap.fromTo('#stars2',{x: window.innerWidth},{x:-1500, duration: 60});
gsap.fromTo('#stars3',{x: window.innerWidth},{x:-1500, ease: 'linear',duration: 85});
//Austronaut flotating
gsap.timeline({repeat:-1,defaults:{duration:2,ease:'power1.inOut'}})
.fromTo('.austronaut',{y:'+=15'},{y:'-=15'})
.fromTo('.austronaut',{y:'-=15'},{y:'+=15'});
//meCoding floating
gsap.timeline({repeat:-1,defaults:{duration:2,ease:'power1.inOut'}})
.fromTo('.me-coding',{y:'+=15'},{y:'-=15'})
.fromTo('.me-coding',{y:'-=15'},{y:'+=15'});
//Crossing out post-it and showing answer
$(function(){
    $('.about-card li').click(function(){
        $(this).toggleClass('uncheck');
        switch($(this).index()){
            case 0:
                $('.one').toggle()
            break
            case 1:
                $('.two').toggle()
            break
            case 2:
                $('.three').toggle()
            break
            case 3:
                $('.four').toggle()
            break
            case 4:
                $('.five').toggle()
            break
            case 5:
                $('.six').toggle()
            break
        }
    });
});
//Slide effect
let slidePicker = $('.slide-picker')
let prevPick = slidePicker[0];
slidePicker.on('click',function(){
    let pickedIdx = $(this).index();
    let pickedSlide = $('.slide').eq(pickedIdx)
    let card1 = pickedSlide[0].children[0];
    let card2 = pickedSlide[0].children[1];
    if(this == prevPick) return;
    function slideOut(whereTo,n1,n2){
        slidePicker.attr('disabled', true)
        gsap.timeline().to($('.slide')[$(prevPick).index()].children[n1],{x:`${whereTo}${window.innerWidth}`,duration:1.25,ease:'bounce.out'});
        gsap.timeline().to($('.slide')[$(prevPick).index()].children[n2],{x:`${whereTo}${window.innerWidth}`,duration:1.25,ease:'bounce.out',delay: .25});
        setTimeout(()=>{
            $('.slide').hide()
            pickedSlide.show()
        },2000)
    }
    function slideIn(whereTo,c1,c2){
        gsap.timeline({defaults: {duration:1.25,ease:'bounce.out',x:0}})
        .fromTo(c1,{x:`${whereTo}${window.innerWidth}`},{delay:2})
        .fromTo(c2,{x:`${whereTo}${window.innerWidth}`},{delay:-.5});
        setTimeout(() => {
            slidePicker.attr('disabled', false)
        }, 4000);
    }
    if(pickedIdx > $(prevPick).index()){
        slideOut(`-`,0,1);
        slideIn(``,card1,card2)
    }else{
        slideOut(``,1,0)
        slideIn(`-`,card2,card1)
    }
    prevPick = this;
})  
if(
    (window.performance.navigation && window.performance.navigation.type === 1) ||
    window.performance
    .getEntriesByType('navigation')
    .map((nav) => nav.type)
    .includes('reload')
)slidePicker[0].checked = true;
//Projects section
//Animation
let projectsNavBarTl = gsap.timeline({defaults: {color: navLightColor}})
.to('.marker-rpoject',{color: navLightColor})
.to(bar,{backgroundColor: navLightColor})
.to(contactBtn,{})
.to(projectsBtn,{color: navPickedColor})
.to(aboutBtn,{})
.to(homeBtn,{})
ScrollTrigger.create({
    trigger: '.marker-projects',
    start: 'top bottom',
    scrub: true,
    animation: projectsNavBarTl,
});
//Contact section
//Navigation bar colors animation
let contactNavBarTl = gsap.timeline({defaults: {color: navDarkColor}})
.to('.marker-rpoject',{color: navLightColor})
.to(bar,{backgroundColor: navDarkColor})
.to(contactBtn,{color: navPickedColor})
.to(projectsBtn,{})
.to(aboutBtn,{})
.to(homeBtn,{})
ScrollTrigger.create({
    trigger: '.marker-contact',
    start: 'top bottom',
    scrub: true,
    animation: contactNavBarTl,
});
//Sphere of skills
const skills = [
    'HTML5',
    'CSS3',
    'SASS',
    'LESS',
    'JavaScript',
    'jQuery',
    'ReactJS',
    'Vue.js',
    'PHP',
    'Node.js',
    'MySQL',
    'Figma',
    'Photoshop',
    'Angular.js',
    'WordPress',
    'Wix',
    'Weebly',
    'OOP',
    'UML',
];
const tagCloud = TagCloud('.sphere',skills,{
    radius: 235,
    maxSpeed: 'fast',
    initSpeed: 'fast',
    direction: 100,
    keep: true,
})
$('.sphere').css('color',navLightColor)
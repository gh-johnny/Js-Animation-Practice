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
$('.about-container li').addClass('uncheck');
$('.sphere').css('color',navLightColor)
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
//Flotating animation
const floatingAnimation = function(target,direction,axis,duration=2){
    if(axis=='y'){
        gsap.timeline({repeat:-1,defaults:{duration:duration,ease:'power1.inOut'}})
        .fromTo(target,{y:`+=${direction}`},{y:`-=${direction}`})
        .fromTo(target,{y:`-=${direction}`},{y:`+=${direction}`});
    }else{
        gsap.timeline({repeat:-1,defaults:{duration:duration,ease:'power1.inOut'}})
        .fromTo(target,{x:`+=${direction}`},{x:`-=${direction}`})
        .fromTo(target,{x:`-=${direction}`},{x:`+=${direction}`});
    }
}
floatingAnimation('.austronaut',15,'y');
floatingAnimation('.pencil',12,'y',3);
floatingAnimation('.me-coding',13,'y',3);
floatingAnimation('.me-coding',35,'x',5);
//Crossing out post-it and showing answer
$(function(){
    $('.about-container li').click(function(){
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
        gsap.timeline().to($('.slide')[$(prevPick).index()].children[n1],{x:`${whereTo}${window.innerWidth}`,duration:1,ease:'bounce.out'});
        gsap.timeline().to($('.slide')[$(prevPick).index()].children[n2],{x:`${whereTo}${window.innerWidth}`,duration:1,ease:'bounce.out',delay: .25});
        setTimeout(()=>{
            $('.slide').hide()
            pickedSlide.show()
        },1500)
    }
    function slideIn(whereTo,c1,c2){
        gsap.timeline({defaults: {duration:1,ease:'bounce.out',x:0}})
        .fromTo(c1,{x:`${whereTo}${window.innerWidth}`},{delay:1.25})
        .fromTo(c2,{x:`${whereTo}${window.innerWidth}`},{delay:-.25});
        setTimeout(() => {
            slidePicker.attr('disabled', false)
        }, 3000);
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
.to('.marker-projects',{color: navLightColor})
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
//Contact section
//Navigation bar colors animation
let contactNavBarTl = gsap.timeline({defaults: {color: navDarkColor}})
.to('.marker-projects',{color: navLightColor})
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
//Variables
let homeBtn = $('.fa-house'),
    aboutBtn = $('.fa-user'),
    projectsBtn = $('.fa-code'),
    contactBtn = $('.fa-at'),
    bar = $('ul > aside'),
    navLightColor = '#fff',
    navDarkColor = 'rgb(20, 20, 20)',
    navPickedColor = '#04af65',
    listLi = $('.about-container li'),
    slide = $('.slide');
    labels = $('.selector'),
    sphere = $('.sphere');
//Default states
homeBtn.css('color',navPickedColor);
slide.hide();
$(slide[0]).show();
$(labels[0]).toggleClass('selected')
listLi.addClass('uncheck');
sphere.css('color',navLightColor);
//Main scroll behavior
gsap.registerPlugin(ScrollTrigger);
gsap.utils.toArray(".panel").forEach((panel) => {
    ScrollTrigger.create({
        trigger: panel,
        start: "top top", 
        // pin: true, 
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
gsap.fromTo('#stars3',{x: window.innerWidth},{x:-1500, ease: 'power1.out',duration: 85});
//Flotating animation
const floatingAnimation = function(target,direction,axis,duration=2){
    (axis=='y') 
    ?
        gsap.timeline({repeat:-1,defaults:{duration:duration,ease:'power1.inOut'}})
        .fromTo(target,{y:`+=${direction}`},{y:`-=${direction}`})
        .fromTo(target,{y:`-=${direction}`},{y:`+=${direction}`})
    :
        gsap.timeline({repeat:-1,defaults:{duration:duration,ease:'power1.inOut'}})
        .fromTo(target,{x:`+=${direction}`},{x:`-=${direction}`})
        .fromTo(target,{x:`-=${direction}`},{x:`+=${direction}`})
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
let slidePicker = $('.slide-picker'),
    prevPick = slidePicker[0];
labels.on('click',function(){
    if($(slidePicker).attr('disabled') == 'disabled') return
    labels.removeClass('selected')
    $(this).toggleClass('selected')
})
slidePicker.on('click',function(){
    let pickedIdx = $(this).index(),
        pickedSlide = $('.slide').eq(pickedIdx),
        card1 = pickedSlide[0].children[0],
        card2 = pickedSlide[0].children[1];
    if(this == prevPick) return;
    function slideOut(whereTo,n1,n2){
        slidePicker.attr('disabled', true)
        gsap.timeline().to($('.slide')[$(prevPick).index()].children[n1],{x:`${whereTo}${window.innerWidth}`,duration:1,ease:'power4.out'});
        gsap.timeline().to($('.slide')[$(prevPick).index()].children[n2],{x:`${whereTo}${window.innerWidth}`,duration:1,ease:'power4.out',delay: .25});
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
        slideOut(`-`,0,1)
        slideIn(``,card1,card2)
    }else{
        slideOut(``,1,0)
        slideIn(`-`,card2,card1)
    }
    prevPick = this;
})
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
    'React.js',
    'Vue.js',
    'PHP',
    'Node.js',
    'MySQL',
    'Figma',
    'Photoshop',
    'WordPress',
    'Wix',
    'Weebly',
    'OOP',
    'UML',
    'Git',
    'GitHub'
],
    tagCloud = TagCloud('.sphere',skills,{
    radius: 235,
    maxSpeed: 'slow',
    initSpeed: 'slow',
    direction: 100,
    keep: true,
})
//Tilt animation
VanillaTilt.init(document.querySelectorAll(".card"), {
    max: 25,
    speed: 800,
    glare: true,
    "max-glare": .125,
});
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
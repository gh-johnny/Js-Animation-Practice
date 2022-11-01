//GSAP
gsap.registerPlugin(ScrollTrigger);
//Main scroll behavior
gsap.utils.toArray(".panel").forEach((panel, i) => {
    ScrollTrigger.create({
        trigger: panel,
        start: "top top", 
        pin: true, 
        pinSpacing: false,
        snap: 4 / 4,
    });
});
//About


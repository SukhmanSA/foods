let i = 0;
const icons = document.querySelectorAll(".food");

function runLoop() {
    setTimeout(() => {
        for (let j = 0; j < icons.length; j++) {
            icons[j].classList.remove("change");
        }
        icons[i].classList.add("change");
        i = (i + 1) % icons.length;

        runLoop();
    }, 1500); 
}
runLoop();

const targets = document.querySelectorAll(".hani");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("ani"); 
            entry.target.classList.remove("hani");
        } else {
            entry.target.classList.remove("ani"); 
            entry.target.classList.add("hani");
        }
    });
}, { threshold: 0.9}); 
targets.forEach(target => {
    observer.observe(target);
});
$(".btn1").click(function(){
    $(".nav").toggle();
});

const tl = gsap.timeline({ defaults: { duration: 1 } });

const targets2 = $(".part2-div");
const observer2 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            tl.fromTo(".dp", { y: 10000 }, { y: 0, duration: 1 }); // Corrected from/to method
        }else{
            tl.to(".dp", { y: 10000 })
        }
    });
}, { threshold: 0.7 });

targets2.each(function() {
    observer2.observe(this);
});

$(".hover1").mouseenter(() => {
    const hoverTl = gsap.timeline();
    hoverTl.fromTo(".card1",{ y: -100, duration:10 },{y:0, duration:3}); 
});

$(".hover2").mouseenter(() => {
    const hoverTl = gsap.timeline();
    hoverTl.fromTo(".card2",{ y: -100, duration:10 },{y:0, duration:3}); 
}); 

$(".hover3 ").mouseenter(() => {
    const hoverTl = gsap.timeline();
    hoverTl.fromTo(".card3",{ y: -100, duration:10 },{y:0, duration:3}); 
}); 


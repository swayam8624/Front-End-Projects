
function navAnimation() {
    let nav = document.querySelector("nav")

nav.addEventListener("mouseenter", function (e) {
    let tl = gsap.timeline()
    tl.to("#nav-bottom", {
        height:"21vh"
    })
    tl.to(".nav-part2 h5", {
        display:"block"
    })
    tl.to(".nav-part2 h5 span", {
        y: 0,
        stagger: {
            amount:0.6
        }
    })
})
nav.addEventListener("mouseleave", function (e) {
    let tl = gsap.timeline()
    tl.to(".nav-part2 h5 span", {
        y: 25,
        stagger: {
            amount:0.1
        }
    })
    tl.to(".nav-part2 h5", {
        display: "none",
        duration:0.01
    })
    tl.to("#nav-bottom", {
        height: "0vh",
        duration:0.3
    })
})
}

navAnimation()
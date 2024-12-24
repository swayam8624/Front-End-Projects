
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
    tl.to("#nav-bottom", {
        height: "0vh",
        // duration:0.2
    })
    tl.to(".nav-part2 h5", {
        display: "none",
        duration:0.01
    })
    
})
}

// navAnimation()

function Page2Animation() {
    let right = document.querySelectorAll(".right-elem")
    let rightimg = document.querySelectorAll(".right-elem img")

    right.forEach(function (elem) {
        elem.addEventListener("mouseenter", function (e) {
            gsap.to(elem.childNodes[5], {
                opacity: 1,
                scale: 1
            })
        })
        elem.addEventListener("mouseleave", function (e) {
            gsap.to(elem.childNodes[5], {
                opacity: 0,
                scale: 0
            })
        })
        elem.addEventListener("mousemove", function (e) {
            gsap.to(elem.childNodes[5], {
                x: e.x - elem.getBoundingClientRect().x - 50,
                y: e.y - elem.getBoundingClientRect().y - 150
            })
        })
    })
}

Page2Animation()

//<i class="ri-arrow-right-up-line"></i>

function Page3animation() {
    let page3 = document.querySelector("#page3")
    let cent = document.querySelector(".page3-center")
    const icon = document.querySelector(".icon i");
    page3.addEventListener("mouseenter", function (e) {
            icon.classList.remove("ri-play-fill");
            icon.classList.add("ri-arrow-right-up-line");
            gsap.to(page3.childNodes[3], {
                opacity: 1,
                scale: 1,

            })
            gsap.fromTo(icon,
            { scale: 0.8, opacity: 0 },
            { scale: 1, opacity: 1, duration: 1.5, ease: "power2.out" }
    );
        })
        page3.addEventListener("mouseleave", function (e) {
            gsap.to(page3.childNodes[3], {
                opacity: 0,
                scale: 0
            })
            icon.classList.remove("ri-arrow-right-up-line");
            icon.classList.add("ri-play-fill");

            gsap.to(icon, { scale: 1, duration: 0.3 });
        })
    page3.addEventListener("mousemove", function (e) {
            console.log(e , e.y , e.y-630 , cent.getBoundingClientRect())
        gsap.to(page3.childNodes[3], {
                    x: e.x - 880 ,
                    y: e.y - 600
                })
            })
}

// 875 , 630

Page3animation()


function page3VideoAnimation() {
    var page3Center = document.querySelector(".page3-center")
    var video = document.querySelector("#page3 video")

    page3Center.addEventListener("click", function () {
        video.play()
        gsap.to(video, {
            transform: "scaleX(1) scaleY(1)",
            opacity: 1,
            borderRadius: 0
        })
    })
    video.addEventListener("click", function () {
        video.pause()
        gsap.to(video, {
            transform: "scaleX(0.7) scaleY(0)",
            opacity: 0,
            borderRadius: "30px"
        })
    })


    var sections = document.querySelectorAll(".sec-right")

    sections.forEach(function (elem) {
        elem.addEventListener("mouseenter", function () {
            elem.childNodes[3].style.opacity = 1
            elem.childNodes[3].play()
        })
        elem.addEventListener("mouseleave", function () {
            elem.childNodes[3].style.opacity = 0
            elem.childNodes[3].load()
        })
    })

}

page3VideoAnimation()
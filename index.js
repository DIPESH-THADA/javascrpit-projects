var crsr = document.querySelector('#cursor')
var crsrBlr = document.querySelector('#cursor-blur')

document.addEventListener("mousemove", function(dets) {
  crsr.style.left = dets.x+30+"px"
  crsr.style.top = dets.y+"px"
  crsrBlr.style.left = dets.x- 200 +"px"
  crsrBlr.style.top = dets.y-200+"px"
})

const h4all = document.querySelectorAll("#nav h4")
h4all.forEach((elem) => {
  elem.addEventListener('mouseenter', () => {
    crsr.style.scale = 2
    crsr.style.border = "0.7px solid #fff"
    crsr.style.backgroundColor = "transparent"
  })
  elem.addEventListener('mouseleave', () => {
    crsr.style.scale = 1
    crsr.style.border = "0px solid #95c11e"
    crsr.style.backgroundColor = "#95c11e"
  })
})


gsap.to("#nav", {
  backgroundColor: "#000",
  height: "110px",
  duration: 0.5,
  scrollTrigger:{
    trigger: "#nav",
    scroller: "body",
    markers: true,
    start: "top -10%",
    end: "top -11%",
    scrub: 1
  }
})

gsap.to("#main", {
  backgroundColor: "#000",
  scrollTrigger: {
    trigger: "#main",
  scroller: "body",
  markers: true,
  start: "top -25%",
  end: "top -70%",
  scrub: 2
  }
})

gsap.from("#about-us img, #about-us-in", {
  y:90,
  opacity: 0,
  duration: 1,
  stragger: 0.4,
  scrollTrigger:{
    trigger:"#about-us",
    scroller:"body",
    /* marker: true, */
    start:"top 60%",
    end:"top 58%",
    scrub: 3
  }
})

gsap.from(".card", {
  scale:0.8,
  opacity: 0,
  duration: 1,
  stragger: 0.4,
  scrollTrigger:{
    trigger:".card",
    scroller:"body",
    /* marker: true, */
    start:"top 70%",
    end:"top 65%",
    scrub: 3
  }
})

gsap.from(".quot1", {
  y:-70,
  x:-70,
  scrollTrigger:{
    trigger:".quot1",
    scroller:"body",
    /* marker: true, */
    start:"top 50%",
    end:"top 47%",
    scrub: 3
  }
})

gsap.from(".quot2", {
  y:-70,
  x:-70,
  scrollTrigger:{
    trigger:".quot1",
    scroller:"body",
    /* marker: true, */
    start:"top 50%",
    end:"top 47%",
    scrub: 3
  }
})

gsap.from("#page4 h1",{
  trigger:"#page4 h1",
    scroller:"body",
    /* marker: true, */
    start:"top 75%",
    end:"top 70%",
    scrub: 4
  }
)
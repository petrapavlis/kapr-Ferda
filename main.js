// Najede text a tlačítka
let intro = () => {
	let tl = gsap.timeline ({defaults: {opacity: 0, ease: "back"}});
  tl.from ("h1", {duration: 2, x: 80})
  .from ("h2", {duration: 2, x: -80}, "<") // start when previous tween begins
  .from("button", {y:30}, "-=0.2") // start before previous tween ends
  return tl;
}
intro()


// Bubliny jdou kaprovi od pusy
gsap.to(".bubble", {
  opacity: 0,
  top: 10,
  x: "random(-50,50)",
  scale: "random(.2, 1.2)",
  duration: 6,
  stagger: {
      amount: 15,
      each: 1,
      repeat: -1
  }});


// Ferda si plave na místě a vyčkává na verdikt
let ferda = document.querySelector(".ferda")
let ferdaFloating = () => {
  let tl = gsap.timeline({defaults:{duration:3, ease:"Power1.easeInOut", repeat:-1, yoyo:true
    }});
    tl.to(ferda, {y:"-=30", x:"+=20", rotation:"-=3"})
      .to(ferda, {y:"+=30", x:"-=20", rotation:"-=3"})
      .to(ferda, {y:"-=20", x:"+=30", rotation:"+=3"})
      .to(ferda, {y:"+=20", x:"-=30", rotation:"+=3"})
      .to(ferda, {y:"-=30", x:"+=20", rotation:"-=3"})
      .to(ferda, {y:"+=30", x:"-=20", rotation:"-=3"})
      .to(ferda, {y:"-=30"})
      .to(ferda, {y:"+=30"})
      .to(ferda, {y:"-=30"})
      .to(ferda, {y:"+=30"})
      return tl;
    }
    ferdaFloating()


// Na stisk tlačítka se vykoná akce - smrt nebo svoboda - Ferda umře a plave břichem vzhůru nebo odpluje z orazovky
let ferdaIsDead = () => {
  let all = gsap.exportRoot();
  gsap.to(all, {timeScale: 0});
  gsap.to(ferda, {rotateX: 180, duration: 1});
  gsap.to(".bubble", {opacity:0, duration: 2});
}

let ferdaIsFree = () => {
  let all = gsap.exportRoot();
  gsap.to(all, {timeScale: 0});
  gsap.to(ferda, {rotateY: 180});
  gsap.to(".bubble", {opacity:0, duration: 2});
  gsap.to(ferda, {x: 3000, duration: 20});
}

// let freeAfterDead = () => {
//   let all = gsap.exportRoot();
//   gsap.to(all, {timeScale: 0});
//   gsap.to(ferda, {rotateX: 180, duration: 1});
//   gsap.to(ferda, {rotateY: 180});
//   gsap.to(".bubble", {opacity:0, duration: 2});
//   gsap.to(ferda, {x: 3000, duration: 20});
// }

document.querySelector(".letDie").addEventListener("click", ferdaIsDead)
document.querySelector(".letLive").addEventListener("click", ferdaIsFree)

// document.querySelector(".letLive").addEventListener("click", () => {
//   if (ferdaIsDead === true) {return freeAfterDead}
//   else {return ferdaIsFree}
// })

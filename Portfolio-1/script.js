const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});


// function circleflattening() {
//   // define default scale value
//   var xscale = 1;
//   var yscale = 1;

//   var xprev = 0;
//   var yprev = 0;

//   window.addEventListener("mousemove", function (dets) {
//     clearTimeout(timeout);

//     xscale = gsap.utils.clamp(0.8, 1.2, dets.clientX - xprev);
//     yscale = gsap.utils.clamp(0.8, 1.2, dets.clientY - yprev);

//     xprev = dets.clientX;
//     yprev = dets.clientY;

//     circleMouseFollower(xscale, yscale);

//     timeout = setTimeout(function () {
//       document.querySelector(
//         "#minicircle"
//       ).style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(1, 1)`;
//     }, 100);
//   });
// }


function circleMouseFollower(xscale =1 , yscale =1 ) {
    window.addEventListener("mousemove", function (dets) {
      console.log(dets.clientX , dets.clientY);
      
    document.querySelector(
      "#minicircle"
    ).style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale}, ${yscale})`;
  });
}

// circleflattening();
circleMouseFollower();
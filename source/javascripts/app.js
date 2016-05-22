$(function(){

  function stickyScroll(container){
    var scroll = $(this).scrollTop();
    container.css('trans', scroll);
  }

  function parallaxBackground(background){
    var wHeight = $(window).height();
    var scroll = $(this).scrollTop();
    var speed = 250;
    var animate = scroll/speed;
    var blur = scroll/speed;

    if (scroll > 200){
      blur = 4;
    };

    background.css({
      'background-position-y' : '-' + animate + 'px',
      'filter'              : 'blur(' + blur + 'px)',
      '-webkit-filter'      : 'blur(' + blur + 'px)'
    });
  }



  // $(window).on('scroll', function(){
    
  //   parallaxBackground($('.work__background'));

  // });

  var header = document.querySelector(".site__header");
  var headroom  = new Headroom(header);
  headroom.init(); 


  $('work__photos img, .work__background--small').lazyLoadXT();

// Drawing


//   var w = $(window).width();
//   var h = $(window).height();

//   paper.install(window);

//   // setup
//   paper.setup('homeCanvas');

//   // var text = new PointText({
//   //   point:[w/2 - 300,h/2],
//   //   content: 'Pass me the Salt',
//   //   fillColor: 'black',
//   //   fontFamily: 'Courier New',
//   //   fontWeight: 'bold',
//   //   fontSize: 55
//   // });

//   var particles = [];
//   var destination = Point.random() * view.size;

//   function Cord(){
//       this.x = Math.random() * w;
//       this.y = Math.random() * h;
//   };


//   for (var i = 0; i< 1000; i++){
//     // var circle = new Path.Circle(new Point(550, 250), 11);
//     var cord = new Cord();
//     var circle = new Path.Circle({
//       center: [cord.x, cord.y],
//       radius: 5 * Math.random(),
//       fillColor: '#dddddd'
//     }); 

//     // particles.push(circle);
//     console.log(circle);

//   };
// console.log(particles);
// function onFrame(event) {
//   for (var i = 0; i< particles.length; i++){
//     var h = Math.random()* 2;
//     var w = Math.random()* 2;
//     particles[i].position.x += w;
//     particles[i].position.y += h;
//   }
// }

$(".type").typed({
  strings: ["Web Designer", "Front-end Developer", "UX Lover", "Geeky Gamer", "Scubar Diver", "...Chance To Build Sth Beatiful"],
  typeSpeed: 1,
  startDelay: 1000,
  backDelay: 1500,
  contentType: 'text'
});
// create set of random particles OK
// create set of position within text Need research
// Animate particle to text with index Need test

// Change text
// Move particle to new random location Need test
// Move particles to new set of text position  Need research

// circle.onMouseDrag = function(event) {
//   console.log(event);
//   circle.position = event.point;
// }

  // draw stuff
  // paper.view.draw();

  // console.log('done');


})
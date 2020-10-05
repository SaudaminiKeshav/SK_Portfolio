// var space;

// function floatySpace() {
//   var colors = [
//     "#FF3F8E", "#04C2C9", "#2E55C1"
//   ];


//   space = new CanvasSpace("canvas", "#252934" ).display();
//   var form = new Form( space );

//   // Elements
//   var pts = [];
//   var center = space.size.$divide(1.8);
//   var angle = -(window.innerWidth * 0.5);
//   var count = window.innerWidth * 0.05;
//   if (count > 150) count = 150;
//   var line = new Line(0, angle).to(space.size.x, 0);
//   var mouse = center.clone();

//   var r = Math.min(space.size.x, space.size.y) * 1;
//   for (var i=0; i<count; i++) {
//     var p = new Vector( Math.random()*r-Math.random()*r, Math.random()*r-Math.random()*r );
//     p.moveBy( center ).rotate2D( i*Math.PI/count, center);
//     p.brightness = 0.1
//     pts.push( p );
//   }

//   // Canvas
//   space.add({
//     animate: function(time, fps, context) {

//       for (var i=0; i<pts.length; i++) {
//         // rotate the points slowly
//         var pt = pts[i];

//         pt.rotate2D( Const.one_degree / 20, center);
//         form.stroke( false ).fill( colors[i % 3] ).point(pt, 1);

//         // get line from pt to the mouse line
//         var ln = new Line( pt ).to( line.getPerpendicularFromPoint(pt));

//         // opacity of line derived from distance to the line
//         var opacity = Math.min( 0.8, 1 - Math.abs( line.getDistanceFromPoint(pt)) / r);
//         var distFromMouse = Math.abs(ln.getDistanceFromPoint(mouse))

//         if (distFromMouse < 50) {
//           if (pts[i].brightness < 0.3) pts[i].brightness += 0.015
//         } else {
//           if (pts[i].brightness > 0.1) pts[i].brightness -= 0.01
//         }

//         var color = "rgba(255,255,255," + pts[i].brightness +")"
//         form.stroke(color).fill( true ).line(ln);
//       }
//     },

//     onMouseAction: function(type, x, y, evt) {
//       if (type=="move") {
//         mouse.set(x,y);
//       }
//     },

//     onTouchAction: function(type, x, y, evt) {
//       this.onMouseAction(type, x, y);
//     }
//   });

//   space.bindMouse();
//   space.play();
// }

// floatySpace();

// $(window).resize(function(){
//   space.removeAll();
//   $('canvas').remove();
//   floatySpace();
// });

//SLIDER
var speed = 400;

$(document).ready(function(){

});
                  
var parallax = $('#scene').parallax();

for (var i = 1; i < 6; i++) {
  twinkleLoop(i);
};

function twinkleLoop(i) {
  var duration = ((Math.random() * 5) + 3)

  duration = duration - ((495 - speed)/100)
  twinkle(i, duration)

  setTimeout(function() {
    twinkleLoop(i)
  }, duration * 1000);
}

function twinkle(id, duration) {
  var top = (Math.floor(Math.random() * 85) + 0) + '%';
  var left = (Math.floor(Math.random() * 85) + 0) + '%';

  $('#speck' + id).remove();
  $('#specks').append("<div class='speck' id='speck" + id + "'></div>")
  $('#speck' + id).css({
    'top': top,
    'left': left,
    'animation-duration': duration + 's',
    'animation-timing-function': 'cubic-bezier(0.250, 0.250, 0.750, 0.750)',
    'animation-name': 'twinkle',
  })
}
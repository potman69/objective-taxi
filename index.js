
var myTaxi = new Taxi();
var key = new KeyPress();


key.right(function(){
  var light = myTaxi.closestTrafficLight()
  if (light.is('green')){
    myTaxi.forward();
    displayMessage("Taxi moving very fast forward");
  }else {
    displayMessage("Taxi can only move on green light");
  }

})
key.left(function(){
  var light = myTaxi.closestTrafficLight();
  if (light.is('green')){
    myTaxi.reverse();
    displayMessage("Taxi moving very fast Backwards");
  }else {
    displayMessage("Taxi can only move on green light");
  }

})
key.up(function(){
  var light = myTaxi.closestTrafficLight()
  if (light.is('green')){
    light.makeOrange();
  }else if (light.is('orange')){
    light.makeRed();
  }else (
    light.makeGreen()
  )

})
key.down(function(){
  var light = myTaxi.closestTrafficLight()
  if (light.is('green')){
    light.makeRed();
  }else if (light.is('red')){
    light.makeOrange();
  }else (
    light.makeGreen()
  )

})

ymaps.ready(init);
function init(){ 
  var myMap = new ymaps.Map("map", {
    center: [53.914245, 27.667680],
    zoom: 17
  });

  var myPlacemark = new ymaps.Placemark([53.914245, 27.667680]);
  myMap.geoObjects.add(myPlacemark);
  myMap.behaviors.disable('scrollZoom');
}

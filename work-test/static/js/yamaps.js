ymaps.ready(init);

function init(){ 
	var myMap = new ymaps.Map("map", {
		center: [45.031203, 39.057114],
		zoom: 15
	}); 

	var myPlacemark = new ymaps.Placemark([45.031203, 39.057114], {
		hintContent: 'Содержимое всплывающей подсказки',
		balloonContent: 'Содержимое балуна'
	});

	myMap.geoObjects.add(myPlacemark);
}
// pierwsza elegancka

var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.';
var dinosaur = 'triceratops';
var dinosaurUpperCased = dinosaur.toUpperCase();
console.log(dinosaurUpperCased);
	
var textchange = text.replace('Velociraptor', 'Dinosaur');
console.log(textchange);
	
console.log(dinosaurUpperCased + text.substr(12, text.length/2));

//druga wersja jak przykazano w tutorialu

var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.';
var dinosaur = 'triceratops';
var dinosaurUpperCased = dinosaur.toUpperCase();

console.log(dinosaurUpperCased);

var textchange = text.replace('Velociraptor', 'Dinosaur');

console.log(textchange);

var textchange2 = textchange.replace('Dinosaur', dinosaurUpperCased);

console.log(textchange2.substr(0, textchange2.length/2));
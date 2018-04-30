
var Grub = function() {
	this.age = 0;
	this.color ='pink';
	this.food = 'jelly';

};

Grub.prototype.eat =function(){

};

var Bee = function() {
	
	
	Grub.call(this, this.food);
	this.age = 5;
	this.color= 'yellow'
	this.job = 'keep on growing'
};


Bee.prototype = Object.create(Grub.prototype);

Bee.prototype.constructor= Bee;


var HoneyMakerBee = function() {

	Bee.call(this, this.color);
	this.age = 10;
	this.job = 'make honey'
	this.honeyPot = 0;
	

};

HoneyMakerBee.prototype = Object.create(Grub.prototype);

HoneyMakerBee.prototype.constructor = HoneyMakerBee;


HoneyMakerBee.prototype.makeHoney = function() {
	return this.honeyPot++;
}

HoneyMakerBee.prototype.giveHoney = function () {
	return this.honeyPot--;
}




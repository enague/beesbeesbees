

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


var ForagerBee = function() {

	HoneyMakerBee.call(this,this.age)
	this.job = 'find pollen';
	this.canFly = true;
	this.treasureChest= [];


};


ForagerBee.prototype = Object.create(Grub.prototype);

ForagerBee.prototype.constructor = ForagerBee;

ForagerBee.prototype.forage = function(value){
	this.treasureChest.push(value);
}


var RetiredForagerBee = function() {

	Grub.call(this, this.food)
	ForagerBee.call(this, this.treasureChest)
	this.age= 40;
	this.job = 'gamble';
	this.canFly= false;
	this.color = 'grey'
};

RetiredForagerBee.prototype = Object.create(Grub.prototype);

RetiredForagerBee.prototype.constructor = RetiredForagerBee;

RetiredForagerBee.prototype.forage = function(){
	return 'I am too old, let me play cards instead';
}

RetiredForagerBee.prototype.gamble = function(treasure) {
	this.treasureChest.push(treasure);
}


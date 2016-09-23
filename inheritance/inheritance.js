var Rectangle = function(length, width) {
	this.length = length;
	this.width = width;
}

Rectangle.prototype.getArea = function() {
	return this.length * this.width;
}

Rectangle.prototype.toString = function() {
	return "Rectangle: length = " + this.length + " , width = " + this.width;
}


var Square = function(size) {
	Rectangle.call(this,size,size);
}

Square.prototype = Object.create(Rectangle.prototype, {
	constructor: {
		enumerable: true,
		configurable: true,
		value: "Square",
		writable: true,
	}
});

Square.prototype.toString = function() {
	return "Square: length = " + this.length + " , width = " + this.width;
}

var rect = new Rectangle(3,4);
console.log("Area = " + rect.getArea());
console.log(rect.toString());

var sqr = new Square(4,4);
console.log("Area = " + sqr.getArea());
console.log(sqr.toString());
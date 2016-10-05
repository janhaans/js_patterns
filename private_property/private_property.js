//Immediately Invoked Function that returns constructor "InnerPerson" 
var Person = (function() {
	/* "country" is local variable that cannot be accessed outside the Immediately Invoked Function 
	   "country" is private static property */
	var country = "The Netherlands";

	var InnerPerson = function(name, age) {
		/* "age" is local variable that cannot be accessed outside the "InnerPerson" function (=constructor)
		   "age" is private instance property */		
		var age = age;
		// "name" is public instance property
		this.name = name;

		//"getAge" must be instance method to have access to local variable "age"
		this.getAge = function() {
			return age;
		}

		//"setAge" must be instance method to have access to local variable "age"
		this.setAge = function(anage) {
			age = anage;
		}
	}

	//"setName" is prototype method that has access to instance property "name" via variable "this"
	InnerPerson.prototype.setName = function(aname) {
		this.name = aname;
	}

	//"getCountry" is prototype method and has access to local variable "country"
	InnerPerson.prototype.getCountry = function() {
		return country;
	}

	/* "setCountry" is constructor method and has access to local variable "country" 
	   "setCountry" is public static method */
	InnerPerson.setCountry = function(acountry) {
		country = acountry;
	}

	return InnerPerson;
}());

var person1 = new Person("John", 10),
    person2 = new Person("Emma", 8);

console.log(person1.name + " is " + person1.getAge() + " years old and lives in : " + person1.getCountry());
console.log(person2.name + " is " + person2.getAge() + " years old and lives in : " + person2.getCountry());

Person.setCountry ("USA");
person1.setAge(20);
person1.setName("John the Man");
person2.setAge(18);
person2.setName("Emma the Wife");


console.log(person1.name + " is " + person1.getAge() + " years old and lives in : " + person1.getCountry());
console.log(person2.name + " is " + person2.getAge() + " years old and lives in : " + person2.getCountry());
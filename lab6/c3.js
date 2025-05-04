function Animal(name, speed) {
    this.name = name;
    this.speed = speed || 0;
}

Animal.prototype.run = function(increase) {
    this.speed += increase;
};

Animal.compareBySpeed = function(a1, a2) {
    return a1.speed - a2.speed;
};

function Rabbit(name, speed) {
    Animal.call(this, name, speed);
}

Rabbit.prototype = Object.create(Animal.prototype);
Rabbit.prototype.constructor = Rabbit;


Rabbit.prototype.hide = function() {
    console.log(this.name + " hides");
};

const rabbit1 = new Rabbit("Bugs", 5);
const rabbit2 = new Rabbit("Lola", 3);

rabbit1.run(2);
rabbit2.run(1);
rabbit1.hide(); // "Bugs hides"
rabbit2.hide(); // "Lola hides"

console.log(Animal.compareBySpeed(rabbit1, rabbit2)); // 3 (5+2 vs 3+1)
var create = function(parent) {
    var T = function() {};
    T.prototype = parent;
    return new T();
}

var newInstance = function(T, arguments) {
    var that = create(T.prototype);
    var res = T.apply(that, arguments);
    return res ? res : that;
}

var Phone = function(model, vendor) {
    this.model = model;
    this.vendor = vendor;
}
Phone.prototype.print = function() {
    console.log(this);
}
Phone.prototype.prettyPrint = function() {
    console.log(this.vendor + " " + this.model);
}
var p1 = new Phone('3350', 'Nokia');
var p2 = new Phone('Razor', 'Motorola');

p1.print();
p2.print();

var SmartPhone = function(model, vendor, os) {
    Phone.call(this, model, vendor);
    this.os = os;
}

SmartPhone.prototype = create(Phone.prototype); //Object.create(Phone.prototype); //new Phone();

var p3 = new SmartPhone('iPhone 6', 'Apple', 'iOS8');

p3.print();

SmartPhone.prototype.prettyPrint = function() {
    console.log(this.vendor + " " + this.model + 
            " running " + this.os);
}

p1.prettyPrint();
p2.prettyPrint();
p3.prettyPrint();



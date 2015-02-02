var Phone = function(model, vendor) {
    this.model = model;
    this.vendor = vendor;
}
Phone.prototype.print = function() {
    console.log(this);
}
var p1 = new Phone('3350', 'Nokia');
var p2 = new Phone('iPhone 6+', 'Apple');

p1.print();
p2.print();


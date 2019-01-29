/*
console.log("..............................object Create.......................");
var student = {

firstName : 'a',
lastName   : 'b'

};
console.log(student);

console.log("..............................function constructor.......................");
Stud = function (name)
{
    this.firstname = 'snehal';
   
    
}
console.log("..............................Prototype property.......................");
Stud.prototype.calAge = function()
{
    console.log("bye");
}
 var s1 = new Stud('retu');
s1.calAge();
console.log(s1);

s2 = Object.create(student);
console.log(s2);




*/
console.log(".....................................................");


var Fun = (function()
{
    var name= ' ridhima';
    function Fun () 
    {
        
    }
    Fun.prototype.setPrivate = function()
    {
        return name;
    }
    Fun.prototype.getPrivate = function(value)
    {
        name = value;
    }
    return Fun;
    //console.log(name);
})();

var a = new Fun();
console.log(a.setPrivate());
a.getPrivate= 'snehal';
console.log(a.setPrivate());






/*








var Sequence = (function sequenceIIFE() {
    
    // Private variable to store current counter value.
    var current = 0;
    
    // Object that's returned from the IIFE.
    return {
        getCurrentValue: function() {
            return current;
        },
        
        getNextValue: function() {
            current = current + 1;
            return current;
        }
    };
    
}());

console.log(Sequence.getNextValue()); // 1
console.log(Sequence.getNextValue()); // 2
console.log(Sequence.getCurrentValue()); // 2



*/
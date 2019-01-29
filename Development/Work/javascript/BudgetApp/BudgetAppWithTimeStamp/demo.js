var student = {

firstName : 'a',
lastName   : 'b'

};
console.log(student);


Stud = function (name)
{
    this.firstname = 'snehal';
   
    
}
Stud.prototype.calAge = function()
{
    console.log("bye");
}
 var s1 = new Stud('retu');
s1.calAge();
console.log(s1);

s2 = Object.create(student);
console.log(s2);


(function()
{
    var name= ' ridhima';
    console.log(name);
})();

var abc = function(name)
{
    return name;
}

console.log(abc(function()
   {
    return 'morning';
}));


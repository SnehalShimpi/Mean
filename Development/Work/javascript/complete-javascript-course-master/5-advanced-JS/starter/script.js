//function 
////inheritance using Prototype method
/*
var student = {
     firstName : 'snehal',
    lastName : 'shimpi',
    dateOfBirth : 1996,
    address : 'pune' 
};

var Stud = function(firstName, lastName ,dateOFBirth,address )
{
    this.firstName = firstName;
    this.lastName = lastName;
    this.dateOfBirthbirth =dateOFBirth;
    this.addressd= address;
    
}
Stud.prototype.calAge = function()
    {
        console.log(2018 - this.dateOfBirthbirth);
    }

Stud.prototype.job = 'developer';

var s1= new Stud('ankita','joshi',1996,'pune');
var s2= new Stud('amita','joshi',1945,'pune');
var s3= new Stud('anuj','joshi',1969,'pune');


console.log(s1);
console.log(s2);

console.log(s3);

s1.calAge();
s2.calAge();



console.log(s1.job);
console.log(s2.job);
console.log(s3.job);
console.log(Stud);


// Inheritance using object create method

var personProto = {
   calAge : function()
    {
        console.log('hey');
    }
};

var john = Object.create(personProto);
john.name='richie';
john.job='developer';
john.add='une';
 
var jane =Object.create(personProto);
jane.name='devil';


var a=12;
var b=a;
a= 20;
console.log(a,b);

var obj1 = { firstname : 'snehal',
             age : 20 
           };
var obj2 = obj1;
obj1.age = 35 ;
console.log(obj1.age);
console.log(obj2.age);

// function
var age=27;

var ob ={ lastname :'shimpi'};

function abc(a,b)
{
    a=115;
    b.lastname= 'kurne';
}
abc(age,ob);
console.log(age);
console.log(ob.lastname);



//function as parameter
var arr=[1996,1998,1997,1995,1984];
function calAge(fun,gun)
{
    var arrp = [];
    for(var i=0;i<fun.length;i++)
        {
      arrp.push(gun(fun[i]));
}
    return arrp;
}

function run(age)
{
    return 2018 - age; }

var ans = calAge(arr,run);
console.log(ans);

function interviewQuetion(job)
{
    if(job === 'teacher')
        {
            return function(name)
            {
                console.log("Which subject do you teach "+ name);
            }
        }
    else if(job === 'developer')
        {
            return function(name)
            {
                console.log("On which technology do you working on "+ name);
            }
        }
    else
        {
            return function(name)
            {
                console.log("hello "+ name + " what we can do for you");
            }
        }
}


var que = interviewQuetion('developer');
que('snehal ')
que('minal');
que('dhwani');
que('mark');
que('suraj');
que('raju');


//IFII pattern
// Everything in paranthesis treated like expression in java script not a statement it is use for privacy of variable or data
function demo()
{
    var c;
    c = 15 - 89;
    console.log(c < 0);
}
demo();

( function (b)
{
    var c;
    c = b - 89;
    console.log(c < 0);
}
)(1586);



//clousure

function maths()
{
    var a,b,c;
    a=10,b=30;
    c = a + b ;
    console.log(c);
    return function ()
    
    {
        c = a - b;
        console.log(c);
    }
}

var x = maths();
x();


//bind call

var john = {
    firstName : 'john',
    lastname  : 'smith',
    job       : 'teacher',
    presentation : function(style,day)
    {
    if(style == 'formal')
{
    console.log(' good '+ day +' hello ' + this.firstName +' are you ' + this.job + ' right ? ');
}
else{
    console.log(' good '+ day +' hey whats up dude !!! ' + this.firstName +' are you ' + this.job + ' right ?');
}
}
}
var ema =
{
  firstName : 'Ema',
  lastname  : 'Watson',
  job       : 'Actor',  
};


var  jack = {
    
  firstName : 'Jack',
  lastname  : 'Ritchie',
  job       : 'Doctor', 
  Adreess   : 'pune',
    
};

john.presentation('developer','afternoon');
    john.presentation.call(ema,'Actor','Morning');
john.presentation.call(jack,'Doctor','Evening');

var john1 = john.presentation.bind(john,'formal');
john1('afternoon');

var ema1 = john.presentation.bind(ema,'friendly');
ema1('afternoon');



function que(Que,Ans,core)   
{
      this.Que = Que,
      this.Ans =  Ans , 
    this.core  = core
      
};
que.prototype.DisplayAns = function(ans)
{
    if(ans === this.Ans)
        {
            console.log("Wow !!!!!! :) Answer is Correct");
        }
    else
    {
          console.log("Answer is Wrong.. :( Please try again later");    
    }
    
}


que.prototype.displayQue = function() 
{   
console.log(this.Que);
    
    for(var i=0 ;i< this.Ans.length; i++)
    {
      console.log(this.Ans[i]);
    }
}

var q1 = new que('JavaScipt is high programming language',['yes','no'],0);
var q2 = new que('JavaSript is Scripting Language',['No','Yes'],0);
var q3 = new que('Who is Teacher of javascript',['jane','john','mike'],2);

var Quetions = [q1,q2,q3];

var n = Math.floor(Math.random()*Quetions.length);

Quetions[n].displayQue();

var ans = prompt("Enter The Correct Answer"); 
console.log(ans);
Quetions[n].DisplayAns(ans);
*/

function fun(abc)
{
    return abc + "Hello World";
}
var ans = fun("good morning ");
console.log(ans);














function que(Que,Ans,core)   
{
      this.Que = Que,
      this.Ans =  Ans , 
    this.core  = core
      
};
que.prototype.DisplayAns = function(ans)
{
    if(ans === this.Ans)
        {
            console.log("Wow !!!!!! :) Answer is Correct");
        }
    else
    {
          console.log("Answer is Wrong.. :( Please try again later");    
    }
    
}


que.prototype.displayQue = function() 
{   
console.log(this.Que);
    
    for(var i=0 ;i< this.Ans.length; i++)
    {
      console.log(this.Ans[i]);
    }
}

var q1 = new que('JavaScipt is high programming language',['yes','no'],0);
var q2 = new que('JavaSript is Scripting Language',['No','Yes'],0);
var q3 = new que('Who is Teacher of javascript',['jane','john','mike'],2);

var Quetions = [q1,q2,q3];

var n = Math.floor(Math.random()*Quetions.length);

Quetions[n].displayQue();

var ans = prompt("Enter The Correct Answer"); 
console.log(ans);
Quetions[n].DisplayAns(ans);




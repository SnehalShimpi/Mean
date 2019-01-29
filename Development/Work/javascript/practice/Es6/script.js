/*
//Es5
var name = 'snehal';
var age = 35;
name = 'nilam';
console.log(name);

//Es6

const name1 = 'revati';
var age = 28 ;
//name1 = 'anuja';
let M1 = 'shimpi';
console.log(name1);
console.log(M1);

//Es5
function abc()
{ 
    var passlist = true;
    if(passlist)
        {
            console.log("Hello......");
        }
}
abc();

//Es6

function abc(passlist)
{ 
   
    if(passlist)
        {
             var passlist1 = 'snehal';
            
        }
        console.log("Hello......" + passlist1);
}
abc(true);

//String ES5

let N1 = 'jfkh';
let N2 = 'hjsgfd';

function Calyear(year)
{
    return 2018 - year;
}

console.log(N1 + " "+ N2 +" " +Calyear(1990));

//Es6

console.log(`this is ${N1} ${N2} And the current year is ${Calyear(1996)}`);

const n = `${N1} ${N2}`;
console.log(n.startsWith('j')); 
console.log(n.endsWith('d'));
console.log(n.includes('z'));
console.log(n.repeat(5));

//arrow Function use

//Es5

const arr = [1996,1990,1960,1995];
var abc = arr.map(function calAge(el)
                 {
            return 2018 - el;    
});
console.log(abc);

//Es6

var ab1 = arr.map(el => 2019-el);
console.log(ab1);

var ab2 = arr.map((el ,index) => `this is index ${index + 1} this is age ${2020 - el}`);
console.log(ab2);

//if we write more line of code then it uses {} brackets and return keywrod at the end.

var ab3 = arr.map((el,index) =>
                 {
                  const now = new Date().getFullYear();
                  const age5= now - el;
                 return `age is ${age5}`;
                  });
console.log(ab3);

var box = {
    Fname : 'amit',
    Lname : 'shinde',
    Fun  : function()
    {
        var Acc= this.Fname;
        var Accc= this.Lname;
        document.querySelector('.green').addEventListener('click',function()
                                                          {
            
        
              var str = 'this is a firstName' + Acc +'this is a last Name'+ Accc;                                   
            alert("yeahhhhh its Working" + str);
        });
    }
};

box.Fun();

//Es6

var box6 = {
    Fname : 'amit',
    Lname : 'shinde',
    Fun  : function()
    {
       
        document.querySelector('.green').addEventListener('click',() =>
                                                          {
            
        
              var str = 'this is a firstName' + this.Fname +'this is a last Name'+ this.Lname;                                   
            alert("yeahhhhh its Working" + str);
        });
    }
};

box6.Fun();

//Destrucring

//Es5

var brr = ['ajay',25];
var name = brr[0];
var age = brr[1];
console.log(name + ' '+ age );

//Es6

const [name6,age1] = ['kshitij' , 22 ];
console.log(name6);
console.log(age1);

var obj9 = {
    Nav  : 'amkita',
    AadNav : 'junavne'
};
console.log(obj9.Nav + ' ' +obj9.AadNav);

const{Nav , AadNav } = obj9;
console.log(Nav);
console.log(AadNav);

const{Nav: c, AadNav : d } = obj9;
console.log(c);
console.log(d);

//spread operator



function addForAges(a,b,c,d,e)
{
    return a+b+c+d+e;
}

var sum1 = addForAges(11,21,51,101,111);
console.log(sum1);

var ages = [10,11,12,13,15];

var sum2 = addForAges.apply(null,ages);
console.log(sum2);


//Es6

var sum3 = addForAges(...ages);
console.log(sum3);

//we can add two array into one array using spread operator

const sum4 = [...arr ,...brr];
console.log(sum4);

function gun()
{
    console.log(arguments);
}
gun(11,21,51,101,121);  


// Rest Parameter

//Es5
function Sun()
{
    //console.log(arguments);
    var arrvar = Array.prototype.slice.call(arguments);
    arrvar.forEach(function(cur)
                  {
        console.log((2018 - cur)>18);
        
    });
                                         
        
    
}
Sun(1000,1996,2005);

//in above code arguments is work like a this keyword.


//Es6
/* here arugument converted into an array. this function is exact same as above function only we use rest parameter which help to become code shorter and easy to read.

function sun (...year)
{
    console.log(year);
}
sun(5000,9000,5000);


function sun (...year)
{   
    year.forEach(function(cur)
                {
        console.log((2018 - cur)>18);
        });
    
}
sun(5000,9000,5000);


//MAP
// map it is topic of ES6 it is nothing but a data structure

const quetion = new Map();
quetion.set('quetion','what is your Job profile');
quetion.set(1,'Es5');
quetion.set(2,'Es6');
quetion.set(3,'Es2015');
quetion.set('correct',3);
quetion.set(true,'Answer is correct');
quetion.set(false,'Wrong Answer Please try again');

console.log(quetion.size);
console.log(quetion);
console.log(quetion.get('quetion'));

quetion.delete(2);

quetion.forEach((value , key) =>
 console.log(`this is key ${key}, it is value ${value}`));    

//using for of method
console.log('--------------------------------------------------------------------------');
for(let [key,value] of quetion.entries())
    {
        if(typeof(key)=== 'number')
            { 
              console.log(` ${key},  ${value}`);    
            }
          
    }   
const ans = parseInt(prompt("Enter your Answer here"));

console.log(quetion.get(ans === quetion.get('correct')));



///////////////////////////////////////////////////////////////////////////////////////////////

//Classes

//Es5 

var Person5 = function(name,yearOfBirth,job)
{
    this.name =name;
    this.yearOfBirth = yearOfBirth;
    this.job =job;
}
Person5.prototype.getAge = function()
{
    
    console.log("oooooo oooooo");
}

var athlic = function(name,yearOfBirth,job,run,add)
{
    Person5.call(this,name,yearOfBirth,job);
    this.run = run;
    this.add = add;
}
athlic.prototype = Object.create(Person5.prototype);

var joz = new Person5('emma',1996,'developer');
var jozef = new athlic('bfdh',56,'hjf',25,'hf');
console.log(jozef);
//athlic.getAge();
joz.getAge();
jozef.getAge();

//Es6

class Demo
{
    constructor(name,Year)
    {
        this.name = name;
        this.Year = Year;
    }

    CalAge ()
    {
        console.log(2018 - this.Year);
    }
}

class Demo1 extends Demo
{
    constructor(name,year,Add)
    {
        super(name,year);
        this.Add = Add;
    }
    Fun()
    {
        console.log("Good Afternoon");
    }
}

var ob = new Demo('snehal',1996);
const ob1 = new Demo('dkgshg',1950);

var obj = new Demo1('amita',1995,'pune');
obj.Fun();
obj.CalAge();

*/

class Park
{
     
    constructor( )
    {
        this.GreenAge = 0;
        this.GreyAge =0;
        this.RedAge =0;
        this.Avg = 0;
        this.Dencity = 0;
        this.MoreTree = 0;
    }

    greenPark(name,year,NoOfTree,Area)
    {
       this.GreenAge = (2018-year);
        //console.log(this.GreenAge);

        this.Dencity = NoOfTree / Area;
        console.log( `Dencity of GreenPark is ${this.Dencity}`);
        if(NoOfTree > 1000)
        {
            this.MoreTree = "GreenPark";
        }
       
        

    }
    redPark(name,year,NoOfTree,Area)
    {
        this.RedAge = (2018-year);
       // console.log(this.RedAge);
        this.Dencity = NoOfTree / Area;
        console.log(`Dencity of RedPark is ${this.Dencity}`);
        if(NoOfTree > 1000)
        {
            this.MoreTree = "RedPark";
        }
       

        
        
    }
    greyPark(name,year,NoOfTree,Area)
    {
       this.GreyAge = (2018-year);
        //console.log(this.GreenAge);
        this.Dencity = NoOfTree / Area;
        console.log(`Density of GreyPark is ${this.Dencity}`);
        if(NoOfTree > 1000)
        {
            this.MoreTree = "GreyPark";
        } 
        
    }
    
    calAges()
    {
    
     console.log('our Average ahe is ' + (this.GreenAge + this.RedAge + this.GreyAge)/3 );
     if(this.MoreTree === 0)
     {
         console.log("no park has more than 1000 trees");
     }
     else
     {
     console.log(`${this.MoreTree} has More Tree`);
     }
   
    
}
}


var ob = new Park();
console.log("----Park Report----");
ob.greenPark('green',1990,800,5000);
ob.redPark('red',1885,5200,2000);
ob.greyPark('grey',1830,200,3000);
ob.calAges();

class Street
{ 
    constructor()
    {
        this.size = 0 ;
        this.total = 0;
        this.avg = 0 ;
        this.ParkLength = 0;
        this.RiverLength = 0;
        this.Avenue = 0 ;
        this.Camp = 0;
    }
    
    ParkStreet(size,length,year)
    {
        this.ParkLength = length;
        console.log(`ParkStreet it is build in ${year} & its  Size is ${size} Size`);

    }

    RiverStreet(size,length,year)
    {
      this.RiverLength = length; 
      console.log(`RiverStreet it is build in ${year} & its  Size is ${size} size`);
    }

    AvenueStreet(size,length,year)
    {
        this.Avenue = length;
      console.log(`AvenueStreet it is build in ${year} & its  Size is ${size} size`);
    }

    CampStreet(size,length,year)
    {
        this.Camp = length;
      console.log(`CampStreet it is build in ${year} & its size is ${size} size`);
    }

    CalLength()
    {
      this.total = this.ParkLength + this.RiverLength + this.Avenue + this.Camp;
      this.avg = this.total / 4;
      console.log(`The total length of our 4 Street is ${this.total} with an average is ${this.avg}`);
    }
    

}

console.log("----Street Report ----");
var obj = new Street();
obj.ParkStreet('tiny',56562,1963); 
obj.RiverStreet('big',56454,1830);
obj.AvenueStreet('huge',5656,2001);
obj.CampStreet('normal',656465,1997);
obj.CalLength();

/* var firstname='john';
console.log(firstname);

var age = 28;
console.log(age);

var fullage = true;
console.log(fullage);

console.log(firstname + " is a " + age + " year old ");
alert(firstname + " is a " + age + " year old ");

var lastname = prompt("what is your last name ?");
console.log(firstname + " " + lastname);


var year,lastYear,futureYear;
year=2020;
lastYear= year-18;
futureYear=year + 5;
console.log(typeof year);
console.log(typeof firstname);
console.log(typeof fullage);
console.log(typeof no);

var no = age > year;
console.log(no);

var no1= 15;
var no2= 25;
 var avg= (no1 + no2 )/ 2;
console.log(avg);

var jon = 120;
var height= prompt("Enter Your Height ?");

var weight= prompt("Enter Your Wight");
 
var BMI= weight / height;

console.log(BMI);
var bool =  jon > BMI;
console.log(bool);



var no = 15;
var no1 = 20;
if(no === no1)
    {
        console.log("numbers are equals");
    }
else{
    console.log("numbers are not euqals");
}

var status= true;
if(status)
    {
        console.log("It has Active Status");
    }
else{
    console.log("It does not have Active Status");
}

var age=18
age >= 13 ? console.log("john drinks juice ") : console.log("john drinks bear");

//if else

var JTeam1,JTeam2,JTeam3 ,MTeam1 , MTeam2, MTeam3 ,avg1,avg2;
JTeam1 = 1189;
JTeam2 = 120;
JTeam3 = 103;

MTeam1 = 116;
MTeam2 = 94;
MTeam3 = 123;

Ma1=97;
Ma2=134;
Ma3=105;

avg1= (JTeam1+JTeam2+JTeam3)/3;
avg2= (MTeam1+MTeam2+MTeam3)/3;
avg3=(Ma1+Ma2+Ma3)/3;

if(avg1 > avg2 && avg1 > avg3)
    {
        console.log("John Team Get Win And Score is "+ avg1);
    }
else if(avg2 > avg1 && avg2 > avg3)
    {
        console.log("Mike Team Get Win And Score is "+ avg2);
    }
else{
    
    console.log("Mary Team Get Win And Score is "+ avg3);
}


//Functions

var ab = function(job,firstname)
{
    switch(job)
    {
        case 'teacher' :
        return firstname + 'teachers teach how to learn';
        
        case 'driver' :
        return firstname + 'driver pick up the customer';
        
        case 'designer' :
        return firstname + 'designer develop the website';
        
    
    }
    
}
console.log(ab('teacher','snehal'));
console.log(ab('driver','snehal'));
console.log(ab('designer','snehal'));


//Arrays

var years= new Array(11,21,51);
var names =['snehal','suchita','neha'];

console.log(names[1]);
console.log(years[1]);
console.log(names);
console.log(names.length)
names[1]='achyut';
console.log(names);


var arr = ['abc','pqr','xyz',1993];
console.log(arr);

arr.push('snehal');
console.log(arr);

//example

var bil=[124,48,268];
function cal(no)
{
if(no > 50)
    {
        console.log(no*(20/100));
    
    }
if(no >20 && no<200 )
    {
        console.log(no*(50/100))
        
        
   }
}
cal(bil[0]);
cal(bil[1]);
cal(bil[2]);

var  abc= {firstname :'john',
       lastname :'bill',
           arr:[1,2,3,4],
      } ;
console.log(abc);
var x = 'firstname';
console.log(abc[x]);
console.log(abc.firstname);
console.log(abc.lastname);

abc.firstname = 'snehal';
console.log(abc.firstname);       
console.log(abc);

var pqr = new Object();
pqr.firstname = 'ankita';
pqr.lastname = 'joshi';
console.log(pqr);
console.log(abc);


var  abc= {firstname :'john',
       lastname :'bill',
           arr:[1,2,3,4],
           birthYear : 1996,
           calAge: function()
           {
           this.age = 2018 - this.birthYear;
          }
      };
  abc.calAge();
console.log(abc);

var jon = { fullname : 'john abc',
             mass:92,
           height:1.93,
          calBMI : function()
           {
            this.bmi=this.mass / (this.height * this.height)
               return this.bmi;
          }
          }

var mark = { fullname : 'mark pqr',
             mass:89,
           height:1.63,
          calBMI : function()
           {
            this.bmi=this.mass / (this.height * this.height)
               return this.bmi;
          }
          }
jon.calBMI();
mark.calBMI();
console.log(jon,mark);

if(jon.bmi > mark.bmi)
    {
        console.log(jon.fullname + 'has higher BMI than mark');
        
    }
else if(mark.bmi > jon.bmi)
    {
        console.log(mark.fullname + 'has higher BMI than jon');
    }
else
    {
        console.log("has same BMI");
    }
    
    

var i=0;
for(i=0;i<10;i++)
    {
        console.log(i);
    }

var jon = ['snehal','ankita','neha'];
for(i=0;i<jon.length;i++)
    {
        console.log(jon[i]);
    }
i=10;
while(i<50)
    {
        console.log(i);
        i++;
    }


var jon = ['snehal','ankita',11,21,51,'neha'];
for(i=0;i<jon.length;i++)
    {
        if(typeof jon[i] !== 'string') continue;
        console.log(jon[i]);
    }

for(i=0;i<jon.length;i++)
    {
        if(typeof jon[i] !== 'string') break;
        console.log(jon[i]);
    }
    
var john = { fullName :'jon smith',
            bills :[124,48,268,180,42],
            calTip :function()
            {
                this.tips = [];
                this.finalValue = [];
                for(var i=0; i <this.bills.length ; i++)
                    {
                        var persentage;
                        if(this.bills[i] < 50)
                            {
                                persentage =.2;
                            }
                                else if(this.bills[i]>=50 && this.bills[i]<200)
                                {
                                    persentage = .15;
                                }
                        else
                            {
                                persentage = .1;
                            }
                        this.tips[i]=this.bills[i] * persentage;
                        this.finalValue[i]=this.bills[i] + this.bills[i] * persentage;
                    }

            }
            
            }

var mark = { fullName :'mark bell',
            bills :[77,475,110,45],
            calTip :function()
            {
                this.tips = [];
                this.finalValue = [];
                for(var i=0; i <this.bills.length ; i++)
                    {
                        var persentage;
                        if(this.bills[i] < 100)
                            {
                                persentage =.2;
                            }
                                else if(this.bills[i]>=100 && this.bills[i]<300)
                                {
                                    persentage = .1;
                                }
                        else
                            {
                                persentage = .25;
                            }
                        this.tips[i]=this.bills[i] * persentage;
                        this.finalValue[i]=this.bills[i] + this.bills[i] * persentage;
                    }

            }
            
            }

function avg(tips)
{
    var sum = 0;
    for(var i=0;i<tips.length;i++)
        {
            sum = sum + tips[i];
        }
    return sum/tips.length;
}

john.calTip();
mark.calTip();
console.log(john);
console.log(mark);
 
john.average = avg(john.tips);
mark.average = avg(mark.tips);
console.log(john,mark);

if(john.average > mark.average)
    {
        console.log(john.fullName + ': Average of john is greater than mark');
    }
else if (mark.average > john.average)
    {
        console.log(mark.fullName + ': Average of mark is greater than john');
    }
else
    {
        console.log('Both the Average are same');
    }


var Student = {
    firstName : 'Kartiki' ,
    lastname : 'Shinde' ,
    mark:[89,56,75,96,45],
    mathsCal:function()
    {
    this.add=[];
    this.sub = [];
    
        for( var i=0;i<this.mark.length;i++)
            {
                var sum=0;
                sum = sum + this.mark[i];
                
            }
        this.add[0]=sum;
        
        for( i=0;i<this.mark.length;i++)
            {
                var subt=0;
                subt = subt - this.mark[i];
                
            }
        this.sub[0]=subt;
        
    }
}
Student.mathsCal();
console.log(Student);



//function declaration and function expression
add();

function add()
{
    var ans = 10+15;
    console.log('Addition is :'+ ans);
    
}
add();

var abc = function sub()
{
    var ans= 25 -5 ;
    console.log("Subtraction is :" + ans);
}
abc();



//Variable scope 
var a=10;
console.log(a);
function hello()
{
    var b=11,c=65;
    console.log(b,c,a);
    abc();
    function abc()
    {
        var f=35;
        console.log(f,a,b,c);
    } 
}

hello();

*/

    
function hello()
{
    console.log(this);
}
hello();

var demo = {
firstName : 'snehal',
lastName : 'shimpi',
    fun : function()
{
    console.log(this);
    console.log(demo);
}
    
};
demo.fun();
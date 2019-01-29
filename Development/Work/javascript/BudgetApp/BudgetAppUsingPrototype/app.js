        
//BudgetController

var BudgetController =(function()
{
    function BudgetController()
    {
        
    }
    
    //Expence it is also function constructor
    
    var Expence = function(id,description,value)
    {
        this.id = id;
        this.description = description;
        this.value = value;
        this.per = -1;
        
    };
    
    Expence.prototype.calculatePersentage = function(totalIncome)
    {
        if(totalIncome > 0)
        {  
        this.per=Math.round((this.value / totalIncome)*100); 
        }
        else
        {
        this.per = -1;
        }
    };
    
    Expence.prototype.returnPer = function()
    {
        return this.per;
    };
    
   //income it is function constructor
    
    var Income = function(id,description,value)
    {
        this.id = id;
        this.description = description;
        this.value = value;
        
    };
    
     var calculateTotal = function(type)
    {
        var sum=0;
        data.allitem[type].forEach(function(cur)
       {
            sum += cur.value;
        });
        data.total[type] = sum;
    }
    
     //data it is datastucture of element which conatain all the object of newly enter element
    var data = {
        allitem : {
            exp : [],
            inc : []
        },
          total : {
            exp : 0,
            inc : 0
        },
        budget : 0,
        persentage : -1
        }; 
    
        BudgetController.prototype.AddItem = function(type,des,val)
        {
            var newItem , ID;
            
             
            // unique id ty
            
            /* every element should contain id if array contain this element [1,2,3,4] then next element id should be 5.
            but if array contain element with diff id like [1,2,5,7] that time id should be 8
            thats why id is calculated using lenghth 
            it calculate lenght of array then subtract - 1 for getting last id and for new id it added + 1*/
            
            if(data.allitem[type].length > 0)
                {
                    ID = data.allitem[type][data.allitem[type].length - 1].id + 1;
                }
            else
            {
                ID = 0;
            }
            
            
            //checking type of expence
            
            // NewItem it is object of function constructor which we declare before
            
            if(type === 'exp')
            {   
              newItem = new Expence (ID, des ,val);
            }
            else if(type === 'inc')
            {
              newItem = new Income (ID, des ,val);
            }
            
            // push it into data structure
            
            //using push method newitem which is object that get store into array 
            
            data.allitem[type].push(newItem);
            return newItem;
            
        };
    
        BudgetController.prototype.DeleteItem = function(type,id)
        {
            var ids, index;
            ids = data.allitem[type].map(function(current) {
               return current.id;
            });
            
            index = ids.indexOf(id);
            
            if(index !== -1)
                {
                    data.allitem[type].splice(index,1)
                }
        };
        
        BudgetController.prototype.budgetCalculator = function()
        { 
           // calculate expence and income
            
           calculateTotal('exp') ;
           calculateTotal('inc');
            //calculate budget = income - expence
             
             data.budget = data.total.inc - data.total.exp;
            
            //calculate persantage
            
            if(data.total.inc > 0)
                {
                   data.persentage = Math.round((data.total.exp / data.total.inc)*100); 
                    
                }
            else {
                data.persentage = -1;
            } 
            
        };
        
        BudgetController.prototype.calCulatePer = function()
        {
           data.allitem.exp.forEach(function(current){
               return current.calculatePersentage(data.total.inc);
            }); 
        };
    
        BudgetController.prototype.getPersantage = function()
        {
           var Allper = data.allitem.exp.map(function(cur){
                 //cur.returnPer(); 
                console.log(Allper);
                return cur.returnPer(); 
            });
            return Allper;
             
        };
    
    BudgetController.prototype.getBudget = function()
    {
       return {
                
                budget : data.budget ,
                totalInc : data.total.inc,
                totalExp : data.total.exp,
                persentage : data.persentage
            } 
        
    };
    
    
    BudgetController.prototype.testing = function()
    {
       console.log(data); 
        
    }
    
    return BudgetController;
    
    /*return {
              
        
   testing : function()
        {
            
        }
        
    };*/
    
    
})();






//UTController
var UIControlar = (function() {
    
    //DomString it is private variable which contain all the classes in it.
    
    var DomString = {
        inputType : '.add__type' , 
        inputDiscription : '.add__description',
        inputValue :'.add__value',
        AddBtn : '.add__btn',
        incomContainer : '.income__list',
        expenceContainer : '.expenses__list',
        budgetLabel : '.budget__value',
        incomeLable : '.budget__income--value',
        expenceLable : '.budget__expenses--value',
        perLable : '.budget__expenses--percentage',
        delete : '.container',
        PersentageLable : '.item__percentage',
        dateLabla : '.budget__title--month',
        timeLable :'.item__time'
    };
    
 <!-- ------------------------------------------------------ --!>
     
    //taking input value from UI and retuning for public access 
     function UIControlar()
     {
     
     };
    
    var  formatNumber = function(num,type)
     {
         var numsplit ,int,dec;
        // + or - sign brefore no and 2 decimal no comma seprated
         num = Math.abs(num);
         num = num.toFixed(2);
         
         numsplit = num.split('.');
         
         int = numsplit[0];
         if(int.length > 3)
             {
                 int = int.substr(0,int.length - 3) + ',' +  int.substr(int.length - 3,3);
             }
         dec = numsplit[1];
         
         return (type === 'exp' ?  '-' : '+') + ' ' + int + '.' + dec;
         
     };
    
    var displayTime = function()
    {
            var hour,now,minuit,time;
            now = new Date();
            hour = now.getHours();
            minuit = now.getMinutes();
            
            time = hour+':'+minuit;
            console.log(time);
            return time; 
        
    };
        
    UIControlar.prototype.input1 = function()
    {
        //this function return the object of new element
        
       return {
        
       type : document.querySelector(DomString.inputType).value , // exp inc
       description: document.querySelector(DomString.inputDiscription).value ,
       value : parseFloat(document.querySelector(DomString.inputValue).value) ,
        
             }; 
    };
    
    UIControlar.prototype.addListItem =function(ob,type)
    {
       var html,newHtml,element;
         //create html string with placeholder 
           
         if(type === 'inc')
             {
                 element = DomString.incomContainer;
                 html = '<div class="item clearfix" id="inc-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__time">%12.00.00%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>' ;
             }
         else if(type === 'exp')
             {
                element = DomString.expenceContainer;
         html='<div class="item clearfix" id="exp-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">-%value%</div><div class="item__percentage">21%</div><div class="item__time">%12.00.00%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>'
          
             }
        
         //replace the placeholder with actual value
        
            newHtml = html.replace('%id%', ob.id);
            newHtml = newHtml.replace('%description%',ob.description);
            newHtml = newHtml.replace('%value%',formatNumber(ob.value,type ));
            newHtml = newHtml.replace('%12.00.00%',displayTime());
         document.querySelector(element).insertAdjacentHTML('beforeend',newHtml);  
    };
    
    UIControlar.prototype.clearfield=function()
    {
        var field,fieldArr;
         
         field = document.querySelectorAll(DomString.inputDiscription + ',' + DomString.inputValue);
         
        
    /* slice method return a array if we pass array to slice it return array(copy of that array which we passing) but here we pass list to slice method and it still return array.
    but we cannot direct call field.slice() method bcz it is list so it uses prototype property, Array it is function constructor using this it called slice and passed list as a this argument.
    */
        
         fieldArr = Array.prototype.slice.call(field);
         
         fieldArr.forEach(function(current , index ,array)
                         {
             current.value="";
         });
         fieldArr[0].focus();
        
    };
    
    UIControlar.prototype.displayBudget = function(obj)
    {
          document.querySelector(DomString.budgetLabel).textContent =  obj.budget;
          document.querySelector(DomString.incomeLable).textContent =  obj.totalInc;
          document.querySelector(DomString.expenceLable).textContent = obj.totalExp;
         
         if(obj.persentage > 0)
             {
                 
                document.querySelector(DomString.perLable).textContent = obj.persentage +'%'; 
             }
         else{
             document.querySelector(DomString.perLable).textContent = '---';
         } 
        
    };
    
    UIControlar.prototype.deleteListItem = function(selectorId)
    {
         var el;
         el = document.getElementById(selectorId);
         el.parentElement.removeChild(el);
    };
    
    UIControlar.prototype.DisplayPer = function(persenatges)
    {
         var field = document.querySelectorAll(DomString.PersentageLable);
         
         var nodelistForEach = function(list , callback)
         {
             for(var i=0; i<list.length;i++)
                 {
                     callback(list[i],i)
                 }
         }
         
         nodelistForEach(field, function(current,index){
            
             if(persenatges[index]> 0)
                 {
                     current.textContent = persenatges[index] + '%';
                 }
             else
                 {
                     current.textContent = persenatges[index] + '---';
                 }
            
         });
    };
    
    UIControlar.prototype.displayYear = function()
    {
            var now, year;
            now = new Date();
            year = now.getFullYear();
            document.querySelector(DomString.dateLabla).textContent = year; 
    };
    
    UIControlar.prototype.getDomstring = function(obj)
    {
       return DomString; 
    };
    
    return UIControlar;
})();

//controller

var Modular = (function(budtr,uictr)
              {
    var ob = new budtr();
    var ob1 = new uictr();
    
   // BudgetController.testing();
    
    // All EventListener setup
    
    var setupEvent = function()
    {
        var Dom = ob1.getDomstring();
    
        /*keypress event it used for when user enter the keys from keyboard then event must get happend
        but if we want to attach event to an perticular key like Enter then it uses keyCode property or which property*/
        
    document.querySelector(Dom.AddBtn).addEventListener('click', Additem);
    document.addEventListener('keypress',function(event)
                             {
        if(event.keyCode === 13 || event.which === 13)
            {
                Additem();
            }
    });
        
        document.querySelector(Dom.delete).addEventListener('click',Deleteitem);
        
    };
    
    
    var updateBudget = function ()//replace placeholder with actual data
         // imnsert html into domss
         
    {
        //calculate budget
        
        ob.budgetCalculator();
        
        //return the budget
        
        var budget = ob.getBudget();
        
        //display the budget
        
        console.log(budget);
        ob1.displayBudget(budget);
        
    };
    
    var updatePersentage = function()
    {
        var ans;
        //calculate the persentage
        
         ob.calCulatePer();
        //read the persenatge
        ans = ob.getPersantage(); 
        //update the ui 
        ob1.DisplayPer(ans);
    };
    
    <!-- ------------------------------------------------------ --!>
    // Add item
        
    var Additem = function()
    { //add Item
        var input ,newIt;
        var letters = (/^[a-zA-Z ](.*[a-zA-Z0-9])+?$/);
        input = ob1.input1();
        
        console.log(input);
        
        if(input.description.match(letters) && (input.description.replace(/\s/g, "").length >0) && !isNaN(input.value) && input.value > 0)
            { newIt=ob.AddItem(input.type, input.description, input.value);
             
                  
                 //console.log(newIt);         
                 ob1.addListItem(newIt,input.type);
        
                 //clear the input feild
                  ob1.clearfield();
                // update Budget
    
                  updateBudget();
             
                  updatePersentage();
                  
                 
           }
        };  
    var Deleteitem = function(event)
    {
        
        var itemId,splitId,type,ID;
        
        itemId = event.target.parentNode.parentNode.parentNode.parentNode.id;
        
        if(itemId)
            {
                splitId = itemId.split('-');
                type = splitId[0];
                ID = parseInt(splitId[1]);
            }
        //delete item from data structure
        console.log(type,ID);
        ob.DeleteItem(type, ID);
        
        //delete from user interface
        
        ob1.deleteListItem(itemId);
        
        //update income
        updateBudget();
        
        //Upadte persenatge
        
        //updatePersentage();
        
        //
        
    };
    
    
    //Event Listner Method returning for public access
    /* init function get called when start the application it contain setupEvent call means all eventListner get activated*/
    return {
         
        init: function()
        {
            ob1.displayBudget( {budget : 0 ,
                totalInc : 0,
                totalExp : 0,
                persentage : -1});
         console.log("application has started");
            ob1.displayYear();
         setupEvent();
         }
    };
    
    //upadte UI
   
    
})(BudgetController ,UIControlar);
Modular.init();

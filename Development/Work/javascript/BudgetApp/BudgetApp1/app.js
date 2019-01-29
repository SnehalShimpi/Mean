
//BudgetController

var budgetController = ( function()
{
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
    
    return {
        AddItem : function(type,des,val)
        { 
            var newItem , ID;
            
             
            // unique id ty
            if(data.allitem[type].length > 0)
                {
                    ID = data.allitem[type][data.allitem[type].length - 1].id + 1;
                }
            else
            {
                ID = 0;
            }
            
            
            //checking type of expence
            
            if(type === 'exp')
            {   
              newItem = new Expence (ID, des ,val);
            }
            else if(type === 'inc')
            {
              newItem = new Income (ID, des ,val);
            }
            
            // push it into data structure
            
            data.allitem[type].push(newItem);
            return newItem;
            
        },
        
        DeleteItem: function(type,id)
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
        
        },
        
         budgetCalculator : function()
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
        
            
        },
        
        calCulatePer : function()
        {
            data.allitem.exp.forEach(function(current){
               return current.calculatePersentage(data.total.inc);
            });
        },
        
        getPersantage : function()
        {
            var Allper = data.allitem.exp.map(function(cur){
                 //cur.returnPer(); 
                console.log(Allper);
                return cur.returnPer(); 
            });
            return Allper;
            
            
        },
        
         
        getBudget : function()
        {
            return {
                
                budget : data.budget ,
                totalInc : data.total.inc,
                totalExp : data.total.exp,
                persentage : data.persentage
            }
        },
        
        testing : function()
        {
            console.log(data);
        }
        
    };
    
    
})();






//UTController
var UIControlar = (function() {
    
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
        dateLabla : '.budget__title--month'
    };
    
 <!-- ------------------------------------------------------ --!>
     
    //taking input value from UI and retuning for public access 
    
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
        
     
     
     
    return {
    input1 : function() {
            return {
        
       type : document.querySelector(DomString.inputType).value , // exp inc
       description: document.querySelector(DomString.inputDiscription).value ,
       value : parseFloat(document.querySelector(DomString.inputValue).value) ,
    };
        
    }, 
      
     addListItem : function(obj,type)
     {
         var html,newHtml,element;
         //create html string with placeholder 
           
         if(type === 'inc')
             {
                 element = DomString.incomContainer;
                 html = '<div class="item clearfix" id="inc-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div> <div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>' ;
             }
         else if(type === 'exp')
             {
                element = DomString.expenceContainer;
         html='<div class="item clearfix" id="exp-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">-%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>'
          
             }
         
            newHtml = html.replace('%id%', obj.id);
            newHtml = newHtml.replace('%description%',obj.description);
            newHtml = newHtml.replace('%value%',formatNumber(obj.value,type ));
         
         document.querySelector(element).insertAdjacentHTML('beforeend',newHtml);
         
     },
     
     clearfield : function()
     {
       var field,fieldArr;
         
         field = document.querySelectorAll(DomString.inputDiscription + ',' + DomString.inputValue);
         
         fieldArr = Array.prototype.slice.call(field);
         
         fieldArr.forEach(function(current , index ,array)
                         {
             current.value="";
         });
         fieldArr[0].focus();
     },
     
     displayBudget : function(obj)
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
          
         
     },
     
     deleteListItem : function(selectorId)
     {
         var el;
         el = document.getElementById(selectorId);
         el.parentElement.removeChild(el);
     },
     
     DisplayPer :function(persenatges)
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
         
     },
        
       displayYear : function()
        {
            var now, year;
            now = new Date();
            year = now.getFullYear();
            document.querySelector(DomString.dateLabla).textContent = year; 
        },
     
        getDomstring : function(obj)
        {
            return DomString;
        }
    };
    
      
    

})();

//controller

var Modular = (function(budgetCtr,UICtr)
              {
    budgetController.testing();
    
    // All EventListener setup
    
    var setupEvent = function()
    {
        var Dom = UICtr.getDomstring();
    
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
        
        budgetCtr.budgetCalculator();
        
        //return the budget
        
        var budget = budgetCtr.getBudget();
        
        //display the budget
        
        console.log(budget);
        UICtr.displayBudget(budget);
        
    };
    
    var updatePersentage = function()
    {
        var ans;
        //calculate the persentage
        
         budgetCtr.calCulatePer();
        //read the persenatge
        ans = budgetCtr.getPersantage(); 
        //update the ui 
        UICtr. DisplayPer(ans);
    };
    
    <!-- ------------------------------------------------------ --!>
    // Add item
        
    var Additem = function()
    { //add Item
        var input ,newIt;
        input = UICtr.input1();
        
        console.log(input);
        
        if(input.description !== "" && !isNaN(input.value) && input.value > 0)
            { newIt= budgetCtr.AddItem(input.type, input.description, input.value);
                 //console.log(newIt);         
                 UICtr.addListItem(newIt, input.type);
        
                 //clear the input feild
                  UICtr.clearfield();
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
        budgetCtr.DeleteItem(type, ID);
        
        //delete from user interface
        
        UICtr.deleteListItem(itemId);
        
        //update income
        updateBudget();
        
        //Upadte persenatge
        
        //updatePersentage();
        
        //
        
    };
    
    
    //Event Listner Method returning for public access
    
    return {
         
        init: function()
        {
            UICtr.displayBudget( {budget : 0 ,
                totalInc : 0,
                totalExp : 0,
                persentage : -1});
         console.log("application has started");
            UICtr.displayYear();
         setupEvent();
         }
    };
    
    //upadte UI
   
    
})(budgetController,UIControlar);
Modular.init();




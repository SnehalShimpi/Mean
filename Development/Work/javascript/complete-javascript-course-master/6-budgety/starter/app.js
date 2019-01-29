
//BudgetController

var budgetController = ( function()
{
    var Expence = function(id,description,value)
    {
        this.id = id;
        this.description = description;
        this.value = value;
    }
    var Income = function(id,description,value)
    {
        this.id = id;
        this.description = description;
        this.value = value;
    }
    
    var data = {
        allitem : {
            exp : [],
            inc : []
        },
          total : {
            exp : 0,
            inc : 0
        }
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
        expenceContainer : '.expenses__list'
    };
    
 <!-- ------------------------------------------------------ --!>
     
    //taking input value from UI and retuning for public access 
    
    return {
    input1 : function() {
            return {
        
       type : document.querySelector(DomString.inputType).value , // exp inc
       description: document.querySelector(DomString.inputDiscription).value ,
       value : document.querySelector(DomString.inputValue).value,
    };
        
    }, 
      
     addListItem : function(obj,type)
     {
         var html,newHtml,element;
         //create html string with placeholder 
           
         if(type === 'inc')
             {
                 element = DomString.incomContainer;
                 html = '<div class="item clearfix" id="income-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div> <div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>' ;
             }
         else if(type === 'exp')
             {
                element = DomString.expenceContainer;
         html='<div class="item clearfix" id="expense-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">-%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>'
          
             }
         
            newHtml = html.replace('%id%', obj.id);
            newHtml = newHtml.replace('%description%',obj.description);
            newHtml = newHtml.replace('%value%',obj.value);
         //replace placeholder with actual data
         // imnsert html into domss
         
         document.querySelector(element).insertAdjacentHTML('beforeend',newHtml);
         
     },
        getDomstring : function()
        {
            return DomString;
        }
    };
    
      
    

})();

//controller

var Modular = (function(budgetCtr,UICtr)
              {
    
    
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
        
    };
    
    <!-- ------------------------------------------------------ --!>
    // Add item
        
    var Additem = function()
    {
        //add Item
        var input ,newIt;
        input = UICtr.input1();
        
        console.log(input);
        
        
        newIt= budgetCtr.AddItem(input.type, input.description, input.value);
        //console.log(newIt);         
        
        UICtr.addListItem(newIt, input.type);
    };  
    
    //Event Listner Method returning for public access
    
    return {
         
        init: function()
        {
            
         console.log("application has started");
         setupEvent();
         }
    };
    
    //upadte UI
   
    
})(budgetController,UIControlar);
Modular.init();




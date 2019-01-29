
   
 
document.querySelector('.btn').addEventListener('click',add);

function add()
{      
       
        var letters = (/^[a-zA-Z ]+$/);
        var num=(/^[0-9]+$/);
        var email = (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/) ;
        var Name = document.getElementById("t1").value;
        if(Name.match(letters) && Name.replace(/\s/g, "").length >0)
            {
                console.log("Succesfully Enter Name"+Name)
            }
        else
        {
            alert("Please Enter Valid Name ");
        }
        var Surname = document.getElementById("t2").value;
        
           if(Surname.match(letters) && Surname.replace(/\s/g,"").length >0)
            {
                console.log("Succesfully Enter Surname "+ Surname);
            }
       else
        {
            alert("Please Enter Valid Surname");
        }
        var Add = document.getElementById("t3").value;
        
       if(Add.match(letters) && Add.replace(/\s/g,"").length >0)
            {
                console.log("Succesfully Enter Address "+ Add);
            }
       else
        {
            alert("Please Enter Valid Address");
        }
    
        var No = document.getElementById("t4").value;
       if(No.match(num) && No.length == 10)
            {
                console.log("Succesfully Enter Number "+ No);
            }
       else
        {
            alert("Please Enter Valid Mobile Number");
        }
    
    
        var  Id = document.getElementById("t5").value;
                                                                                       
        
                                                       
                                                      
    
   console.log(Name+ " "+Surname+" "+Add+" "+Id+" "+No); 
  
           
}


    
    
    
    
    

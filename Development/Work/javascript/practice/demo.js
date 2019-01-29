

document.querySelector('.btn').addEventListener('click',function(){
 var x = document.getElementById("no1").value;
console.log(x);     
  var y = document.getElementById("no2").value;
console.log(y);  
   
    var add = Number(x) + Number(y);
    var sub = Number(x) - Number(y);
    
    document.getElementById('add1').textContent = add;
    document.getElementById('sub1').textContent = sub;
});


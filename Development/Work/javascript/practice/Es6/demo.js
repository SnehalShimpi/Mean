//Module Design Pattern

var abc = (function()
{
  var privateMethod = function()
  {
      console.log("inside Private Method");
  }
  var ExposeMethod = function()
  {
      console.log("this is method which i want to expose");
  }
  return{ 
     demo : function(){
            privateMethod();
            ExposeMethod();
         console.log("contents");
  }
      
  };
    
})();
abc.demo();

//Revealing Module Pattern

var Xyz = (function()
{
  var privateMethod = function()
  {
      console.log("yeahhhhh000000000000000000000000");
  }
  var ExposeMethod = function()
  {
      console.log("fdggggggggggggggggggggggggggggggg");
  }
  return {
      fi:privateMethod,
      si:ExposeMethod
  };
  })();
Xyz.fi();
Xyz.si();




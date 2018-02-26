$(document).ready(function(){

var temp=[];
var arr=[];  
var symbol="%=+-/*";
var number='$0123456789.';  
var num1;
var num2;
var num;  
var operator; 
var text;  
var str;

 
 
  
  $("button").on("click", function(){
    c=$(this).val();
    $("#result").text(c);
   calculator(c);  
  })

  function calculator(data){  
    if (data=="AC"){
      $("#result").text(0);
      temp=[];
      arr=[];
    }
 if (data=="arrow"){
     if(arr.length==0){
      temp.pop();
      str=temp.join('');
   num1=Number(str);
    $("#result").text(num1);
     num=num1;}
     if(arr.length>0){
      temp.pop();
      str=temp.join('');
   num2=Number(str);
    $("#result").text(num2); }
      if(temp.length==0){
       $("#result").text(0); 
      }
 }
  
  if (number.indexOf(data)>0){
    if(arr.length==0){
  temp.push(data);
  str=temp.join('')
   num1=Number(str); 
    num=num1; 
  $("#result").text(num1);}

    if(arr.length>0){
   
     temp.push(data);
    str=temp.join('');
   num2=Number(str);
  
        //console.log(num2);
  $("#result").text(num2); 
    }
   
    }
     
     if (symbol.indexOf(data)>0){
   
     arr.push(data); 
        temp=[];
      // console.log(arr);    
       }
    
     if (arr.length>1){
    
       operator=arr.shift();
       
       //console.log(operator);
       if(operator=="+"){
         num=num+num2;
         //console.log(num2);
         //console.log(num);
          }
       if(operator=="-"){
         num=num-num2;
        //console.log(num2);
         //console.log(num);
          }
       if(operator=="*"){
         num=num*num2;
         //console.log(num);
          }
       if(operator=="/"){
         num=num/num2;
         //console.log(num);
       }  
        
       }
     if (data=="%"){
          num=num/100;
          }
      if (data=="="){
        $("#result").text(num);
      }
     
    
  
      
   
    

}
    
 
    
    
    
    
  



});
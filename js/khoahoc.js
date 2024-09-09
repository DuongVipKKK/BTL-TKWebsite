/*-----------------scrolll----------------*/
window.onscroll=function()
{  var gotop=document.getElementsByClassName("gotop");
    var menu=document.querySelectorAll('nav');
    var text=document.querySelectorAll(".logo>h1");
   if(document.documentElement.scrollTop > 200||document.body.scrollTop>200)
   {
    menu[0].style.position="fixed";
    menu[0].style.right=0;
    menu[0].style.backgroundColor="rgb(0,0,0,0.7)";
    menu[0].style.zIndex=999;
    gotop[0].style.display="block";
    text[0].style.color="aqua";
   }
   else
   {
    menu[0].style.position="absolute";
    menu[0].style.backgroundColor="rgb(15 65 122)";
    gotop[0].style.display="none";
    
    text[0].style.color="white";
   
   }
}
function goTop()
{
let go=setInterval(
    function()
     {
        document.documentElement.scrollTop-=50;
        if(document.documentElement.scrollTop<=0 )
            {
               clearInterval(go);
            }
     },0.2)
     
}
/*---------------tìm kiếm-------------------*/
function search()
{
   var text=document.getElementById("text");
   if(text!=null)
   {
      text=text.value;
      text=text.toLowerCase();
      var element= document.getElementsByClassName("element");

      for(var i=0;i<element.length;i++)
      {
         var H1=element[i].getElementsByTagName("h1")[0].innerText;
         var h1=H1.toLowerCase();
         if(h1.indexOf(text)<0)
         {
            element[i].style.display="none";
            var prev=document.getElementsByClassName("prev");
            prev[0].style.display="block";
         }
         else
         {
            element[i].style.display="block";
         }
      }
      
   }
   
}



var listfeed=document.getElementsByClassName("list-feed");
var feedback=document.getElementsByClassName("feedback");
let i=0;
setInterval(
    function()
    {
    if(i==feedback.length-1)
    {
     
        listfeed[0].style.transform=`translateX(0px)`;
        i=0;
    }else
    {
        i++;
        let width=feedback[0].offsetWidth;
        listfeed[0].style.transform=`translateX(${-1*width*i}px)`;
    }
        
},5000)
/*-----------------scrolll----------------*/
window.onscroll=function()
{  var gotop=document.getElementsByClassName("gotop");
   if(document.documentElement.scrollTop > 200||document.body.scrollTop>200)
   {

    gotop[0].style.display="block";
   }
   else
   {
    gotop[0].style.display="none";
   
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

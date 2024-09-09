function showtab(index)
{
var buttons=document.getElementsByClassName("tabicon");
var panel=document.getElementsByClassName("tab-panel");
for(var i=0; i < panel.length;i++)
{
     panel[i].classList.remove("active");
}
for(var i=0; i<buttons.length;i++)
{
buttons[i].classList.remove("active");
}
if(index>=0&&index<=panel.length)
{
    buttons[index].classList.add("active");
    panel[index].classList.add("active");
}
}
window.onload=function()
{
    showtab(0);
}
//----------slideshow--------------------//

var topic=document.getElementsByClassName("slide");
var n=0;
function showslide(index)
{   for(var i=0;i<topic.length;i++)
    {
        topic[i].style.display="none";
    }
    if(index>=topic.length)
    {
        n=0;
    }
    else if(index<0)
    {
        n=topic.length-1;
    }
    else
    {
        n=index;
    }
    topic[n].style.display="block";
}
function chaneslide(i)
{
    showslide(n+i);
}
showslide(n);
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
    menu[0].style.backgroundColor="rgb(0,0,0,0.1)";
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









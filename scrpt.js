
function additem(){

    let ul=document.getElementById("travail-container");
    let ull=document.createElement("ul")
   let li=document.createElement("li");
 li.setAttribute("class","li-att")
    var butcomp=document.createElement("button");
   var butdelete=document.createElement("button");
   var item =document.querySelector(".input-task").value
   
  
   if(item=="")
   {
       alert("vous devez entre new task");
   }
   else
   {
   butdelete.innerHTML="Delete";
    butcomp.innerHTML="Complete";
    butcomp.style.padding="15px";
    butcomp.style.borderRadius="5px";
    butdelete.style.padding="15px";
    butdelete.style.margin="0 10px"
    butdelete.style.borderRadius="5px";

    li.style.listStyle=("none")
    li.appendChild(butcomp);
    li.appendChild(butdelete);
  li.appendChild(document.createTextNode(item))

  ull.appendChild(li)
  ul.appendChild(ull)
  
  
  
  butcomp.addEventListener("click",function(){
    if( butcomp.innerHTML=="Undo")
    {
    li.style.textDecoration=("none")
    butcomp.innerHTML="complete";
  }
   else
   { 
    li.style.textDecoration=("line-through")
    butcomp.innerHTML="Undo";
  }
  })

  butdelete.addEventListener("click",function(){
ull.remove()

  })
    document.querySelector(".input-task").value=""
 
}
}
let btn=document.querySelector("button");
let inp=document.querySelector("input");
let ul=document.querySelector("ul");

btn.addEventListener("click",function(){
    let item=document.createElement("li");//ek naya element bana li ka
    item.innerText=inp.value;
    let delbtn=document.createElement("button");//This creates a new button element (<button>) in the DOM (Document Object Model) but doesn't yet add it to the visible webpage.
    delbtn.innerText="Delete";//This sets the text that will be displayed inside the button to "Delete". When the button is added to the webpage, users will see the word "Delete" on the button.
    delbtn.classList.add("delete");//This adds a class called "delete" to the button element.
    //By adding this class, you can later style the button using CSS.
    ul.appendChild(item);//add any element at the last of the child node of any parent 
    item.appendChild(delbtn);//delbtn jo bhi banega wo item jo li ka element hai uska as a child add hoga
    inp.value="";
});


//ye wala code naye wale elements ke liye apply nahi hoga
//let delbtns=document.querySelectorAll(".delete");
// for(delbtn of delbtns){ 
//     delbtn.addEventListener("click",function(){
//         let par=this.parentElement;//yaha par delbtn use karte to hamesha last element jo hai delbtn element ka wahi delete hoga
//         console.log(par);If you used delbtn inside the event listener, it would refer to the last delbtn in the loop after the iteration finishes because JavaScript for...of loops don't create a new scope for each iteration
//         par.remove();//delete 
//        });
//    
//ye wala code naye buttons pe kaam karega as we are using bubbling as ul is parent node of the button
ul.addEventListener("click",function(event){
    console.log(event.target);
   console.dir(event.target);
   console.log(event.target.nodeName);
if (event.target.nodeName=="BUTTON"){
  let itemchild=event.target.parentElement;//use eventbubbling. This removes the parent element (along with its child elements, including the button itself) from the DOM
  itemchild.remove();//the button is just a part of the li. You want to delete the whole li, not just the button itself.
}
});
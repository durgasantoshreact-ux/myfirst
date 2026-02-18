import React,{Fragment,useState} from 'react'; 
import ReactDom from 'react-dom/client';
function User({name,age,study,marks}) {
   
var stock=10;
let [counter,updateCounter]=useState({
   name:'santosh',id:'4560', age:'34', batch:'b36', caluc:0
});
   return(
      <>
      <p>This is my first class component</p>
      <ul>
         <li>name={name}</li>
         <li>Profession={study}</li>
         <li>age={age}</li>
         <li>marks={marks}</li>
      </ul>

      <div className="flex">
         <button onClick={(e)=> negcount(e)} disabled={counter.caluc===0}> - </button>
         <span id='countval'>{counter.caluc}</span>
         <button onClick={(e)=>{ poscount(e)}} disabled={counter.caluc===stock}> + </button>
      </div>
    
      </>
     
   );
   function poscount(e){
    if(counter.caluc<stock){
         updateCounter({...counter,caluc:counter.caluc+1});
    }
      
   // let count=document.getElementById('countval').innerText;
   // count++;
   // document.getElementById('countval').innerText=count;
 }
 function negcount(e){
     if(counter.caluc>0){
         updateCounter({...counter,caluc:counter.caluc-1});
     }
   // let count=document.getElementById('countval').innerText;
   // count--;
   // document.getElementById('countval').innerText=count;
 }

}
function changeColor(e){
   document.body.style.backgroundColor=e.target.value;
}
function clickedData(){
   alert('Button Clicked');
 }
 

export default User;
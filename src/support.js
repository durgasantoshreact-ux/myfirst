import { useState,useRef } from 'react';


function Support(){
  let[mainval,updatemainval]=useState(''); 
  function setData(val){
    //alert(mainval);
  updatemainval(mainval+val);
 
}
function clearsec(){
  updatemainval('');
  console.log(headname);
  headname.current.innerHTML="This is refrence heading";
  headname.current.classList.toggle("active");
}
function finalone(){
  let result=eval(mainval);
  updatemainval(result);
}

let headname=useRef();

  return(
     <div className='flex flex-col items-center justify-center max-h-screen'>
       <h1 ref={headname}>Caluclator</h1> 
       <div className='flex w-[220px] h-[300px] border-2 flex-col  p-5'>
        <input type='text' placeholder='Enter first number' className='border-2 p-2' value={mainval} onChange={(e)=>{updatemainval(e.target.value)}}/>
        <div className='flex'>
          <button className='border-2 w-[25%] h-[50px] bg-gray text-black' onClick={()=>{setData('7')}}>7</button>
          <button className='border-2 w-[25%] h-[50px] bg-gray text-black' onClick={()=>{setData('8')}}>8</button>
          <button className='border-2 w-[25%] h-[50px] bg-gray text-black' onClick={()=>{setData('9')}}>9</button>
          <button className='border-2 w-[25%] h-[50px] bg-gray text-black' onClick={()=>{setData('/')}}>/</button>
        </div>
        <div className='flex'>
          <button className='border-2 w-[25%] h-[50px] bg-gray text-black' onClick={()=>{setData('4')}}>4</button>
          <button className='border-2 w-[25%] h-[50px] bg-gray text-black' onClick={()=>{setData('5')}}>5</button>
          <button className='border-2 w-[25%] h-[50px] bg-gray text-black' onClick={()=>{setData('6')}}>6</button>
          <button className='border-2 w-[25%] h-[50px] bg-gray text-black' onClick={()=>{setData('*')}}>*</button>
        </div>
        <div className='flex'>
          <button className='border-2 w-[25%] h-[50px] bg-gray text-black' onClick={()=>{setData('1')}}>1</button>
          <button className='border-2 w-[25%] h-[50px] bg-gray text-black' onClick={()=>{setData('2')}}>2</button>
          <button className='border-2 w-[25%] h-[50px] bg-gray text-black' onClick={()=>{setData('3')}}>3</button>
          <button className='border-2 w-[25%] h-[50px] bg-gray text-black' onClick={()=>{setData('-')}}>-</button>
        </div>
           <div className='flex'>
          <button className='border-2 w-[25%] h-[50px] bg-gray text-black' onClick={()=>{setData('0')}}>0</button>
          <button className='border-2 w-[25%] h-[50px] bg-gray text-black' onClick={()=>{finalone()}}>=</button>
          <button className='border-2 w-[25%] h-[50px] bg-gray text-black' onClick={()=>{clearsec()}}>C</button>
          <button className='border-2 w-[25%] h-[50px] bg-gray text-black' onClick={()=>{setData('+')}}>+</button>
        </div>
       </div>
     </div>  
   )
}


export default Support;    
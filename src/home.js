import { useState } from "react";
import { useEffect } from "react";

let regain=['angular','react','vue','svelte'];


function Home(){
   let [name1,updatename1]= useState('santosh');
   useEffect(()=>{
     updatename1('Lakshman')
   },[])
   return(
      // {regain.map((val) => {
      //     return <h1>{val}  </h1>
     <div> 
      <p>{name1}</p>
    {
      regain.map((val) => {
          return <h1>{val}  </h1>
       })
    }
      </div>
   )
}
export default Home;
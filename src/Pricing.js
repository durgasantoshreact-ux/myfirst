
import {useEffect,useState} from 'react';
import Products from './products';
function Pricinig(){
   let [priceproduct,updateproduct] = useState([]);
   useEffect(()=>{
     
         getProducts();
        

        
   },[]);
  async function getProducts(){
       let product= await fetch('https://fakestoreapi.com/products');
       let productlist=await product.json();
       updateproduct(productlist);
       console.log(productlist);
      
   }
   return(
      <>
      <div class='flex flex-wrap gap-[10px]  w-[100%]'>
      { priceproduct.map((prod)=>{
          return <Products {...prod}></Products>
       })}
       </div>
       </>
     
   )
}

export default Pricinig;
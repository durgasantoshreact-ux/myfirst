import { Building } from "lucide-react";   
import { Link } from "react-router-dom";     

function Navigation() {
   let menus=['Features','Pricing','Support'];
   return(
      <>
     <header className="flex items-center justify-between p-4 ">
      <div className="max-w-7xl mx-auto shadow-sm rounded-lg w-full">
         <div className='flex items-center gap-4 p-4 justify-between'>
            <div className='flex items-center gap-4 p-4'>
                  <Link to='/'>
                     <img src='logo.svg' alt='logo' className='cursor-pointer'/>
                  </Link>
           
               {/*  <div className='bg-red  p-4'> <Building ></Building></div><div className="flex flex-col items-start justify-start">
               
                  <h1 className='text-xl font-bold'>Conrep</h1>
                  <p className='text-sm text-gray-500'>All-in-One Bussiness Platform</p>
                  </div> */}
            </div>
            <nav className="flex gap-20 items-center">
               <ul className="flex gap-10 items-center">
                  {menus.map((menus,index)=>{
                     return(
                        <li id='{index}' className='text-gray-600 hover:text-blue-600 cursor-pointer'>
                           <Link to={`/${menus}`}>{menus}</Link></li>
                     )
                  })}
                  
               </ul>
                <button type="button" className="p-4 btn-primary text-#000 rounded-lg">Get Started</button>
            </nav>
           
         </div>
      </div>
     </header>
     <section>
         <div className="max-w-7xl mx-auto p-4 bg-blue">
            <h1 className="text-2xl font-bold text-white ">Transparent Pricing: Pay Only for What You Use!</h1>
         </div>
     </section>
     </>
   );
}


export default Navigation;
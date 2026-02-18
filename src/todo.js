import {useState} from 'react';
function Todo(){
   function addtodo() {
      setTodos([...Todos,{id:'3',name:existval}]);
      updateexistval("");
      
   }
   function latestval(e){
      updateexistval(e.target.value);
   }
   let[existval,updateexistval]=useState('');
   let[Todos,setTodos]=useState([
         {
            id:'1',
            name:"Conrep Courses"
         },
         {
            id:'2',
            name:"UI Developer coursers"
         }
      ]);
function remove(e,id){
   let todoval=Todos.filter((todo2)=>{
      return todo2.id !== id;
   })
   setTodos(todoval);
}
   return(
      <>
      <div className='flex items-center min-h-screen mx-auto justify-center w-500'>
         <div className=''>
         <h3>Todo List</h3>
         <div className='flex items-center '>
            <input type='text' className='h-10 w-300 border-2 border-gray-300 rounded-lg outline-none px-4 focus:border-blue-400'  value={existval} onChange={(e)=>{latestval(e)}}/>
            <button className='h-10 w-100 bg-blue-500 text-white rounded-lg ml-4 px-4' onClick={()=>{ addtodo()}} disabled={existval.trim() === ''}>Add</button>
         </div>
         <ul>
            {Todos.map((comp) => {
              return <li key={comp.id}>{comp.name} <button className='ml-2 text-right' onClick={(e)=>{
               remove(e,comp.id)
              }}>❌</button></li>
            })}
         </ul>
      </div> 
      </div>
      
      </>
   )
}





export default Todo;
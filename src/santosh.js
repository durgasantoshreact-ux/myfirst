import './santosh.css'
import {months,name2} from './index.js';
function rajesh({name,study,age,marks,children}){

   let style1={
      color:'blue',
      fontSize:'20px',
      fontWeight:'bold'
   }
   return(
      <div className='head-sectn'>
        <ul>
         <li>name={name}</li>
         <li>Profession={study}</li>
         <li>age={age}</li>
         <li>marks={marks}</li>
         <li>Child Data={children}</li>
      </ul>
      <p>{name2}</p>
      <p className='testing' style={style1}>{months[0]}</p>
      <div>
         <input type='checkbox' id='san'/>
         <label htmlFor='san'>Accept Terms and Conditions</label>
      </div>
      </div>

   )
}


export default rajesh;

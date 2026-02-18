function Products(props){
return(
     <div className='flex flex-col flex-wrap gap-5 border-2 p-5 w-[200px] align-center text-center'>
      <p>{props.id}</p>
      <p>{props.title}</p>
      <p>{props.category}</p>
      <p><img src={props.image} alt={props.title} className="w-full h-40 object-cover"/></p>
      <p>{props.price}</p>
      <p>{props.description}</p>
      <p>{props.rating.rate}</p>
      </div>
   )
}



export default Products;



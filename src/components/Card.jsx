function Card({children, bg="bg-gray-200"}){
 return(  
     <div className={`${bg} p-5 rounded shadow-lg space-y-4`}>
      {children}
    </div>
 )
}
export default Card;
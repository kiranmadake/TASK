
const Box =({name})=>{
    return(
       <span className="box">
       Below  Is The Special Content For This Card
       <hr />
        <p>{name}</p>
       <hr />
       <button id="readmore">Read More</button>
       </span>
    )
}
export default Box;
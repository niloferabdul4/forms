import React from "react";
import  ReactDOM  from "react-dom";

export default function Objectstate(){

    const [formdata,setFormdata]=React.useState({firstname:"", lastname:""})
    console.log(formdata)
    
    function handleClick(event){
        setFormdata(prevFormdata=>{return {...prevFormdata,[event.target.name] : event.target.value}})      //  even.taget.name is firstname(in useState) here  ///
        
    }
    return(
        <>
        <form>
          <label >FirstName</label>
          <input type="text" placeholder="FirstName" name="firstname"  onChange={handleClick} />

          <label >LastName</label>
          <input type="text" placeholder="LastName" name="lastname"  onChange={handleClick}  />

        </form>
        </>
    )
}
ReactDOM.render(<Objectstate />,document.getElementById('root'))
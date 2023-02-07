

import React from "react";
import ReactDOM  from "react-dom";

export default function Email(){
    const[formData,setFormdata]=React.useState({email:"", password:""})
    console.log(formData)

    function handleChange(event){
        setFormdata(prevForm=>{return {...prevForm,[event.target.name] : event.target.value}})
    }

    return(
        <>
        <form>
            <label>Email</label>
           <input type="text" placeholder="Email"  onChange={handleChange} name="email" />

           <label>Password</label>
           <input type="text" placeholder="Password"  onChange={handleChange} name="password" />

        </form>
        </>
    )
   
}
ReactDOM.render(<Email />,document.getElementById('root'))




/*
import React from "react";
import  ReactDOM  from "react-dom";

export default function Email(){

    const [formdata,setFormdata]=React.useState({email:"", password:""})
    console.log(formdata)
    
    function handleChange(event){
        setFormdata(prevFormdata=>{return {...prevFormdata,[event.target.name] : event.target.value}})      //  even.taget.name is firstname(in useState) here  ///
        
    }
    return(
        <>
        <form>
          <label >Email</label>
          <input type="text" placeholder="Email" name="email"  onChange={handleChange} />

          <label >Password</label>
          <input type="text" placeholder="Password" name="password"  onChange={handleChange}  />

        </form>
        </>
    )
}
ReactDOM.render(<Email />,document.getElementById('root'))

*/
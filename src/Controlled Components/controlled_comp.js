import React from "react";
import ReactDOM  from "react-dom";

export default function Controlled(){
    const[formData,setFormdata]=React.useState({email:"", password:""})
    console.log(formData)

    function handleChange(event){
        setFormdata(prevForm=>{return {...prevForm,[event.target.name] : event.target.value}})
    }

    return(
        <>
        <form>
            <label>Email</label>
            <input type="text" 
                    placeholder="Email"  
                    onChange={handleChange}
                    name="email" 
                    value={formData.email}           // controlled components  ///
            />

           <label>Password</label>
            <input type="text" 
                    placeholder="Password"  
                    onChange={handleChange} 
                    name="password" 
                    value={formData.password}          // controlled componenets  ////
                    />

        </form>
        </>
    )
   
}
ReactDOM.render(<Controlled />,document.getElementById('root'))
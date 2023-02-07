
/*
import React from "react";
import  ReactDOM  from "react-dom";

export default function Firstlast(){


    const [firstname,setFirstname]=React.useState("")
    const [lastname,setLastname]=React.useState("")

    function handleClick1(event){
                console.log(event.target.value)
                setFirstname(firstname)
    }


    function handleClick2(event){
                console.log(event.target.value)
                setLastname(lastname)

}
    return(
        <>
        <form>
            <label htmlFor="first" >FirstName</label>
            <input type="text"  id="first"  placeholder="firstname" onChange={handleClick1}   />


<br></br>
<br></br>

            <label htmlFor="last" >LastName</label>
            <input type="text" id="last" placeholder="lastname" onChange={handleClick2}  />
            
            
        </form>

        
        </>
    )
}

ReactDOM.render(<Firstlast />,document.getElementById('root'))


/*******  Another Way  **************** */

import React from "react";
import  ReactDOM  from "react-dom";

export default function Fullname(){

    const [name,setName]=React.useState("")
    const {firstname,lastname}={name};                                ///   destructuring nam                                                                                                                                                                                                                                                                                                   e to firstname,lastname  //
    
   

    function handleClick1(event){
                console.log(`FirstName: ${event.target.value}`)
                setName(firstname)
    }


    function handleClick2(event){
                console.log(`LasttName: ${event.target.value}`)
                setName(lastname)

}
    return(
        <>
        <form>
            <label htmlFor="first" >FirstName</label>
            <input type="text"  id="first"  placeholder="firstname" onChange={handleClick1}   />


<br></br>
<br></br>

            <label htmlFor="last" >LastName</label>
            <input type="text" id="last" placeholder="lastname" onChange={handleClick2}  />
            
            
        </form>

        
        </>
    )
}

ReactDOM.render(<Fullname />,document.getElementById('root'))
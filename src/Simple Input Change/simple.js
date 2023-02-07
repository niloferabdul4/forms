
/**********   onChange Event  (for each keystroke display the message) *

import React from "react";
import  ReactDOM  from "react-dom";

export default function Simple(){

const[firstname,setFirstname]=React.useState("")

function handleClick(event){

        console.log(event.target)                               /// display the  HTML ELEM that triggerts this event ////
        console.log(event.target.value)                         /// displey the value we type //

}

    return(
        <>
        
            <form>

            <label htmlFor="firstName">FirstName</label>
            <input type="text" id="firstName" placeholder="Firstname" onChange={handleClick} name={firstname}/>
                
                
            </form>
        </>
    )
}
ReactDOM.render(<Simple />,document.getElementById('root'))

*/



/*****  UPDATE THE FIRSTNAME STATE IN EVERY KEY STROKE  ****** */




/**********   onChange Event  (for each keystroke display the message) */

import React from "react";
import  ReactDOM  from "react-dom";

export default function Simple1(){

const[firstname,setFirstname]=React.useState("")

function handleClick(event){

        setFirstname(event.target.value)
        console.log(event.target.value)
}

    return(
        <>
        
            <form>

            <label htmlFor="firstName">FirstName</label>
            <input type="text" id="firstName" placeholder="Firstname" onChange={handleClick} name={firstname}/>
                
                
            </form>
        </>
    )
}
ReactDOM.render(<Simple1 />,document.getElementById('root'))




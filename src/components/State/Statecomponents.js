import { useState } from "react";

const StateComponent = (props) =>{
   const [title,setTitle] = useState(props.title);

   const updateClickHandler = () =>{
    setTitle("This is updated");
   }
   return(
    <div>
        <p> {title}</p>
        <button onClick= {updateClickHandler} >Click to update</button>
    </div>
   )
} ;
export default StateComponent;
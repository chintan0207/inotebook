import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) =>{

    const s1= {
        "name":"Chintan",
        "class":"10-f"
    }
    const [state, setstate] = useState(s1);
    
    const update = () =>{
        setTimeout(() => {
            setstate({
                "name":"chintu",
                "class":"12-b"
            })
            
        }, 2000);
    }
    return(
        <NoteContext.Provider value={{state:state,update:update}}>
        {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;
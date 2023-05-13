import React from "react";

const RemoveToggle = ({toggle, handleToggle}) => {
    return ( 
        <div onClick={handleToggle} className={toggle ? "remove remove-active" : "remove"}></div>
     );
}
 
export default RemoveToggle;
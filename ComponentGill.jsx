import React from "react";
function Gill({Name,Image,Role,Anchor})
{
    return(
        <div style={{ backgroundColor:' black',padding:20,color:'white'}}>
        <h1>Name:{Name}</h1>
        <img src={Image} width="200"/>
        <h3>Role:{Role}</h3>
        <a href={Anchor}>{Name}</a>
        </div>
    )
}

export default Gill
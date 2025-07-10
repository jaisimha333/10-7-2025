import React from "react";

function Movie({Movie,Genre,Photo})
{


    return(

        
        <div style={{backgroundColor:'black', padding:20,}}>
        <h2>Movie:{Movie}</h2>
        <h3>Genre:{Genre}</h3>
        <img src={Photo} width='200'></img>
        </div>

    )
}

export default Movie
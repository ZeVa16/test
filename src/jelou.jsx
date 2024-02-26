import React from "react";

import "./jelou.css"

function Saludo(props){
    return <article>
        <div className="image">
            <img src={props.image}alt="oli" />
        </div>
        <h1 className="titulo">{props.name}</h1>
        <p>{props.description}</p>
    </article>
    
}

export default Saludo;
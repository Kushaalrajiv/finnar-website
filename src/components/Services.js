import React from "react";


export default function Service(props){
    return(
        <div className="services-container">
            <h2 className="card-title">{props.title}</h2>
            <div className="cards">
                <img src={props.src} id="acc-img"/>
                <section id="card-data">{props.data} </section>
            </div>
        </div>
    );
}
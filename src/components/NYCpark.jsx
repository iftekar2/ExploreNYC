import React from 'react';

const Park = (props) =>{
    return (
        <div class={"park "+props.color}>
            <img class="park-image" src={props.image}></img>
            <h1 className="park-title">{props.name}</h1>
            <h3 class="location">{props.location}</h3>
            <p class="discription">{props.discription}</p>
            <button class="button">
                <a class="link" href={props.url} target="_blank">Learn More</a>
            </button>
        </div>

    )
}

export default Park; 
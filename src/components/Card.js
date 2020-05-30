import React from 'react';


const Card = (props) => {
    const {name, email, id} = props;
    return(
        <div className="bg-light-green dib tc br3 ma2 grow bw2 shadow5">
            <img src="" alt="robot" src={`https://robohash.org/${id}?200x200`}></img>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;
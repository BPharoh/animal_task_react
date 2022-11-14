import React from "react";


const Card = (props) => {

  return (
<div className="cardContainer"> 
<div className="card">
    <div>
      <img
      src={`https://source.unsplash.com/500x400/?${props.name}`}
       alt={props.name}/>
      <span className="remove" onClick={props.removeCard}>X</span>
    </div>
    <div>
      <h2>{props.name}</h2>
    </div>
    <div>
    <button className="dislike" onClick={props.removeLikes}>-</button>
    <span className="likeCount">{props.likes} 💚</span>
    <button className="like" onClick={props.addLikes}>+</button>
    </div>
  </div>
</div>
   
  );
};


export default Card;
import React from 'react';

const Item = props => {
  // console.log("props in Item:", props)
  return (
    <div onClick={() => props.toggleItem(props.item.id)} className={`item${props.item.purchased ? ' purchased' : ''}`}>
      <p>{props.item.name}</p>
    </div>
  );
};

export default Item;
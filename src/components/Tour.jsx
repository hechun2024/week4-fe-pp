import React from "react";

const Tour = ({ id, image, info, price, name, removeTour }) => {
  return (
    <article className="tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
        <p>{info}</p>
        {removeTour && (
          <button className="btn remove-btn" onClick={() => removeTour(id)}>
            not interested
          </button>
        )}
      </footer>
    </article>
  );
};

export default Tour;


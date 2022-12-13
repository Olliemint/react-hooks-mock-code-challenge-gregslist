import {useState} from "react";

function ListingCard({ product,onDelete }) {
  const [togglefav, setFav] = useState(false);


  const toggle = () =>  {
  setFav(!togglefav)
}

  
  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={product.image} alt={product.description} />
      </div>
      <div className="details">
        {togglefav ? (
          <button onClick={toggle} className="emoji-button favorite active">
            ★
          </button>
        ) : (
          <button onClick={toggle} className="emoji-button favorite">
            ☆
          </button>
        )}
        <strong>{product.description}</strong>
        <span> · {product.location}</span>
        <button onClick={()=> onDelete(product.id)} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;

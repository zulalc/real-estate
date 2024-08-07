import { Link } from "react-router-dom";
import "./Card.scss";

function Card({ item }) {
  return (
    <div className="card">
      <Link to={`/${item.id}`} className="imageContainer">
        <img src={item.img} alt="" />
      </Link>
      <div className="textContainer">
        <h2 className="title">
          <Link to={`/${item.id}`}>{item.title}</Link>
        </h2>
        <p className="adress">
          <img src="/pin.png" alt="" />
          <span>{item.address}</span>
        </p>
      </div>
      <p className="price">$ {item.price}</p>

      <div className="bottom">
        <div className="features">
          <div className="feature">
            <img src="/bed.png" alt="" />
            <span>{item.bedroom} bedroom</span>
          </div>
          <div className="feature">
            <img src="/bed.png" alt="" />
            <span>{item.bedroom} bedroom</span>
          </div>
        </div>
      </div>
      <div className="icons"></div>
    </div>
  );
}

export default Card;

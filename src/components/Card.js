import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from '@mui/material';

const Card = () => {
  return (
    <div className="card " style={{ width: '18rem' }}>
      <img
        src="https://placekitten.com/300/200"
        className="card-img-top"
        alt="Card image cap"
        style={{ height: '200px', objectFit: 'cover' }}
      />
      <div className="card-body ">
        <h5 className="card-title">Card Title</h5>
        <p className="card-text text-black">
          Some quick example text to build on the card title and make up the bulk of
          the card's content.
        </p>
        <Link className="btn btn-primary text-white">
          Go somewhere
        </Link>
      </div>
    </div>
  );
};
export default Card;
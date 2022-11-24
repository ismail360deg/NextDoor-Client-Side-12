import { Link } from 'react-router-dom';
import React from 'react';

const CardInfo = ({ product }) => {
    const { img, brand } = product;

    return (
        <div className="card w-96 mx-auto bg-gray-800  text-gray-50 shadow-2xl">
            <figure><img src={img} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title">{brand}</h2>
                <div className="card-actions justify-end">
                    <Link to={`/categories?brand=${brand}`} className="btn bg-lime-600">Details</Link>
                </div>
            </div>
        </div>
    );
};

export default CardInfo;
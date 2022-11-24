import React from 'react';
import { Link } from 'react-router-dom';

const Category = ({ product }) => {
    const { img, name, location, resalePrice, originalPrice, uses } = product;
    return (
        <div className="card w-96 mx-auto bg-gray-800  text-gray-50 shadow-2xl">
            <figure><img src={img} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>Location: {location}</p>
                <p>Resale Price: {resalePrice}</p>
                <p>Original Price: {originalPrice}</p>
                <p>Used: {uses}</p>
                <div className="card-actions justify-end">
                    <Link className="btn bg-lime-600">Purchase Now</Link>
                </div>
            </div>
        </div>
    );
};

export default Category;
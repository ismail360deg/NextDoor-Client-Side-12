import React from 'react';

const Category = ({ product, setCategory }) => {
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
                    <label
                        htmlFor="booking-modal"
                        className="btn bg-lime-600"
                        onClick={() => setCategory(product)}
                    >Purchase Now</label>
                </div>
            </div>
        </div>
    );
};

export default Category;
import React from 'react';

const CardInfo = ({ device }) => {
    const { img, name } = device
    return (
        <div>
            <div className="card w-96 bg-gray-800  text-gray-50 shadow-2xl">
                <figure><img src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <div className="card-actions justify-end">
                        <button className="btn bg-lime-600">Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardInfo;
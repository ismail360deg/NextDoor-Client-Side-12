import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import BookingModal from './BookingModal/BookingModal';
import Category from './Category';

const AllCategory = () => {
    const location = useLocation();
    const [products, setProduct] = useState([]);
    const [category, setCategory] = useState(null);

    useEffect(() => {
        if (location?.search) {
            axios.get(`http://localhost:5000/category${location?.search}`)
                .then(res => {
                    if (res.data) {
                        setProduct(res.data)
                    }
                })
                .catch(error => {
                    console.log(error)
                });
        }
    }, [location, products]);



    return (
        <>
            <div className='grid mt-8 gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-16 mx-auto'>
                {
                    products.map(product => <Category
                        key={product._id}
                        product={product}
                        setCategory={setCategory}
                    ></Category>)
                }
            </div>
            {
                category &&
                <BookingModal
                    category={category}
                    setCategory={setCategory}
                ></BookingModal>
            }
        </>

    );
};

export default AllCategory;
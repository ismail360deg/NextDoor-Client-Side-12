import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Category from './Category';

const AllCategory = () => {
    const location = useLocation();
    const [products, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (location?.search) {
            axios.get(`http://localhost:5000/category${location?.search}`)
                .then(res => {
                    if (res.data) {
                        setProduct(res.data)
                        console.log(res.data)
                        setLoading(false)
                    }
                })
                .catch(error => {
                    console.log(error)
                });

        }
    }, [location, products]);

    if (loading) {
        return <div className='w-full h-screen text-center pt-24 text-2xl'><p>Loading...</p></div>
    }


    return (
        <div className='grid mt-8 gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-16 mx-auto'>
            {
                products.map(product => <Category
                    key={product._id}
                    product={product}
                ></Category>)
            }
        </div>
    );
};

export default AllCategory;
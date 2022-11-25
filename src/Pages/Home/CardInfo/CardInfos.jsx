
import React from 'react';
import CardInfo from './CardInfo';

const CardInfos = () => {
    const products = [
        {
            img: "https://www.paklap.pk/pub/media/catalog/product/cache/7e76858baa02afd4bb6d466a87d0383e/r/e/red_15.jpg",
            brand: "HP"
        },
        {
            img: "https://aroz.com.bd/wp-content/uploads/2021/12/3-500x500-1.jpg",
            brand: "DELL"
        },
        {
            img: 'https://www.bdstall.com/asset/product-image/giant_12526.jpg',
            brand: "ACER"
        },
    ]


    return (
        <div className='grid mt-8 gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-16 mx-auto'>
            {
                products.map(product => <CardInfo
                    key={product._id}
                    product={product}
                ></CardInfo>)
            }
        </div>
    );
};

export default CardInfos;


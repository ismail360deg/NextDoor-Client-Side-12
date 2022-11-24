import React from 'react';
import CardInfo from './CardInfo';

const CardInfos = () => {
    const deviceInfo = [
        {
            id: 1,
            img: 'https://www.paklap.pk/pub/media/catalog/product/cache/7e76858baa02afd4bb6d466a87d0383e/r/e/red_15.jpg',
            name: 'HP',
        },
        {
            id: 2,
            img: 'https://aroz.com.bd/wp-content/uploads/2021/12/3-500x500-1.jpg',
            name: 'DELL',
        },
        {
            id: 3,
            img: 'https://www.bdstall.com/asset/product-image/giant_12526.jpg',
            name: 'ACER',
        },
    ]
    return (
        <div className='grid mt-8 gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-16 '>
            {
                deviceInfo.map(device => <CardInfo
                    key={device.id}
                    device={device}
                ></CardInfo>)
            }
        </div>
    );
};

export default CardInfos;
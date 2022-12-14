import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loading from '../../Loading/Loading';
import CardInfo from './CardInfo';

const CardInfos = () => {
    const { data: products, isLoading = [] } = useQuery({
        queryKey: ['cardInfo'],
        queryFn: async () => {
            const res = await fetch('https://next-door-client-server.vercel.app/cardInfo');
            const data = await res.json();
            return data
        }
    })

    if (isLoading) {
        return <Loading></Loading>
    }

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

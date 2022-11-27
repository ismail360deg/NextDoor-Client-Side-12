import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import Loading from '../../Loading/Loading';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);


const Payment = () => {
    const orders = useLoaderData();
    const navigation = useNavigation();
    console.log(orders);
    const { ProductName, price } = orders;
    console.log(orders)
    if (navigation.state === 'loading') {
        return <Loading></Loading>
    }

    return (
        <div>
            <h1 className='text-3xl mt-6'>Payment for {ProductName}</h1>
            <p className="text-xl">Please pay <strong>${price}</strong> for your orders  </p>
            <div className='w-96 my-6'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm
                        orders={orders}
                    >
                    </CheckoutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;
import React, { useContext, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../../contexts/AuthProvider';
import Loading from '../Loading/Loading';
import toast from 'react-hot-toast';
import ConfirmationModal from './ConfirmationModal/ConfirmationModal';
import { Link } from 'react-router-dom';

const AllOrders = () => {
    const { user } = useContext(AuthContext);

    const [deletingOrder, setDeletingOrder] = useState(null);

    const closeModal = () => {
        setDeletingOrder(null);
    }

    const url = `https://next-door-client-server.vercel.app/orders?email=${user?.email}`;

    const { data: orders = [], isLoading, refetch } = useQuery({
        queryKey: ['orders', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data;
        }
    });

    const handleDeleteOrder = order => {
        fetch(`https://next-door-client-server.vercel.app/orders/${order._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch();
                    toast.success(`Orders ${order.name} deleted successfully`)
                }

            })
    }

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <section className="bg-gray-100 text-gray-800 ">
            <h3 className="text-3xl p-6">All Buyers</h3>
            <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
                <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 ">
                    {
                        orders?.length && orders.map((order, i) => <p key={order._id}>
                            <div className="max-w-sm mx-auto bg-gray-50 h-[270px]  shadow-2xl rounded-2xl">
                                <div className="p-6 space-y-2">
                                    <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{order.ProductName}</h3>
                                    <p>Price: {order.price}</p>
                                    <p>Number: {order.phone}</p>
                                    <p>Location: {order.location}</p>
                                    <div className='flex mt-4'>
                                        {
                                            order.price && !order.paid &&
                                            <Link to={`/dashboard/payment/${order._id}`}>
                                                <button className='btn bg-lime-600 border-none '>Pay</button>
                                            </Link>
                                        }
                                        {
                                            order.price && order.paid && <span className='btn bg-lime-600 border-none text-white'
                                            >Paid</span>
                                        }
                                        <p>
                                            <label onClick={() => setDeletingOrder(order)}
                                                htmlFor="confirmation-modal" className='btn bg-red-600 border-none ml-4'>Delete </label>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </p>)
                    }

                </div>
                {
                    deletingOrder && <ConfirmationModal
                        title={`Are you sure you want to delete?`}
                        message={`If you delete ${deletingOrder.name}. It cannot be undone.`}
                        successAction={handleDeleteOrder}
                        successButtonName="Delete"
                        modalData={deletingOrder}
                        closeModal={closeModal}
                    >
                    </ConfirmationModal>
                }
            </div>
        </section>

    );
};

export default AllOrders;



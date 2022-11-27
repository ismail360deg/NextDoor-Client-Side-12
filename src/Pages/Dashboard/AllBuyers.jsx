import React, { useContext, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../../contexts/AuthProvider';
import Loading from '../Loading/Loading';
import toast from 'react-hot-toast';
import ConfirmationModal from './ConfirmationModal/ConfirmationModal';
import { Link } from 'react-router-dom';

const AllBuyers = () => {
    const { user } = useContext(AuthContext);

    const [deletingOrder, setDeletingOrder] = useState(null);

    const closeModal = () => {
        setDeletingOrder(null);
    }

    const url = `http://localhost:5000/orders?email=${user?.email}`;

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
        fetch(`http://localhost:5000/orders/${order._id}`, {
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
        <div>
            <h3 className="text-3xl mb-5">My Appointments</h3>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Number</th>
                            <th>Location</th>
                            <th>Payment</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders?.length && orders.map((order, i) => <tr key={order._id}>
                                <th>{i + 1}</th>
                                <td>{order.ProductName}</td>
                                <td>{order.price}</td>
                                <td>{order.phone}</td>
                                <td>{order.location}</td>
                                <td>
                                    {
                                        order.price && !order.paid &&
                                        <Link to={`/dashboard/payment/${order._id}`}>
                                            <button className='btn bg-lime-600 border-none'>Pay</button>
                                        </Link>
                                    }
                                    {
                                        order.price && order.paid && <span className='text-green-500'
                                        >Paid</span>
                                    }
                                </td>
                                <td>
                                    <label onClick={() => setDeletingOrder(order)}
                                        htmlFor="confirmation-modal" className='btn bg-red-600 border-none'>Delete </label>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
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
    );
};

export default AllBuyers;
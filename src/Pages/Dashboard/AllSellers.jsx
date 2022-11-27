import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import Loading from '../Loading/Loading';
import ConfirmationModal from './ConfirmationModal/ConfirmationModal';

const AllSellers = () => {
    const [deletingUser, setDeletingUser] = useState(null);

    const closeModal = () => {
        setDeletingUser(null);
    }

    const { data: users = [], isLoading, refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users');
            const data = await res.json();
            return data;
        }
    })

    const handleMakeAdmin = id => {
        fetch(`http://localhost:5000/users/admin/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Make admin successful.')
                    refetch();
                }
            })
    }

    const handleDeleteUser = user => {
        fetch(`http://localhost:5000/users/${user._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch();
                    toast.success(`User ${user.name} deleted successfully`)
                }

            })
    }

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <section className="bg-gray-100 text-gray-800 ">
            <h3 className="text-3xl p-6">All Users</h3>
            <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
                <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 ">
                    {
                        users.map((user, i) => <p key={user._id}>
                            <div className="max-w-sm mx-auto bg-gray-50 h-[150px] shadow-2xl rounded-2xl">
                                <div className="p-6 space-y-2">
                                    <h3 className="text-2xl font-semibold ">Name: {user.name}</h3>
                                    <p>Email: {user.email}</p>
                                    <div className='flex mt-4'>Admin
                                        {user?.role !== 'admin' && <button onClick={() => handleMakeAdmin(user._id)} className='btn btn-xs bg-lime-600 border-none ml-4'>Make Admin</button>}
                                        <p>

                                            <label onClick={() => setDeletingUser(user)}
                                                htmlFor="confirmation-modal" className='btn ml-4 btn-xs bg-lime-600 border-none'>Delete </label>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </p>)
                    }

                </div>
                {
                    deletingUser && <ConfirmationModal
                        title={`Are you sure you want to delete?`}
                        message={`If you delete ${deletingUser.name}. It cannot be undone.`}
                        successAction={handleDeleteUser}
                        successButtonName="Delete"
                        modalData={deletingUser}
                        closeModal={closeModal}
                    >
                    </ConfirmationModal>
                }
            </div>
        </section >
    );
};

export default AllSellers;

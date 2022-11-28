import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import Loading from '../Loading/Loading';
import ConfirmationModal from './ConfirmationModal/ConfirmationModal';

const MyProducts = () => {

    const [deletingProduct, setDeletingProduct] = useState(null);

    const closeModal = () => {
        setDeletingProduct(null);
    }

    const { data: myProducts, isLoading, refetch } = useQuery({
        queryKey: ['myProducts'],
        queryFn: async () => {
            try {
                const res = await fetch('https://next-door-client-server.vercel.app/myProducts', {
                    headers: {
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    }
                })
                const data = await res.json();
                return data;
            }
            catch (error) {

            }
        }
    });

    const handleDeleteProduct = product => {
        fetch(`https://next-door-client-server.vercel.app/myProducts/${product._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch();
                    toast.success(`Product ${product.name} deleted successfully`)
                }

            })
    }

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <section className="bg-gray-100 text-gray-800 ">
            <h3 className="text-3xl p-6">My Products: {myProducts?.length}</h3>
            <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
                <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 ">
                    {
                        myProducts.map((product, i) => <p key={product._id}>
                            <div className="max-w-sm mx-auto bg-gray-50 h-[500px] shadow-2xl rounded-2xl">
                                <div className="p-6 space-y-2">
                                    <figure><img className='rounded-2xl' src={product.image} alt="" /></figure>
                                    <h3 className="text-2xl font-semibold ">Name: {product.name}</h3>
                                    <p>Price: {product.price}</p>
                                    <p>Condition: {product.condition}</p>
                                    <p>Number: {product.number}</p>
                                    <p>Location: {product.location}</p>

                                    <div className='flex mt-4'>
                                        <label onClick={() => setDeletingProduct(product)} htmlFor="confirmation-modal" className="btn btn-sm bg-red-600 border-none">Delete</label>
                                        <p>
                                            <button className="btn btn-sm border-none bg-lime-600 ml-4">Advertised</button>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </p>)
                    }

                </div>
                {
                    deletingProduct && <ConfirmationModal
                        title={`Are you sure you want to delete?`}
                        message={`If you delete ${deletingProduct.name}. It cannot be undone.`}
                        successAction={handleDeleteProduct}
                        successButtonName="Delete"
                        modalData={deletingProduct}
                        closeModal={closeModal}
                    >
                    </ConfirmationModal>
                }
            </div>
        </section >
    );
};

export default MyProducts;


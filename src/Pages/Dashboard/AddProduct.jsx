import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Loading from '../Loading/Loading';

const AddProduct = () => {
    const [isLoading, setIsLoading] = useState('');
    const { register, formState: { errors }, handleSubmit } = useForm();

    const imageHostKey = process.env.REACT_APP_imgbb_key;

    const navigate = useNavigate();

    const handleAddDoctor = data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {

                if (imgData.success) {
                    console.log(imgData.data.url);
                    const myProduct = {
                        name: data.name,
                        price: data.price,
                        condition: data.condition,
                        number: data.number,
                        location: data.location,
                        image: imgData.data.url
                    }

                    fetch('https://next-door-client-server.vercel.app/myProducts', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(myProduct)
                    })
                        .then(res => res.json())
                        .then(result => {
                            console.log(result);
                            toast.success(`${data.name}is added successfully`);
                            navigate('/dashboard/myProducts')
                        })
                }
            })
    }

    if (isLoading) {
        return <Loading></Loading>
    }


    return (
        <div className='w-96 p-7 shadow-2xl rounded-2xl mx-auto mt-8 '>
            <h2 className="text-4xl">Add A Product</h2>
            <form onSubmit={handleSubmit(handleAddDoctor)}>

                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Name</span></label>
                    <input type="text" {...register("name", {
                        required: "Name is Required"
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Price</span></label>
                    <input type="text" {...register("price", {
                        required: "Price is Required"
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.price && <p className='text-red-500'>{errors.price.message}</p>}
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Condition</span></label>
                    <select
                        {...register('condition')}
                        className="select input-bordered w-full max-w-xs">
                        <option>Good</option>
                        <option>Excellent</option>
                        <option>Fair</option>
                    </select>
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Number</span></label>
                    <input type="text" {...register("number", {
                        required: "Name is Required"
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.number && <p className='text-red-500'>{errors.number.message}</p>}
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Location</span></label>
                    <input type="text" {...register("location", {
                        required: true
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.location && <p className='text-red-500'>{errors.location.message}</p>}
                </div>


                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Photo</span></label>
                    <input type="file" {...register("image", {
                        required: "Photo is Required"
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.image && <p className='text-red-500'>{errors.image.message}</p>}
                </div>

                <input className='btn border-none bg-lime-600 w-full mt-4' value="Add A Product" type="submit" />
            </form>
        </div>
    );
};

export default AddProduct;
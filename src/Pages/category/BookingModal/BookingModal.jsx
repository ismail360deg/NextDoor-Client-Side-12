import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider'

const BookingModal = ({ category, setCategory }) => {
    const { user } = useContext(AuthContext);
    const { brand, name, resalePrice } = category;

    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const productName = form.productName.value;
        const price = form.price.value;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const location = form.location.value;
        const booking = {
            ProductName: productName,
            price: price,
            Name: name,
            email,
            phone,
            location
        }
        console.log(booking);
        setCategory(null);
    }
    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal ">
                <div className="modal-box relative bg-gray-800  text-gray-500">
                    <label htmlFor="booking-modal" className="btn bg-lime-600 btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-white text-3xl text-center">{brand}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10 '>
                        <input name="productName" type="text" disabled value={name} className="input w-full input-bordered " />

                        <input name="price" type="text" disabled value={resalePrice} className="input w-full input-bordered " />

                        <input name="name" type="text" defaultValue={user?.displayName} disabled placeholder="Your Name" className="input w-full input-bordered" />

                        <input name="email" type="email" defaultValue={user?.email} disabled placeholder="Email Address" className="input w-full input-bordered" />

                        <input name="phone" type="text" placeholder="Phone Number" className="input w-full input-bordered" />

                        <select name="location" placeholder="Location" className="select select-bordered w-full text-gray-500">
                            <option>Cumilla</option>
                            <option>Chittagong</option>
                            <option>Dhaka</option>
                        </select>
                        <br />
                        <input className='btn bg-lime-600 w-full' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;
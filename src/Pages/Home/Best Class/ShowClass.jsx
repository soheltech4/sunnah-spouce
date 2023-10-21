import React from 'react';
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
import Button from '../../Button/Button';

const ShowClass = ({ item }) => {
    const { Title, InstructorName, Thumbnail, Enroll, Seat, Rating: itemRating } = item

    return (
        <div className='p-2' alt="Click for show details">
            <div className="w-auto glass card">
                <figure ><img src={Thumbnail} className='w-full' /></figure>
                <div className="p-2">
                    <div className=''>
                        <h2 className="text-lg font-bold">{Title}</h2>
                    </div>
                    <p className='text-sm'>{InstructorName}</p>
                    <p className='text-sm'>Total Seat : {Seat}</p>
                    <p className='text-sm'>Available Seat : {Seat - Enroll}</p>
                    <div className="card-actions flex justify-between items-center">
                        <Rating
                            style={{ maxWidth: 100 }}
                            readOnly
                            value={itemRating}
                        />
                        <Button title="ADD CART" item={item}></Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShowClass;
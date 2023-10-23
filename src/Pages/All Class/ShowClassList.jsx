import { Rating } from '@smastrom/react-rating';
import React from 'react';
import '@smastrom/react-rating/style.css'
import Button from '../Button/Button';
import { Link } from 'react-router-dom';

const ShowClassList = ({ item }) => {
    const {_id, Title, InstructorName, Thumbnail, Enroll, Seat, Rating: itemRating, Description } = item
    return (
        <div className="glass rounded-lg">
            <div className="md:flex ">
                <figure className='' >
                    <Link to={`/allclass/${_id}`}>
                        <img src={Thumbnail} className='rounded-lg' />
                    </Link>
                    {Seat - Enroll == 0 ?
                        <>
                            <p className='absolute bg-purple-600 top-0 left-0 m-2 px-2 text-white rounded-lg'>Not Available</p>
                        </>
                        :
                        <>
                        </>
                    }
                </figure>

                <div className='p-2 grid grid-cols-1 justify-between'>
                    <div>
                        <h1 className="text-xl font-bold">{Title}</h1>
                        <p className="text-lg my-3">Instructor: {InstructorName}</p>
                        <p className="">{Description}</p>
                        <div className='flex my-3 justify-between'>
                            <p className='text-sm'>Total Seat : <span className='font-bold'>{Seat}</span></p>
                            <p className='text-sm'>Available Seat : <span className='font-bold'>{Seat - Enroll}</span></p>
                        </div>
                    </div>
                    <div className="card-actions flex justify-between items-center">
                        <Rating
                            style={{ maxWidth: 100 }}
                            readOnly
                            value={itemRating}
                        />
                        <Button title="ADD TO CART" item={item}></Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShowClassList;
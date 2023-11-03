import React from 'react';

const ShowMyDetails = ({ user }) => {
    const { gender, name, date_of_birth, education, permanent_address, present_address, complexion, height, blood_group, marital_status, weight, contact, indexOf } = user

    return (
        <div>
            <div className="card w-[340px] glass shadow-md hover:shadow-xl">
                <figure className='bg-purple-700 p-2 text-white'>
                    {gender === "Male" ?
                        <div className='grid grid-cols-1'>
                            <img src="https://i.ibb.co/QYybbm4/male-icon.png" className='w-40 relative left-2  border-2 rounded-full border-black p-2' alt="" />
                            <h1 className='text-2xl font-semibold'>Biodata Number</h1>
                            <p className='text-xl text-center font-semibold'>SSM {indexOf}</p>
                        </div>
                        :
                        <div className='grid grid-cols-1'>
                            <img src="https://i.ibb.co/gdh5Rb4/female-icon.png" className='w-40 relative left-2  border-2 rounded-full border-black p-2' alt="" />
                            <h1 className='text-2xl font-semibold'>Biodata Number</h1>
                            <p className='text-xl text-center font-semibold'>SSF {indexOf}</p>
                        </div>
                    }
                </figure>
                <div className="card-body justify-center items-center">
                    <div className='grid grid-cols-2 justify-between gap-32 items-center'>
                        <h1>Gender</h1>
                        <p>{gender}</p>
                    </div>
                    <div className='grid grid-cols-2 justify-between gap-32 items-center'>
                        <h1>Gender</h1>
                        <p>{gender}</p>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default ShowMyDetails;
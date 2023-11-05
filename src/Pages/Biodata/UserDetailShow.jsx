import React from 'react';

const UserDetailShow = ({user}) => {
    const { gender, name, date_of_birth, education, permanent_address, present_address, complexion, height, blood_group, marital_status, weight, contact, indexOf } = user

    return (
        <div className='md:flex gap-x-32 gap-y-5 px-20'>
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
                <div className="flex justify-center items-center text-black">
                    <div className='px-5 text-center py-1 font-semibold'>
                        <h1 className='border px-5 border-l-0 my-2 border-black'>Gender</h1>
                        <h1 className='border px-2 border-l-0 my-2 border-black'>Marital Staus</h1>
                        <h1 className='border px-5 border-l-0 my-2 border-black'>Birth Date</h1>
                        <h1 className='border px-5 border-l-0 my-2 border-black'>Height</h1>
                        <h1 className='border px-5 border-l-0 my-2 border-black'>Complexion</h1>
                        <h1 className='border px-3 border-l-0 my-2 border-black'>Blood Group</h1>
                        <h1 className='border px-5 border-l-0 my-2 border-black'>Nationality</h1>
                    </div>
                    <div className='px-5 text-center py-1 font-semibold'>
                        <h1 className='border px-5 border-r-0 my-2 border-black'>{gender}</h1>
                        <h1 className='border px-2 border-r-0 my-2 border-black'>{marital_status}</h1>
                        <h1 className='border px-5 border-r-0 my-2 border-black'>{date_of_birth?.slice(0, 4)}</h1>
                        <h1 className='border px-5 border-r-0 my-2 border-black'>{height}</h1>
                        <h1 className='border px-5 border-r-0 my-2 border-black'>{complexion}</h1>
                        <h1 className='border px-5 border-r-0 my-2 border-black'>{blood_group}</h1>
                        <h1 className='border px-5 border-r-0 my-2 border-black'>Bangladeshi</h1>
                    </div>
                </div>
            </div>
            <div className="w-full text-black p-5 mt-0 ">
                <div className='bg-gray-500 bg-opacity-25 p-5 mb-5 md:p-5 rounded-lg w-full'>
                    <h1 className='text-2xl text-center pb-2'>Address</h1>
                    <div className=' md:p-5 rounded-lg w-full'>
                        <div className='flex justify-start items-start bg-white rounded-md p-2 my-2 md:gap-x-52 '>
                            <div className='font-semibold'>
                                <h1>Permanent Address</h1>
                            </div>
                            <div className=''>
                                <h1>{permanent_address?.address}, {permanent_address?.Police_station}, {permanent_address?.District}</h1>
                            </div>
                        </div>
                        <div className='flex bg-white rounded-md p-2 my-2 md:gap-x-52 '>
                            <div className='font-semibold'>
                                <h1>Present Address</h1>
                            </div>
                            <div className=''>
                                <h1>{present_address}</h1>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='bg-gray-500 bg-opacity-25 mb-5 p-5 md:p-5 rounded-lg w-full'>
                    <h1 className='text-2xl text-center pb-2'>Educatoional Qualification</h1>
                </div>
                <div className='bg-gray-500 bg-opacity-25 p-5 mb-5 md:p-5 rounded-lg w-full'>
                    <h1 className='text-2xl text-center pb-2'>Family Information</h1>
                </div>
                <div className='bg-gray-500 bg-opacity-25 p-5 md:p-5 mb-5 rounded-lg w-full'>
                    <h1 className='text-2xl text-center pb-2'>Personal Information</h1>
                </div>
            </div>
        </div >
    );
};

export default UserDetailShow;
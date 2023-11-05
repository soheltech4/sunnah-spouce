import React from 'react';
import { Link } from 'react-router-dom';

const ShowBiodata = ({ user }) => {
    const { _id, gender, name, date_of_birth, education, permanent_address, present_address, complexion, height, blood_group, marital_status, weight, contact, indexOf } = user
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
                <div className="card-body">
                    <table className="table-xs">
                        <thead className=' text-black'>
                            <tr>
                                <th className=' border border-l-0 border-t-0 border-black'>Birth Year</th>
                                <th className=' border border-l-0 border-t-0 border-black'>Height</th>
                                <th className=' border border-r-0 border-t-0 border-black'>Complexion</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='text-lg text-center border-b-0 text-black border border-l-0 border-black'>{date_of_birth.slice(0,4)}</td>
                                <td className='text-lg text-center border-b-0 text-black border border-l-0 border-black'>{height}</td>
                                <td className='text-lg text-center border-b-0 text-black border border-r-0 border-black'>{complexion}</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="card-actions justify-center mt-5 ">
                        <Link to={`/users/${_id}`}>
                        <button class="relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500">
                            <span class="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700"></span>
                            <span class="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
                            <span class="relative text-white ">Full Biodata</span>
                        </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default ShowBiodata;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const InstructorShow = ({ teacher }) => {
    const {_id, photo, name } = teacher;
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className='p-2 relative text-center' onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            <figure>
                <img className='w-full' src={photo} alt="" />
                <p className='absolute bg-opacity-20 bottom-16 left-0 right-0 m-2 text-xl text-white rounded uppercase'>{name}</p>
                {isHovered && (
                    <div className='absolute bottom-5 left-0 right-0 m-2 text-xl'>                           
                            <Link to={`/allinstructor/${_id}`} class="relative px-5 py-2 font-medium text-white group">
                                <span class="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-purple-500 group-hover:bg-purple-700 group-hover:skew-x-12"></span>
                                <span class="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-purple-700 group-hover:bg-purple-500 group-hover:-skew-x-12"></span>
                                <span class="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-purple-600 -rotate-12"></span>
                                <span class="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-purple-400 -rotate-12"></span>
                                <span class="relative">View Details</span>
                            </Link>
                    </div>
                )}
            </figure>
        </div>
    );
};

export default InstructorShow;

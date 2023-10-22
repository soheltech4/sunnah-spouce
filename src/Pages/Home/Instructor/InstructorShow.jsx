import React, { useState } from 'react';

const InstructorShow = ({ teacher }) => {
    const { photo, name } = teacher;
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className='p-2 relative text-center' onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            <figure>
                <img className='w-full' src={photo} alt="" />
                <p className='absolute bg-opacity-20 top-96 left-0 right-0 m-2 text-xl text-white rounded uppercase'>{name}</p>
                {isHovered && (
                    <div>
                        <p className='absolute bg-opacity-20 duration-2000 bottom-14 left-0 right-0 m-2 text-xl text-white rounded uppercase'>{name}</p>
                        <button className='absolute top-96 left-0 duration-2000 right-0 m-2 text-xl bg-purple-600'>View More
                        
                        </button>
                    </div>
                )}
            </figure>
        </div>
    );
};

export default InstructorShow;

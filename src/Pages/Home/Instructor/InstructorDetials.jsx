import React from 'react';
import { useLoaderData } from 'react-router-dom';
import InstructorDetailsShow from './InstructorDetailsShow';

const InstructorDetials = () => {

const insturctors = useLoaderData([])


    return (
        <div className='pt-20'>
            {
                insturctors.map(instructor => <InstructorDetailsShow key={instructor?._id} instructor={instructor}></InstructorDetailsShow> )
            }
        </div>
    );
};

export default InstructorDetials;
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ClassDetailsShow from './ClassDetailsShow';

const ClassDetails = () => {

    const items = useLoaderData([])
    console.log(items)

    return (
        <div className='pt-20'>
            {items.map(item => <ClassDetailsShow item={item} ></ClassDetailsShow>)}
        </div>
    );
};

export default ClassDetails;
import React from 'react';
import UserDetailShow from './UserDetailShow';
import { useLoaderData } from 'react-router-dom';

const UserDetails = () => {
    const Users = useLoaderData([])
    console.log(Users)
    return (
            <div className='pt-20'>
            {
                Users.map(user => <UserDetailShow key={user?._id} user={user}></UserDetailShow> )
            }
        </div>
    );
};

export default UserDetails;
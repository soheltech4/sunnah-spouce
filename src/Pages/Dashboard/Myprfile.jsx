import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

const Myprfile = () => {
    const {user} = useContext(AuthContext)

    return (
        <div>
            <p>{user?.displayName}</p>
        </div>
    );
};

export default Myprfile;
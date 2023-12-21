import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import ShowMyDetails from './ShowMyDetails';

const Myprfile = () => {
    const {user} = useContext(AuthContext)
    const [users, setUsers] = useState([])


    useEffect(() => {
        fetch('https://sunnahspouse-server.vercel.app/users')
            .then(res => res.json())
            .then(data => {
                const filterData = data.filter(d => d.email === user.email)
                setUsers(filterData)
            })
    }, [])

    console.log(users)

    return (
        <div>
            {users.map(user=><ShowMyDetails key={user?._id} user={user}></ShowMyDetails>)

            }
        </div>
    );
};

export default Myprfile;
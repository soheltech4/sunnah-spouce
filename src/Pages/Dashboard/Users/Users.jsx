import React, { useEffect, useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useCart from '../../../Hooks/useCart';

const Users = () => {
    const [users, setUsers] = useState([])
    const [cart, refetch] = useCart()

    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])


    const handleDelete = user => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/users/${user?._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch()
                            Swal.fire(
                                'Deleted!',
                                'Your Class has been deleted.',
                                'success'
                            )
                        }
                    })

            }
        })
    }

    return (
        <div className='w-full h-full md:p-10 pt-10 text-lg'>
            {users ?
                <>
                    <div className='relative md:flex justify-evenly lg:flex-row-reverse gap-x-24 rounded-md  px-10 '>
                        <div className="overflow-x-auto  bg-purple-200 shadow-md bg-opacity-25 w-full rounded-lg">
                            <table className="table tex- ">
                                <thead>
                                    <tr className='text-center text-lg'>
                                        <th>#</th>
                                        <th>Photo</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody className='text-center text-lg bg-purple-100 '>
                                    {
                                        users.map((user, indexOf) =>
                                            <tr key={user?._id}>
                                                <td>
                                                    <h1>{indexOf + 1}</h1>
                                                </td>
                                                <td>
                                                    <div className="avatar">
                                                        <div className="mask mask-square w-12 h-12">
                                                            <img src={user?.photoURL} className='' alt="Avatar Tailwind CSS Component" />
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <p>{user?.name}</p>
                                                </td>
                                                <td>{user?.email}</td>
                                                <td>
                                                    <button onClick={() => handleDelete(user)}>
                                                        <FaTrashAlt className='h-5 text-red-700'></FaTrashAlt>
                                                    </button>
                                                </td>
                                            </tr>
                                        )
                                    }
                                </tbody>

                            </table>
                        </div>
                    </div>
                </>
                :
                <>
                    <h1 className='text-center uppercase justify-center items-center flex'>No User Found</h1>

                </>

            }
        </div>
    );
};

export default Users;
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import 'react-tabs/style/react-tabs.css';
import { ToastContainer, toast } from 'react-toastify';
import { useEffect } from 'react';

const Editbiodata = () => {
    const { user } = useContext(AuthContext)
    const [users, setUsers] = useState([])

    const handleSubmit = event => {
        event.preventDefault()
        const form = event.target
        const name = form.name.value
        const email = form.email.value
        const gender = form.gender.value
        const date_of_birth = form.date_of_birth.value
        const height = form.height.value
        const marital_status = form.marital_status.value
        const complexion = form.complexion.value
        const blood_group = form.blood_group.value
        const nationality = form.nationality.value
        const address = form.address.value
        const Police_station = form.Police_station.value
        const District = form.District.value
        const permanent_address = { address, Police_station, District }
        const present_address = form.present_address.value
        const newUser = { name, permanent_address, present_address, email, gender, date_of_birth, height, complexion, blood_group, nationality, marital_status }
        console.log(newUser)
        fetch('https://sunnahspouse-server.vercel.app/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newUser),
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    toast.success('Data Save Successfully', {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                }
            })
    };

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
        <form onSubmit={handleSubmit}>
            <div className="w-full justify-center md:p-5 mt-0">
                <div className='bg-gray-500 bg-opacity-25 p-5 md:p-5 rounded-lg w-full'>
                    <h1 className='text-3xl text-center pb-5'>General Info</h1>
                    <div >
                        <div className='grid md:grid-cols-3 gap-5'>
                            <div className="form-control w-full ">
                                <p className='pl-1'>Your Name</p>
                                <input type="text" name='name' defaultValue={user?.displayName} placeholder="Your Name" className="input input-bordered w-full " />
                            </div>
                            <div className="form-control w-full ">
                                <p className='pl-1'>Your Email</p>
                                <input type="email" name='email' defaultValue={user?.email} placeholder="Email" className="input input-bordered w-full " />
                            </div>
                            <div className="form-control w-full ">
                                <p className='pl-1'>Gender</p>
                                <select type="text" name='gender' defaultValue={users.map(user => user.gender)} className="input input-bordered w-full ">
                                    <option >Select Gender</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </select>
                            </div>
                            <div className="form-control w-full ">
                                <p className='pl-1'>Marital Status</p>
                                <select type="text" name='marital_status' defaultValue={users.map(user => user?.marital_status)} className="input input-bordered w-full ">
                                    <option >Select Marital Status</option>
                                    <option value="Married">Married</option>
                                    <option value="Unmarried">Unmarried</option>
                                    <option value="Divorced">Divorced</option>
                                    <option value="Widow">Widow</option>
                                    <option value="Widower">Widower</option>
                                </select>
                            </div>
                            <div className="form-control w-full ">
                                <p className='pl-1'>Date of Birth</p>
                                <input type="date" name='date_of_birth' defaultValue={users.map(user => user?.date_of_birth)} className="input input-bordered w-full " />
                            </div>
                            <div className="form-control w-full ">
                                <p className='pl-1'>Height</p>
                                <input type="text" name='height' defaultValue={users.map(user => user?.height)} placeholder="Height" className="input input-bordered w-full " />
                            </div>
                            <div className="form-control w-full ">
                                <p className='pl-1'>Complexion</p>
                                <select type="text" name='complexion' defaultValue={users.map(user => user?.complexion)} className="input input-bordered w-full ">
                                    <option >Select Complexion</option>
                                    <option value="Brown">Brown</option>
                                    <option value="Black">Black</option>
                                    <option value="Light White">Light White</option>
                                    <option value="Fair">Fair</option>
                                    <option value="Very Fair">Very Fair</option>
                                </select>
                            </div>
                            <div className="form-control w-full ">
                                <p className='pl-1'>Blood Group</p>
                                <select type="text" name='blood_group' defaultValue={users.map(user => user?.blood_group)} className="input input-bordered w-full ">
                                    <option >Select Blood Group</option>
                                    <option value="A+">A+</option>
                                    <option value="A-">A-</option>
                                    <option value="B+">B+</option>
                                    <option value="B-">B-</option>
                                    <option value="AB+">AB+</option>
                                    <option value="AB-">AB-</option>
                                    <option value="O">O</option>
                                    <option value="O-">O-</option>
                                    <option value="Fair">Fair</option>
                                    <option value="Very Fair">Very Fair</option>
                                </select>
                            </div>
                            <div className="form-control w-full ">
                                <p className='pl-1'>Nationality</p>
                                <select type="text" name='nationality' defaultValue={users.map(user => user?.nationality)} className="input input-bordered w-full ">
                                    <option value="Bangladeshi">Bangladeshi</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='md:p-5 w-full'>
                <div className='bg-gray-500 bg-opacity-25 p-5 md:p-5 rounded-lg w-full'>
                    <h1 className='text-3xl text-center pb-5'>Address</h1>
                    <div >
                        <div className='grid md:grid-cols-2 gap-5'>
                            <div className="form-control w-full gap-y-2 ">
                                <p className='pl-1'>Your Permanent Address</p>
                                <input type="text" name='address' defaultValue={users.map(user => user?.permanent_address?.address)} placeholder="Address" className="input input-bordered w-full " />
                                <input type="text" name='Police_station' defaultValue={users.map(user => user?.permanent_address?.Police_station)} placeholder="Police Station" className="input input-bordered w-full " />
                                <input type="text" name='District' defaultValue={users.map(user => user?.permanent_address?.District)} placeholder="District" className="input input-bordered w-full " />
                            </div>
                            <div className="form-control w-full gap-y-2 ">
                                <p className='pl-1'>Your Present Address</p>
                                <input type="text" name='present_address' defaultValue={users.map(user => user?.present_address)} placeholder="Present Address" className="input input-bordered h-full w-full " />
                            </div>
                        </div>
                    </div>
                </div>
                <input type="submit" value='Save Data' class="relative text-white w-full mt-5 inline-flex items-center justify-center bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700 p-4 px-5 py-3 overflow-hidden font-medium  transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500"/>
                <ToastContainer />
            </div>
        </form>
    );
};

export default Editbiodata;
import React, { useEffect, useState } from 'react';
import ShowBiodata from './ShowBiodata';

const Biodata = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        fetch('https://sunnahspouse-server.vercel.app/users')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])

    console.log(users)

    return (
        <div className='flex flex-row-reverse mt-5'>
            <div>
                <div>
                    <p className='text-center text-2xl font-bold uppercase'>Biodatas</p>
                    <h1 className='text-center text-2xl mb-5'>{users.length}</h1>
                </div>
                <div className='grid md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-8'>
                    {
                        users.map(user => <ShowBiodata user={user}></ShowBiodata>)
                    }
                </div>
            </div>
            <div className="drawer w-1/5 lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <label className="flex-none lg:hidden">
                    <label htmlFor="my-drawer-2" aria-label="open sidebar" className="btn btn-square btn-ghost">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                    </label>
                </label>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu text-lg min-h-full bg-purple-200 text-base-content">
                        <div className='p-5 pl-10 grid grid-cols-2 justify-between items-center'>
                            <p className='uppercase font-bold text-2xl'></p>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Biodata;
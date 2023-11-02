import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../Provider/AuthProvider';

const Editbiodata = () => {
    const {user} = useContext(AuthContext)
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        const formData = new FormData();
        console.log(formData)
    };



    return (
        <div className='w-3/4'>
            <div className='bg-gray-500 bg-opacity-25 p-5 md:p-10 rounded-lg w-full'>
                <h1 className='text-3xl text-center pb-10'>General Info</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='grid grid-cols-2 gap-5'>
                        <div className="form-control w-full ">
                            <input type="text" {...register("userName", { required: true })} defaultValue={user?.displayName} placeholder="Your Name" required className="input input-bordered w-full " />
                        </div>
                        <div className="form-control w-full ">
                            <input type="email" {...register("email", { required: true })} defaultValue={user?.email} placeholder="Email" className="input input-bordered w-full " />
                        </div>
                        <div className="form-control w-full ">
                            <input type="text" placeholder="Toy Name" {...register("name", { required: true })} className="input input-bordered w-full " />
                        </div>
                    </div>
                    <div className="form-control py-5">
                        <textarea className="textarea textarea-bordered h-24" {...register("description", { required: true })} placeholder="Description"></textarea>
                    </div>
                    <div className='flex justify-between'>
                        <div className="form-control w-full max-w-xs">
                            <input type="file" {...register("image", { required: true })} className="file-input file-input-bordered w-full max-w-xs" />
                        </div>
                        <input className='relative px-5 hover:bg-indigo-950 inline-flex items-center justify-center overflow-hidden font-medium text-white transition duration-300 ease-out border-2 border-white rounded-full shadow-md group' type="submit" value="SAVE DATA">
                        </input>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Editbiodata;
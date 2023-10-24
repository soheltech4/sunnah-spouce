import React from 'react';

const AddClass = () => {

    const onSubmit = (data) => {
        const formData = new FormData();
        formData.append('image', data.image[0]);
    
        fetch(img_hoisting_url, {
            method: 'POST',
            body: formData,
        })
            .then((res) => res.json())
            .then((imgRes) => {
                if (imgRes.success) {
                    const image = imgRes?.data?.display_url;
                    const { category, description, email, name, price, rating, userName } = data;
                    const newToy = { category, description, email, name, price: parseFloat(price), rating: parseFloat(rating), userName, image };
                    console.log(newToy);
                    fetch('https://robotechtoy-server.up.railway.app/products', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(newToy),
                    })
                        .then((res) => res.json())
                        .then((data) => {
                            if (data.insertedId) {
                                Swal.fire({
                                    position: 'top-end',
                                    icon: 'success',
                                    title: 'Toy Added Successfully',
                                    showConfirmButton: false,
                                    timer: 1500,
                                });
                            } 
                        })
                        .catch((error) => {
                            console.error('Error:', error);
                        });
                    }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };




    return (
        <div>
            <div className='w-3/4'>
                <div className='bg-gray-500 bg-opacity-25 p-5 md:p-10 rounded-lg w-full'>
                    <h1 className='text-3xl text-center pb-10'>ADD TOY</h1>
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
                            <div className="form-control w-full ">
                                <input type="number" placeholder="Toy Price" {...register("price", { required: true })} className="input input-bordered w-full " />
                            </div>
                            <div className="form-control w-full ">
                                <input type="number" placeholder="Rating" {...register("rating", { required: true })} className="input input-bordered w-full " />
                            </div>
                            <select defaultValue="Select One" {...register("category", { required: true })} className="select select-bordered w-full ">
                                <option disabled selected>Toy Categories</option>
                                {
                                    products.map((product, indexOf) => <option key={indexOf}>{product}</option>)
                                }
                            </select>
                        </div>
                        <div className="form-control py-5">
                            <textarea className="textarea textarea-bordered h-24" {...register("description", { required: true })} placeholder="Description"></textarea>
                        </div>
                        <div className='flex justify-between'>
                            <div className="form-control w-full max-w-xs">
                                <input type="file" {...register("image", { required: true })} className="file-input file-input-bordered w-full max-w-xs" />
                            </div>
                            <input className='relative px-5 hover:bg-indigo-950 inline-flex items-center justify-center overflow-hidden font-medium text-white transition duration-300 ease-out border-2 border-white rounded-full shadow-md group' type="submit" value="ADD TOY">
                            </input>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddClass;
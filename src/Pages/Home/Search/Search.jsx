import React from 'react';

const Search = () => {
    return (
        <div className='relative -top-96 m-10 text-black md:flex justify-between items-center border rounded-lg bg-white bg-opacity-80 md:px-20 px-10 md:py-14 py-5'>
            <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text text-lg font-semibold">Looking for</span>
                </label>
                <select className="select select-bordered w-full">
                    <option selected>All</option>
                    <option>Male Biodata</option>
                    <option>Female Biodata</option>
                </select>
            </div>
            <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text text-lg font-semibold">Maritial Status</span>
                </label>
                <select className="select select-bordered w-full">
                    <option selected>All</option>
                    <option>Unmarried</option>
                    <option>Married</option>
                    <option>Divorced</option>
                    <option>Widow</option>
                </select>
            </div>
            <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text text-lg font-semibold">Permanent Address</span>
                </label>
                <select className="select select-bordered w-full">
                    <option selected>All</option>
                    <option>Dhaka</option>
                    <option>Tangail</option>
                    <option>Chittagong</option>
                    <option>Jamalpur</option>
                </select>
            </div>
            <div className="form-control w-full max-w-xs md:mt-6">
                <label className="label">
                    <span className="label-text text-lg font-semibold"></span>
                </label>
                <button className='btn btn-primary w-full'>SEARCH</button>
            </div>
        </div>
    );
};

export default Search;
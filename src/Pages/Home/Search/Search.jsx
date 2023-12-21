import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Search = () => {
    const [Genders, setGenders] = useState([])
    const [Marital, setMarital] = useState([])
    const [District, setDistrict] = useState([])
    const [GenderChange, setGendersChange] = useState("All")
    const [MaritalChange, setMaritalChange] = useState("All")
    const [DistrictChange, setDistrictChange] = useState("All")

    useEffect(() => {
        fetch('https://sunnahspouse-server.vercel.app/users')
            .then(res => res.json())
            .then(data => {
                const uniqueGenders = Array.from(
                    new Set(data.map((gender) => gender.gender))
                );
                setGenders(uniqueGenders);
            })
    }, [])

    useEffect(() => {
        fetch('https://sunnahspouse-server.vercel.app/users')
            .then(res => res.json())
            .then(data => {
                const uniqueMarital = Array.from(
                    new Set(data.map((marital) => marital.marital_status))
                );
                setMarital(uniqueMarital);
            })
    }, [])

    useEffect(() => {
        fetch('https://sunnahspouse-server.vercel.app/users')
            .then(res => res.json())
            .then(data => {
                const uniqueDistrict = Array.from(
                    new Set(data.map((district) => district?.permanent_address?.District))
                );
                setDistrict(uniqueDistrict);
            })
    }, [])

    const handleGenderChange = (event) => {
        setGendersChange(event.target.value);
    };
    const handleMartialChange = (event) => {
        setMaritalChange(event.target.value);
    };
    const handleDistrictChange = (event) => {
        setDistrictChange(event.target.value);
    };

    const handleSearch = (GenderChange, MaritalChange, DistrictChange) => {
        console.log(GenderChange, MaritalChange, DistrictChange)
    }

    return (
        <div className='relative shadow-md hover:shadow-lg top-5 md:mx-52 m-10 gap-5 text-black md:flex justify-between items-center border rounded-lg bg-white bg-opacity-80 md:px-20 px-10 md:py-14 py-5'>
            <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text text-lg font-semibold">Looking for</span>
                </label>
                <select onChange={handleGenderChange} className="select select-bordered w-full">
                    <option selected>All</option>
                    {Genders.map((gender, indexOf) => <option value={gender} key={indexOf}>{gender} Biodata</option>)}
                </select>
            </div>
            <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text text-lg font-semibold">Maritial Status</span>
                </label>
                <select onChange={handleMartialChange} className="select select-bordered w-full">
                    <option selected>All</option>
                    {Marital.map((marital, indexOf) => <option key={indexOf}>{marital}</option>)}
                </select>
            </div>
            <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text text-lg font-semibold">Permanent Address</span>
                </label>
                <select onChange={handleDistrictChange} className="select select-bordered w-full">
                    <option selected>All</option>
                    {District.map((district, indexOf) => <option key={indexOf}>{district}</option>)}
                </select>
            </div>
            <div className="form-control w-full max-w-xs md:mt-6">
                <label className="label">
                    <span className="label-text text-lg font-semibold"></span>
                </label>
                <Link to="/biodata">
                    <button onClick={() => handleSearch(GenderChange, MaritalChange, DistrictChange)} className='btn btn-primary w-full'>SEARCH</button>
                </Link>
            </div>
        </div>
    );
};

export default Search;
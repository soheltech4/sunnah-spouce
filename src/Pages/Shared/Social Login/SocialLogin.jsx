import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const SocialLogin = ({title}) => {
    return (
        <div>
            <div className='pt-5'>
                <button className='text-center w-full justify-center shadow-lg input flex items-center gap-5 '>
                    <h1>Sign {title} with Google </h1>
                    <a><FaGoogle /></a>
                </button>
                <button className='text-center w-full mt-5 justify-center shadow-lg input flex items-center gap-5 '>
                    <h1>Sign {title} with Github </h1>
                    <a><FaGithub /></a>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;
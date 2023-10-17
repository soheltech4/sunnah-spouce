import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import SocialLogin from '../../Social Login/SocialLogin';

const Login = () => {

    return (
        <div className='md:flex justify-center items-center pt-20'>
            <div className='md:w-1/3 '>
                <img src="https://i.ibb.co/VjMP2wM/logo2.png w-1/4" alt="" />
            </div>
            <div className='bg-purple-600 bn m-10 p-5 md:w-1/4 rounded-lg'>
                <div>
                    <SocialLogin></SocialLogin>
                    <div className='text-center text-gray-50 my-5'><h1>---------------------------</h1></div>
                    <form>
                        <div className="form-control pb-5">
                            <input type="email" name='email' placeholder="Email" className="input w-full input-bordered" required />
                        </div>
                        <div className="form-control">
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6 ">
                            <input className="btn hover:border-teal-200 " type="submit" value="Login" />
                        </div>
                    </form>
                    <div className='text-center pt-5 '>
                        <a><Link className='text-blue-100 underline' to={"/signup"}>Signup</Link> If you don't have and account</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
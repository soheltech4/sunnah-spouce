import React from 'react';
import SocialLogin from '../Social Login/SocialLogin';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div className='md:flex bg-purple-50 w-full justify-center items-center pt-20 lg:flex-row-reverse'>
            <div className='md:w-1/3 text-center '>
                <img src="https://i.ibb.co/VjMP2wM/logo2.png" className='w-66' alt="" />
                <a><Link className='underline text-purple-600' to={"/login"}>Login</Link> If you have an account</a>
            </div>
            <div className='m-10 p-5 md:w-1/4 rounded-lg'>
                <div>
                    <SocialLogin></SocialLogin>
                    <div className="divider text-black">OR</div>
                    <form>
                        <div className="form-control pb-5">
                            <input type="email" name='email' placeholder="Email" className="shadow-lg input w-full" required />
                        </div>
                        <div className="form-control">
                            <input type="password" name='password' placeholder="password" className="shadow-lg input w-full" required />
                        </div>
                        <div className="form-control mt-6 ">
                            <input className="btn btn-secondary shadow-lg" type="submit" value="Login" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
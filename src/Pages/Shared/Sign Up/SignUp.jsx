import React from 'react';
import SocialLogin from '../Social Login/SocialLogin';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div className='md:flex bg-purple-50 w-full justify-center items-center pt-20'>
            <div className='md:w-1/3 text-center '>
                <img src="https://i.ibb.co/VjMP2wM/logo2.png" className='w-66 fiexed' alt="" />
            </div>
            <div className='m-10 p-5 md:w-1/4 rounded-lg'>
                <div>
                    <SocialLogin title="up"></SocialLogin>
                    <div className="divider text-black">OR</div>
                    <form>
                        <div className="form-control pb-5">
                            <input type="text" name='name' placeholder="Your Name" className="shadow-lg input w-full" required />
                        </div>
                        <div className="form-control pb-5">
                            <input type="email" name='email' placeholder="Email" className="shadow-lg input w-full" required />
                        </div>
                        <div className="form-control pb-5 grid grid-cols-2 gap-x-5">
                            <input type="file" className="file-input  file-input-bordered w-full max-w-xs" />
                            <input type="password" name='password' placeholder="password" className="shadow-lg input w-full" required />
                        </div>
                        <div className="form-control mt-6 ">
                            <input className="btn btn-secondary shadow-lg" type="submit" value="Sign Up" />
                        </div>
                    </form>
                </div>
                <a className='flex justify-center items-center gap-x-2 mt-5' ><Link className='underline text-purple-600 text-lg' to={"/login"}>Login</Link> If you have an account</a>
            </div>
        </div>
    );
};

export default SignUp;
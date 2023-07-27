import React, {useState} from "react";
import {userLogin} from "../utils/userLogin";
import {useNavigate} from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    userLogin(email)
      .then((data) => {
        if (data?.msg === "success") {
          navigate(`/otp?email=${email}`);
        }
      })
      .catch((err) => console.log("There was an error"));
  };
  return (
    <div className='container mx-auto'>
      <div className='grid grid-cols-1 gap-3 mt-2 md:grid-cols-1 lg:grid-cols-1'>
        <div className='flex items-center justify-center w-full h-screen'>
          <div className='w-8/12 bg-white shadow-xl card card-side'>
            <figure>
              <img className='h-96 w-96' src='/images/login-banner.png' alt='Movie' />
            </figure>
            <div className='items-center justify-center card-body'>
              <div className='w-8/12'>
                <h1 className='my-4 text-2xl'>WELCOME BACK</h1>
                <p className='mb-4 text-sm text-gray-600'>Enter your email address and get verification pin</p>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type='text' placeholder='Email..' className='w-full bg-white rounded-lg input input-bordered' />
                <button onClick={handleLogin} className='w-full my-4 rounded-lg btn btn-primary'>
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

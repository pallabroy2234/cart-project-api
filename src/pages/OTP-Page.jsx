import {useState} from "react";
import {verifyLogin} from "../utils/varifyLogin";
import {useNavigate, useSearchParams} from "react-router-dom";

const OtpPage = () => {
  const [pin, setPin] = useState("");
  const navigate = useNavigate();
  const [searchParam] = useSearchParams();
  const email = searchParam.get("email");

  const handleVarifyLogin = () => {
    verifyLogin(email, pin)
      .then((data) => {
        if (data?.msg === "success") {
          localStorage.setItem("token", data.data);
          navigate("/");
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
                <h1 className='my-4 text-2xl'>PIN VERIFICATION</h1>
                <p className='mb-4 text-sm text-gray-600'>4 Digit Verification PIN has been send to your email</p>
                <input onChange={(e) => setPin(e.target.value)} value={pin} type='text' placeholder='4 Digit Pin' className='w-full bg-white rounded-lg input input-bordered' />
                <button onClick={handleVarifyLogin} className='w-full my-4 rounded-lg btn btn-primary'>
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

export default OtpPage;

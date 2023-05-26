import React from 'react';
import Container from '../../components/Container';
import GoogleLogo from '../../assets/images/google-logo.png';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';

const Signup = () => {
  const { loading, createUser, googleSignIn } = useAuth();

  const { register, handleSubmit, reset } = useForm();

  const submitHandler = (data) => {
    try {
      const { email, password, confirmPassword } = data;
      if (password !== confirmPassword) return;
      createUser(email, password).then((data) => {
        if (data?.user) {
          reset();
        }
      });
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <Container>
      <div className="glass p-8 rounded-lg">
        <div className="text-center text-4xl mb-3 md:mb-5">Signup</div>
        <div className="flex justify-center items-center gap-5">
          <div className="w-full md:w-2/3 lg:w-1/2 rounded">
            <div>
              <form onSubmit={handleSubmit(submitHandler)}>
                <div>
                  <label className="label">
                    <span className="label-text">Enter your email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Email"
                    className="input input-bordered glass w-full"
                    {...register('email', { required: true })}
                  />
                </div>
                <div className="mt-5">
                  <label className="label">
                    <span className="label-text">Enter your password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="Password"
                    className="input input-bordered glass w-full"
                    {...register('password', { required: true, minLength: 6 })}
                  />
                </div>
                <div className="mt-5">
                  <label className="label">
                    <span className="label-text">Confirm your password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    className="input input-bordered glass w-full"
                    {...register('confirmPassword', { required: true, minLength: 6 })}
                  />
                </div>
                <button className={`btn btn-block ${loading && 'loading'} mt-5`}>Submit</button>
                <label className="label">
                  <span></span>
                  <span className="label-text text-base">
                    Already Registered?{' '}
                    <Link className="btn-link font-bold" to="/login">
                      Login
                    </Link>
                  </span>
                </label>
              </form>
            </div>
            <div className="divider">OR</div>

            <div className="flex justify-center">
              {/* <div className="tooltip" data-tip="Google Signin"> */}
              <div
                onClick={googleSignIn}
                className="btn btn-circle btn-lg glass inline-block p-2 rounded-lg"
              >
                <img className="inline-block" src={GoogleLogo} alt="google-logo" />
              </div>
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Signup;

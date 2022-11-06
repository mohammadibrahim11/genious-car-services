import React, { useContext } from "react";
import { json, Link, useLocation, useNavigate } from "react-router-dom";
import { FaFacebook, FaGoogle, FaGithub } from "react-icons/fa";
import { AuthContext } from "../../Context/AuthProvider";

const Login = () => {
  const { login } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || '/orders'

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    login(email, password)
      .then((result) => {
        const user = result.user;

        const currentUser = {user: user.email};
        console.log(currentUser);
        navigate(from,{replace:true});
        form.reset();
        
        // get jwt token
        fetch('http://localhost:5000/orders/jwt',{
          method:'POST',
          headers:{
            'content-type':'application/json'
          },
          body: JSON.stringify(currentUser)
        })
        .then(res => res.json())
        .then(data => {
          localStorage.setItem('genius-token',data.token);
          console.log(data) 
        })

        console.log(user.email);
      })
      .catch((error) => console.error(error));
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:text-left lg:w-1/2 md:w-full sm:w-full">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card flex-shrink-0 w-1/2 max-w-sm shadow-2xl bg-base-100">
          <h1 className="text-3xl font-bold text-center">Login now!</h1>
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                name="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                placeholder="password"
                name="password"
                className="input input-bordered"
              />
              <label className="label">
                <Link to="#" className="label-text-alt link link-hover">
                  Forgot password?
                </Link>
              </label>
            </div>
            <div className="form-control">
              <button className="btn btn-primary">Login</button>
            </div>
            <div className="form-control text-center">
              Or sign in with
              <div className="flex gap-2  text-center ">
                <FaFacebook className="h-5 w-5" />
                <FaGoogle className="h-5 w-5 " />
                <FaGithub className="h-5 w-5" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

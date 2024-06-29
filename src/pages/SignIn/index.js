import React, { useState } from "react";
// import "../../assets/css/signin.css";
import "../../assets/css/styles.css";


import { useNavigate } from "react-router-dom";


const SignIn = () => {
  const navigate = useNavigate();
  const [state, setState] = useState({
    email: "",
    password: ""
  })

  //  const handleChange = e => setState({ [e.target.name]: e.target.value });

  const login = async (data) => {
    // data.preventDefault();
    setState({
      email: "",
      password: ""
    });    // this.props.login(this.state);
    navigate("/home")
    // console.log("state", this.state)
  };

  // console.log(errors);

  return (
    //  <form onSubmit={handleSubmit(onSubmit)}>
    //   <div style={{paddingBottom:"30px", fontSize:"30px"}}>Sign In</div>
    //   <div className="form-control">
    //     <label>Email</label>
    //     <input
    //       type="text"
    //       name="email"
    //       {...register("email", {
    //         required: "Email is required.",
    //         pattern: {
    //           value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
    //           message: "Email is not valid."
    //         }
    //       })}
    //     />
    //     {errors.email && <p className="errorMsg">{errors.email.message}</p>}
    //   </div>
    //   <div className="form-control">
    //     <label>Password</label> 
    //     <input
    //       type="password"
    //       name="password"
    //       {...register("password", {
    //         required: "Password is required.",
    //         minLength: {
    //           value: 6,
    //           message: "Password should be at-least 6 characters."
    //         }
    //       })}
    //     />
    //     {errors.password && (
    //       <p className="errorMsg">{errors.password.message}</p>
    //     )}
    //   </div>
    //   <div className="form-control">
    //     <label></label>
    //     <button type="submit">Login</button>
    //   </div>
    // </form>
    <>
      {/* <figure className="h-screen  mt-24" style={{ background: "#fff", marginTop: "24px" }}>
        <div className="  w-full  max-w-md  m-auto  text-center pt-5  text-3xl mt-28 mb-8	font-extrabold	">Login</div>

        <div className="w-full max-w-md m-auto bg-gray-300 rounded-lg border  border-primaryBorder shadow-default py-10 px-1">


          <div className="text-primary m-6">

            <form>
              <label className="text-left text-gray-600 text-xl	  font-family:roboto font-bold">Email</label>
              <input
                name="email"
                type="text"
                value={state.email}
                onChange={(event) => this.setState({ name: event.target.value })}
                placeholder="Email"
                className={
                  "w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-8"
                }
              />
              <label className="text-left text-gray-600 text-xl font-family:roboto font-bold">Password</label>
              <input
                name="password"
                type="password"
                value={state.password}
                onChange={(event) => this.setState({ name: event.target.value })}
                placeholder="Password"
                className={
                  "w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-12"
                }
              />
              <div className="flex items-center mt-3 justify-center">
                <button
                  className={
                    "bg-blue-700 w-full max-w-md  hover:bg-blue-500 py-2 px-4 text-xl rounded-lg border border-blue focus:outline-none text-white focus:border-blacks"
                  }
                  value="Login"
                  type="submit"
                  onClick={login}
                >
                  Login
                </button>
              </div>
            </form>

          </div>

        </div>
      </figure> */}
   <div id="layoutAuthentication">
            <div id="layoutAuthentication_content">
                <main>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-5">
                                <div className="card shadow-lg border-0 rounded-lg mt-5">
                                    <div className="card-header"><h3 className="text-center font-weight-light my-4">Login</h3></div>
                                    <div className="card-body">
                                        <form>
                                            <div className="form-floating mb-3">
                                                <input className="form-control" id="inputEmail" type="email" placeholder="name@example.com" />
                                                <label >Email address</label>
                                            </div>
                                            <div className="form-floating mb-3">
                                                <input className="form-control" id="inputPassword" type="password" placeholder="Password" />
                                                <label  >Password</label>
                                            </div>
                                            <div className="form-check mb-3">
                                                <input className="form-check-input" id="inputRememberPassword" type="checkbox" value="" />
                                                <label className="form-check-label"  >Remember Password</label>
                                            </div>
                                            <div className="d-flex align-items-center justify-content-between mt-4 mb-0">
                                                <a className="small" href="password.html">Forgot Password?</a>
                                                <a className="btn btn-primary" onClick={login} >Login</a>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="card-footer text-center py-3">
                                        <div className="small"><a href="register.html">Need an account? Sign up!</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
            <div id="layoutAuthentication_footer">
                <footer className="py-4 bg-light mt-auto">
                    <div className="container-fluid px-4">
                        <div className="d-flex align-items-center justify-content-between small">
                            <div className="text-muted">Copyright &copy; Your Website 2023</div>
                            <div>
                                <a href="#">Privacy Policy</a>
                                &middot;
                                <a href="#">Terms &amp; Conditions</a>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    </>
  );
}

export default SignIn;
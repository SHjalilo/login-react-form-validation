import { Link } from "react-router-dom";



const SignUp = ()=>{

    return(
        <div className='signup template d-flex justify-content-center align-items-center 100-w vh-100 bg-primary'>
            <div className="50-w p-5 rounded bg-white">
                <form>
                <h3 className="text-center">Sign Up</h3>
                <div className="mb-2">
                    <label htmlFor="fname">First Name : </label>
                    <input type="text" placeholder='Enter First Name' className='form-control' />
                </div>
                <div className="mb-2">
                    <label htmlFor="lname">Last Name : </label>
                    <input type="text" placeholder='Enter Last Name' className='form-control' />
                </div>
                <div className="mb-2">
                    <label htmlFor="email">Email : </label>
                    <input type="email" placeholder='Enter email' className='form-control' />
                </div>
                <div className="mb-2">
                    <label htmlFor="password">Password : </label>
                    <input type="password" placeholder='Enter password' className='form-control' />
                </div>
                <div className="d-grid mt-2">
                    <button className='btn btn-primary'>Sing Up</button>
                </div>
                <p className="text-end mt-2">
                   Already Registred <Link to="/" className="ms-2">Sign In</Link>
                </p>
                </form>
            </div>
        </div>
    )
}

export default SignUp;
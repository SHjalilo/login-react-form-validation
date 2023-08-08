import { Link } from "react-router-dom";


const Login = ()=>{

    return(
        <div className='login template d-flex justify-content-center align-items-center 100-w vh-100 bg-primary'>
        <div className="50-w p-5 rounded bg-white">
            <form>
            <h3 className="text-center">Sign In</h3>
            <div className="mb-2">
                <label htmlFor="email">Email : </label>
                <input type="email" placeholder='Enter email' className='form-control' />
            </div>
            <div className="mb-2">
                <label htmlFor="password">Password : </label>
                <input type="password" placeholder='Enter password' className='form-control' />
            </div>
            <div className="mb-2">
                <input type="checkbox" id='check' className='costom-control costom-checkbox' />
                <label htmlFor="check" className='costom-input-label ms-2'> Remember me </label>
            </div>
            <div className="d-grid">
                <button className='btn btn-primary'>Sing In</button>
            </div>
            <p className="text-end mt-2">
                Forgot <Link to="/" className="ms-2">Password?</Link> <Link to="/signup" className="ms-2">Sign Up</Link>
            </p>
            </form>
        </div>
    </div>
    )
}

export default Login;
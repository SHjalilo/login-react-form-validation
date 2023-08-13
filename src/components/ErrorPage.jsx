



const ErrorPage = ()=>{

    return(
        <div className="container bg-black p-5 mt-4 rounded">
        <h1 className="text-center p-5 errNumber ">404</h1>
        <p className="text-center errText ">
        The page you are attempting to reach is currently not available. This may be because the page does not exist or has been moved.
        </p>
        <div className="text-center p-5">
        <button className="btn btn-white btn_bh">BACK HOME
        </button>
        </div>
        
        </div>
    )
}

export default ErrorPage;
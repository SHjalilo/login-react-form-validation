import { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form"




const SignUp = ()=>{
   /* 
    const [formData,setFormData] = useState({
        firstname : '',
        lastname : '',
        email : '',
        password : '',
        confirmPassword : ''
    })

    const [errors,setErrors] = useState({})

    const handleChange = (e) => {
        const {name, value} = e.target;
            setFormData({
            ...formData, [name] : value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const validitionErrors = {}

        if(!formData.firstname.trim()){
            validitionErrors.firstname = 'firstname is required !';
        }

        if(!formData.lastname.trim()){
            validitionErrors.lastname = 'lastname is required !';
        }

        if(!formData.email.trim()){
            validitionErrors.email = 'email is required !';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            validitionErrors.email = 'email is not valid !';
        }

        if(!formData.password.trim()){
            validitionErrors.password = 'password is required !';
        } else if (formData.password.length < 8) {
            validitionErrors.password = 'password should be at least 8 char !';
        }

        if(formData.confirmPassword !== formData.password){
            validitionErrors.confirmPassword = 'password not matched !';
        }

        setErrors(validitionErrors)

        if(Object.keys(validitionErrors).length === 0) {
            alert('Form Submitted Successfully !');
        }
    }
    */
    
    const {
        register,
        handleSubmit,
        reset,
        trigger,
        watch,
        formState: { errors },
      } = useForm();

    const onSubmit = (data) =>{
        console.log(data);
        reset();
    } 

    return(
        <div className='signup template d-flex justify-content-center align-items-center 100-w vh-100 bg-primary'>
            <div className="50-w p-5 rounded bg-white">
                <form onSubmit={handleSubmit(onSubmit)} >
                    <h3 className="text-center">Sign Up</h3>
                    <div className="mb-2">
                        <label htmlFor="fname">First Name : </label>
                        <input
                         type="text"
                          placeholder='Enter First Name'
                           className={`form-control ${errors.firstname && "invalid"}`}
                            {...register("firstname",{
                                required : 'First name is required !'
                            })}
                            onKeyUp={()=>{
                                trigger('firstname');
                            }}
                        />
                        {errors.firstname && (<span>{errors.firstname.message}</span>) }
                    </div>
                    <div className="mb-2">
                        <label htmlFor="lname">Last Name : </label>
                        <input
                         type="text"
                          placeholder='Enter Last Name'
                          className={`form-control ${errors.lastname && "invalid"}`}
                            {...register("lastname",{
                                required : "Last name is required !"
                            })}
                            onKeyUp={()=>{
                                trigger('lastname');
                            }}
                        />
                        {errors.lastname && (<span>{errors.lastname.message}</span>) }
                    </div>
                    <div className="mb-2">
                        <label htmlFor="email">Email : </label>                        
                        <input
                         type="text"
                          placeholder='name@example.com'
                          className={`form-control ${errors.email && "invalid"}`}
                            {...register("email",{
                                required : 'Email is required !',
                                pattern : {
                                    value : /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i ,
                                    message : 'Invalid email address'
                                }
                            })}
                            onKeyUp={()=>{
                                trigger('email');
                            }}
                        />
                        {errors.email && (<span>{errors.email.message}</span>) }
                    </div>
                    <div className="mb-2">
                        <label htmlFor="password">Password : </label>
                        <input
                         type="password"
                          placeholder='Enter password'
                          className={`form-control ${errors.password && "invalid"}`}
                            {...register("password",{
                                required : 'password is required !'
                            })}
                            onKeyUp={()=>{
                                trigger('password');
                            }}
                        />
                        {errors.password && (<span>{errors.password.message}</span>) }
                    </div>
                    <div className="mb-2">
                        <label htmlFor="Cpassword">Confirm Password : </label>
                        <input
                         type="password"
                          placeholder='Confirm password'
                          className={`form-control ${errors.confirmPassword && "invalid"}`}
                            {...register("confirmPassword",{
                                required : 'Confirm password is required !',
                                validate : (val) =>{
                                    if (watch('password') != val) {
                                        return "Your passwords do no match";
                                    }    
                                }
                            })}
                            onKeyUp={()=>{
                                trigger('confirmPassword');
                            }}
                        />
                        {errors.confirmPassword && (<span>{errors.confirmPassword.message}</span>) }
                    </div>
                    <div className="d-grid mt-2">
                        <button type="submit" className='btn btn-primary'>Sing Up</button>
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
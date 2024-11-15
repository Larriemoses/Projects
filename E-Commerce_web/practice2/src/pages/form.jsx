import React from 'react'
import '../styles/form.css'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import * as yup from 'yup'


function Form() {
    

    const schema = yup.object().shape({
        fullName: yup.string().required("Full Name is required"),
        email: yup.string().email().required("Email is required"),
        age: yup.number().positive().integer().min(18).required().typeError("Age is required"),
        password: yup.string().min(4).max(20).required().typeError("Password is required"),
        confirmPassword: yup.string().oneOf([yup.ref("password"), null], "Password Don't match").required().typeError("Confirm Password"),

    })

    
    const { register, handleSubmit, formState: {errors} } = useForm({
        resolver: yupResolver(schema)
    })

    const onSubmit = (data) => {
        console.log(data)
    }

  return (
    <>
    <div>
        <h1>Registration Form</h1>
    </div>
    <form onSubmit={handleSubmit(onSubmit)}>
     <div>   
        <input type="text" placeholder='Full Name...' {...register("fullName")}/>
     {errors.fullName && <p style={{color: 'red'}}>{errors.fullName.message}</p>}
     </div> 
        <div>
            <input type="text" placeholder='Email...'{...register("email")}/>
            {errors.email && <p style={{color: 'red'}}>{errors.email.message}</p>}
        </div>

        <div><input type="number" placeholder='Age...'{...register("age")}/>
        {errors.age && <p style={{color: 'red'}}>{errors.age.message}</p>}
        </div>
       <div> 
        <input type="password" placeholder='Password...' {...register("password")}/>
        {errors.password && <p style={{color: 'red'}}>{errors.password.message}</p>}
       </div>
       <div> 
        <input type="password" placeholder='Confirm Password... ' {...register("confirmPassword")}/>
        {errors.confirmPassword && <p style={{color: 'red'}}>{errors.confirmPassword.message}</p>}
       </div>
        <input className="submit" type="submit" />
        

    </form>
    </>
  )
}

export default Form
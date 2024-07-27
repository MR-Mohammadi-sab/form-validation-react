import {useForm} from "react-hook-form"
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'

export function Form(){
    
    function onFormSubmit(data){

    }
    const schema=yup.object().shape({
        name:yup.string().required(),
        email:yup.string().email("this is not email").required("email is required"),
        age:yup.number("age must be Number").positive().min(18).max(100).required("Age must be"),
        password:yup.string().min(4).max(15).matches(/[a-z]+/).matches(/[A-Z]+/).matches(/\d+/).required()
        ,confirmPassword:yup.string().oneOf([yup.ref("password")],"pasowrd is not mached").required()
       })   

    const {register,handleSubmit,formState:{errors}}=useForm({resolver:yupResolver(schema)})
    return <div className="formContainer">
        <h1>Sign in</h1>
        <form onSubmit={handleSubmit(onFormSubmit)}>
            <label htmlFor="name">Enter your name</label>
            <input type="text" placeholder="Name" {...register("name")} id="name"/>
            {errors.name &&(<p>{errors.name?.message}</p>)}
            <label htmlFor="email">Enter your Email</label>
            <input type="email" placeholder="Email" {...register("email")} id="email"/>
            {errors.email &&(<p>{errors.email?.message}</p>)}
            <label htmlFor="age">Enter your Age</label>
            <input type="text" placeholder="age"   {...register("age")} id="age"/>
            {errors.age &&(<p>{errors.age?.message}</p>)}
            <label htmlFor="password">Enter your password</label>
            <input type="password" placeholder="password" {...register("password")} id="password"/>
            {errors.password &&(<p>{errors.password?.message}</p>)}
            <label htmlFor="confirmPassword">Confirm your password</label>
            <input type="password" placeholder=" confirm password" {...register("confirmPassword")} id="confirmPassword"/>
            {errors.confirmPassword &&(<p>{errors.confirmPassword?.message}</p>)}
            <button>submit</button>
        </form>
    </div>
}
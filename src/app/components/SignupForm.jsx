'use client'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { FaRegUserCircle } from 'react-icons/fa'
import { IoMdLogIn } from 'react-icons/io'
import { MdOutlineMailLock } from "react-icons/md";
import { TbLockPassword } from 'react-icons/tb'
import { signupAction } from './action/SignupAction'

const SignupForm = () => {
  
    const { register, handleSubmit, reset, formState: { errors }, } = useForm();
    const onSubmit = async (data) => {
        await signupAction(data)
        // console.log(data)
        reset();
    }
    return (
        <div className='max-w-sm mx-auto mt-20 border-2 border-slate-100 rounded-md shadow-md'>
           
            <form onSubmit={handleSubmit(onSubmit)} className='p-2'>
                <fieldset className='flex flex-col gap-2 w-full p-2'>
                    <label htmlFor="" className='text-white flex items-center gap-1'><span><FaRegUserCircle /></span>Username</label>
                    <input type="text"
                        placeholder='john'
                        {...register('username', { required: true })}
                        className='border border-slate-200 py-2 px-2 rounded-md outline-none'
                    />
                    {
                        errors.usename?.type == 'required' && (
                            <p className='text-orange-500'>Username Required</p>
                        )
                    }
                </fieldset>

                <fieldset className='flex flex-col gap-2 w-full p-2'>
                    <label htmlFor="" className='text-white flex items-center gap-1'><MdOutlineMailLock size={20}/>Email</label>
                    <input type="email"
                        placeholder='john@gmail.com'
                        {...register('email', { required: true })}
                        className='border border-slate-200 py-2 px-2 rounded-md outline-none'
                    />
                    {
                        errors.email?.type == "required" && (
                            <p className='text-orange-500'>Email Required</p>
                        )
                    }
                </fieldset>

                <fieldset className='flex flex-col gap-2 w-full p-2'>
                    <label htmlFor="" className='text-white flex items-center gap-1'><span><TbLockPassword size={20} /></span>Password</label>
                    <input type="password"
                        placeholder='*********'
                        {...register('password', { required: true })}
                        className='border border-slate-200 py-2 px-2 rounded-md outline-none'
                    />
                    {
                        errors.password?.type == "required" && (
                            <p className='text-orange-500'>Email Required</p>
                        )
                    }
                </fieldset>

                <fieldset className="px-4 py-3">
                    <button type="submit" className="bg-blue-600 text-blue-50 cursor-pointer  px-5 py-2 rounded-md w-fit flex items-center gap-1"><span><IoMdLogIn /></span>Register</button>
                </fieldset>
               <div className='text-center'>
                <p className='text-yellow-400'>Already Registered? <Link className='text-blue-500 underline font-medium' href={'/login'}>Login</Link></p>
               </div>
            </form>
        </div>
    )
}

export default SignupForm

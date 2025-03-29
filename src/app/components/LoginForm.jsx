'use client'

import { useForm } from "react-hook-form"
import { loginAction } from "./action/LoginAction";
import { useState } from "react";
import { BiError } from "react-icons/bi";
import { FaRegUserCircle } from "react-icons/fa";
import { TbLockPassword } from "react-icons/tb";
import { IoMdLogIn } from "react-icons/io";
import Link from "next/link";
function LoginForm() {
  const [errorMessage, setErrorMessage] = useState(null)
  const { register, handleSubmit, reset, formState: { errors }, } = useForm();
  const onSubmit = async (data) => {
    const res = await loginAction(data);
    setErrorMessage(res?.error)
    console.log("Form submitted", res);
  }
  return (
    <div className="text-white max-w-sm mx-auto mt-20 border-2 border-slate-100 rounded-md shadow-2xs">
      {
        errorMessage && <div className="bg-orange-500 text-orange-50 text-center p-2 m-3 rounded-md flex  justify-center items-center"><span><BiError /></span>{errorMessage}</div>
      }
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset className="flex flex-col gap-3 w-full p-4">
          <label htmlFor="" className="text-white flex items-center gap-1"><span><FaRegUserCircle /></span>Username</label>
          <input
            type="text"
            {...register('username', { required: true })}
            className="border border-slate-200 py-2 px-2 rounded-md outline-none" />
          {
            errors.username?.type == "required" && (
              <p className="text-orange-500">Username Required</p>
            )
          }
        </fieldset>

        <fieldset className="flex flex-col gap-3 w-full p-4">
          <label htmlFor="" className="text-white flex items-center gap-1"><span><TbLockPassword size={20} /></span>Password</label>
          <input
            type="password"
            {...register('password', { required: true })}
            className="border border-slate-200 py-2 px-2 rounded-md outline-none" />
          {
            errors.password?.type == "required" && (
              <p className="text-orange-500">Password Required</p>
            )
          }
        </fieldset>

        <fieldset className="px-4 py-3">
          <button type="submit" className="bg-blue-600 text-blue-50 cursor-pointer  px-5 py-2 rounded-md w-fit flex items-center gap-1"><span><IoMdLogIn /></span>Login</button>
        </fieldset>
        <div className="text-center">
          <p className="text-yellow-500 pb-2">Not Yet Registered? <Link href={'/signup'} className="text-blue-500 underline">Signup</Link></p>
        </div>
      </form>
    </div>
  )
}

export default LoginForm
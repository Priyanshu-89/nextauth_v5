'use server'

import { DbConnect } from "@/app/db/DbConnect"
import User from "@/app/model/user";
import bcrypt from 'bcrypt'

export async function signupAction(formData) {
    await DbConnect();
    const { username, email, password } = formData;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    await User.create({
        username: username,
        email: email,
        password: hashedPassword
    })
    // await User.create(formData);
    // console.log(formData)
}
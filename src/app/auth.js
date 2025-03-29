import NextAuth from "next-auth";
import Credentials from 'next-auth/providers/credentials'
import { DbConnect } from "./db/DbConnect";
import User from "./model/user";
import bcrypt from 'bcrypt'

export const { auth, signIn, handlers: { GET, POST } } = NextAuth({
    providers: [
        Credentials({
            name: 'credentials',
            async authorize(credentials) {
                await DbConnect();
                const user = await User.findOne({ username:credentials?.username,
                    // password:credentials?.password
                 });
               if(user){
                const matched=bcrypt.compare(credentials?.password, user.password)
                if(matched){
                    return user
                }
                return null
               }else{
                return null
               }
            }
        })
    ],
    secret: process.env.AUTH_SECRET,
    pages: {
        signIn: '/login',
    },
    callbacks: {
        jwt: async ({ token, user }) => {
            if (user) {
                token.role = "admin";
            }
            return token;
        },
        session: async ({ session, token }) => {
            if (session?.user) {
                session.user.role = token.role;
            }
            return session;
        }
    },

    //for jwt session token for expires logic

    // session:{
    //     strategy:"jwt",
    //     maxAge:10
    // }
})
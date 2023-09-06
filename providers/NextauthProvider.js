"use client"
import { SessionProvider } from "next-auth/react";



const NextauthProvider = ({children}) => {
    return <SessionProvider>{children}</SessionProvider>
};

export default NextauthProvider;
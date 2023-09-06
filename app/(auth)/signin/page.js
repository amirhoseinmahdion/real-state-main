

import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import SigninPage from '@/template/SigninPage';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';



const signin= async() => {
    const session = await getServerSession(authOptions)
    
    if(session){redirect("/")}
    return (
        <div>
            <SigninPage/>
        </div>
    );
};

export default signin;



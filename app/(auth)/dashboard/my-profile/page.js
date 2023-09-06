import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import User from '@/models/userschema';
import ConnectDB from '@/utils/ConnectDB';
import { getServerSession } from 'next-auth';
import Myprofilepage from '@/template/myprofilepage';

const MyProfile = async() => {
    await ConnectDB()
    const session = await getServerSession(authOptions)
    const [user] =  await User.aggregate([{
        $match : {
            email:session.user.email
        }
    },{
        $lookup:{
            from:"profiles",
            foreignField:"userId",
            localField:"_id",
            as:"profiles"
        }
    }])
    
    return (
    <Myprofilepage profiles={user.profiles}/>
    );
};

export default MyProfile;
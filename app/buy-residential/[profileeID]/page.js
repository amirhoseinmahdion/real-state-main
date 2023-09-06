import Profile from "@/models/profileschema";
import Detailprofilepage from "@/template/Detailprofilepage";
import ConnectDB from "@/utils/ConnectDB";



const ProfileDetail = async({params}) => {
    
    await ConnectDB()
    const id = await params.profileeID
    const profile = await Profile.findOne({_id : id})
    if(!profile) return <h1>همچین اگهی وجود ندارد مجدد تلاش کنید</h1>
    return (
        <div>
        <Detailprofilepage data={profile}/>
        </div>
    );
};

export default ProfileDetail;

export const generateMetadata = async({params}) => {

    await ConnectDB()
    const id = await params.profileeID

    const prodata = await Profile.findOne({_id :id})


    return{
        title: prodata.title,
        description:prodata.description,
        author:{name : prodata.whereprofile}
    }

}
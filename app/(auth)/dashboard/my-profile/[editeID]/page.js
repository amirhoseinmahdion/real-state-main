
import Profile from '@/models/profileschema';


import AddProfilepage from '@/template/addProfilepage';
import ConnectDB from '@/utils/ConnectDB';
import React from 'react';

const Editeid = async({params}) => {
    await ConnectDB()
   const id = params.editeID
   const profile = await Profile.findOne({_id : id})
  


   if(!profile) return <h3> مشکلی پیش امده است لطفا دوباره تلاش کنید</h3>

    return (
        <div>
            <AddProfilepage data={JSON.parse(JSON.stringify(profile))}/>
            
           
        </div>
    );
};

export default Editeid;
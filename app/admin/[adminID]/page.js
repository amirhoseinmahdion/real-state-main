import Profile from '@/models/profileschema';
import Detailprofilepage from '@/template/Detailprofilepage';
import ConnectDB from '@/utils/ConnectDB';
import React from 'react';

const Admindetails = async({params}) => {
    await ConnectDB()
    const id = params.adminID
    const profile = await Profile.findOne({_id:id})
   
    return (
        <div>
           <Detailprofilepage data={profile}/>
        </div>
    );
};

export default Admindetails;
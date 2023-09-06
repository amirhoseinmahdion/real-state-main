
import Buyresedintialpage from '@/template/Buyresedintialpage';




const Allprofiles = async({searchParams}) => {
    const res = await fetch("http://localhost:3000/api/profile",{cache:"no-store"})
    const data = await res.json()
  
   
    
    if(data.error){
        <h1>مشکلی پیش امده است</h1>
        
    }

   
    let finaldata = data.data
    if(searchParams.categoriy) {
        finaldata = finaldata.filter(item => item.categoriy === searchParams.categoriy)
    }
 
    
    return (
        <div>
            <Buyresedintialpage data={finaldata}  />
        
           
        </div>
    );
};

export default Allprofiles;
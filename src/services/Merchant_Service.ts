import { ServiceBase } from "./Service_Base";

export class MerchantService extends ServiceBase{
    static getMerchant=async()=>{
    try {var merchantResp=await fetch(this.getUrl('/merchants'),{
        method:'GET',
       
    });
     if (!merchantResp.ok) {
         throw new Error(`HTTP error! Status: ${merchantResp.status}`);
       } 
    var data =await merchantResp.json();
    if (data?.data?.[0]?.logo) {
        return(data.data[0].logo);
       
    } else {
       return '';
    }
     
     
    
      
    }catch(error){
        console.error("Error fetching merchant:", error);
        return ("null");  
      }
    }

    static   getCategory=async(): Promise<string[]>=>{
        try {
            const catResp = await fetch(this.getUrl('/categories'), {
                method: 'GET',
            });
    
            if (!catResp.ok) {
                throw new Error(`HTTP error! Status: ${catResp.status}`);
            }
    
            const data = await catResp.json();
    
            // Extracting and returning only the image fields from the response
            if (data?.data?.length > 0) {
                console.log("catgry",data.data);
                return data.data.map((category:any )=> category.image);
            } else {
                return [];
            }
        } catch (error) {
            console.error("Error fetching categories:", error);
            return [];
        }
        
       
         
      

    }

}
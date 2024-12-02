import { ServiceBase } from "./Service_Base";

export class ProductService extends ServiceBase{
    static getProducts=async()=>{
        try {var productsResp=await fetch(this.getUrl('/products'),{
            method:'GET',
           
        });
        if (!productsResp.ok) {
            throw new Error(`HTTP error! Status: ${productsResp.status}`);
          }
        var data=await productsResp.json();
        
        return data.data || [];
        }catch(error){
            console.error("Error fetching products:", error);
            return [];  
          }
        }

        static getProductById= async(id:string)=>{
            try{ var productsResp=await fetch(this.getUrl('/products/'+id),{
             method:'GET',
            
            });
             var product=await productsResp.json();
             return product.data;
         }catch(error){
             console.error("Error fetching products:", error);
         }
         
           }

           

       
 }
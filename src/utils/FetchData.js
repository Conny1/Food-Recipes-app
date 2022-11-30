import axios from "axios";


  export const FetchData= async (url)=>{
    let data = await axios.get(url);
    return data;
    
  }
/* eslint-disable react/prop-types */

import { BoxList } from "./BoxList"


export const Thoughts = ({list , load}) => {

  return (
    <div>
        {load ? <div>Loading ....</div> : 
        list.map((item)=>{
            
                    return <div key={item._id}><BoxList info={item}/></div>
            }) 
        }
            
            
    </div>
    

  )
}

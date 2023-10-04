/* eslint-disable react/prop-types */


export const Thoughts = ({list}) => {

  return (
    <div>
            <div>Thoughts</div>
            {list.map((item)=>{
                    return <div key={item._id}>item</div>
            })}
    </div>

  )
}

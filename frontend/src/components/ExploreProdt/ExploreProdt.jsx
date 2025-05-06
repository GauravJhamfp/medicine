import React, { useContext } from 'react'
import './Exploreprodt.css'
import { StoreContext } from '../../Context/StoreContext'

const Exploreprodt = ({category,setCategory}) => {

  const {prodt_list} = useContext(StoreContext);
  
  return (
    <div className='explore-prodt' id='explore-prodt'>
      <h1>Browse by Health Condition</h1>
      <p className='explore-prodt-text'>Choose from a diverse prodt featuring a delectable array of dishes. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.</p>
      <div className="explore-prodt-list">
        {prodt_list.map((item,index)=>{
            return (
                <div onClick={()=>setCategory(prev=>prev===item.prodt_name?"All":item.prodt_name)} key={index} className='explore-prodt-list-item'>
                    <img src={item.prodt_image} className={category===item.prodt_name?"active":""} alt="" />
                    <p>{item.prodt_name}</p>
                </div>
            )
        })}
      </div>
      <hr />
    </div>
  )
}

export default Exploreprodt
